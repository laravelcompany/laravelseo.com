import React, { useMemo, Fragment } from 'react';
import type { ReactNode } from 'react';

type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'code'; lang: string; code: string }
  | { type: 'heading'; level: number; text: string }
  | { type: 'blockquote'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'hr' }
  | { type: 'table'; header: string[]; rows: string[][] };

const INLINE_SOURCE =
  '(`[^`\\n]+`)|(\\*\\*[^*\\n]+\\*\\*)|(\\*[^*\\n]+\\*)|(~~[^~\\n]+~~)|(\\[[^\\]]+\\]\\([^)\\s]+\\))';

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const re = new RegExp(INLINE_SOURCE, 'g');
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }
    const [full, code, bold, italic, strike, link] = match;
    if (code) {
      nodes.push(
        <code
          key={key++}
          className="rounded bg-slate-700/60 px-1.5 py-0.5 font-mono text-[0.85em] text-violet-300"
        >
          {code.slice(1, -1)}
        </code>
      );
    } else if (bold) {
      nodes.push(<strong key={key++} className="font-semibold text-slate-100">{renderInline(bold.slice(2, -2))}</strong>);
    } else if (italic) {
      nodes.push(<em key={key++}>{renderInline(italic.slice(1, -1))}</em>);
    } else if (strike) {
      nodes.push(<del key={key++}>{strike.slice(2, -2)}</del>);
    } else if (link) {
      const m = link.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
      if (m) {
        const href = m[2];
        const safe = /^(https?:|mailto:)/i.test(href) ? href : undefined;
        nodes.push(
          safe ? (
            <a
              key={key++}
              href={safe}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 underline underline-offset-2 hover:text-violet-300"
            >
              {renderInline(m[1])}
            </a>
          ) : (
            <Fragment key={key++}>{m[1]}</Fragment>
          )
        );
      }
    }
    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return nodes;
}

function parseRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\||\|$/g, '')
    .split('|')
    .map((c) => c.trim());
}

function isTableSeparator(line: string): boolean {
  const cells = parseRow(line);
  return cells.length > 1 && cells.every((c) => /^:?-{2,}:?$/.test(c));
}

function parseBlocks(content: string): Block[] {
  const lines = content.split('\n');
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === '') {
      i++;
      continue;
    }

    const fence = trimmed.match(/^```([\w-]*)/);
    if (fence) {
      const lang = fence[1];
      i++;
      const code: string[] = [];
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        code.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: 'code', lang, code: code.join('\n').replace(/\n$/, '') });
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      blocks.push({ type: 'heading', level: heading[1].length, text: heading[2] });
      i++;
      continue;
    }

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    if (trimmed.startsWith('>')) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quote.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({ type: 'blockquote', text: quote.join('\n') });
      continue;
    }

    if (trimmed.includes('|') && lines[i + 1] && isTableSeparator(lines[i + 1])) {
      const header = parseRow(trimmed);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && lines[i].trim().includes('|') && lines[i].trim() !== '') {
        rows.push(parseRow(lines[i]));
        i++;
      }
      blocks.push({ type: 'table', header, rows });
      continue;
    }

    const ulMatch = trimmed.match(/^[-*+]\s+(.+)$/);
    const olMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (ulMatch || olMatch) {
      const ordered = !!olMatch;
      const items: string[] = [];
      while (i < lines.length) {
        const t = lines[i].trim();
        const itemMatch = ordered ? t.match(/^\d+\.\s+(.+)$/) : t.match(/^[-*+]\s+(.+)$/);
        if (itemMatch) {
          items.push(itemMatch[1]);
          i++;
        } else if (t === '' || /^\s/.test(lines[i])) {
          if (items.length) items[items.length - 1] += ' ' + t;
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: 'list', ordered, items });
      continue;
    }

    const para: string[] = [trimmed];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^(```|#{1,6}\s|>|[-*+]\s|\d+\.\s|(-{3,}|\*{3,}|_{3,})$)/.test(lines[i].trim())
    ) {
      para.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: 'paragraph', text: para.join('\n') });
  }

  return blocks;
}

function renderBlock(block: Block, key: number): ReactNode {
  switch (block.type) {
    case 'heading': {
      const Tag = block.level === 1 ? 'h1' : block.level === 2 ? 'h2' : 'h3';
      const cls =
        block.level === 1
          ? 'text-base font-semibold text-slate-100'
          : block.level === 2
            ? 'text-[0.95rem] font-semibold text-slate-100'
            : 'text-sm font-semibold text-slate-100';
      return <Tag key={key} className={cls}>{renderInline(block.text)}</Tag>;
    }
    case 'paragraph':
      return (
        <p key={key} className="text-sm leading-relaxed text-slate-200">
          {renderInline(block.text)}
        </p>
      );
    case 'blockquote':
      return (
        <blockquote key={key} className="border-l-2 border-violet-400/60 pl-3 text-sm italic text-slate-400">
          {renderInline(block.text)}
        </blockquote>
      );
    case 'list':
      return block.ordered ? (
        <ol key={key} className="list-decimal space-y-1 pl-5 text-sm text-slate-200">
          {block.items.map((item, j) => (
            <li key={j} className="leading-relaxed">{renderInline(item)}</li>
          ))}
        </ol>
      ) : (
        <ul key={key} className="list-disc space-y-1 pl-5 text-sm text-slate-200">
          {block.items.map((item, j) => (
            <li key={j} className="leading-relaxed">{renderInline(item)}</li>
          ))}
        </ul>
      );
    case 'code':
      return (
        <div key={key} className="overflow-hidden rounded-lg border border-slate-700/50 bg-slate-950/80">
          <div className="flex items-center justify-between border-b border-slate-700/50 bg-slate-900/80 px-3 py-1.5">
            <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
              {block.lang || 'code'}
            </span>
          </div>
          <pre className="overflow-x-auto p-3 font-mono text-[13px] leading-relaxed text-slate-200">
            <code>{block.code}</code>
          </pre>
        </div>
      );
    case 'table':
      return (
        <div key={key} className="overflow-x-auto rounded-lg border border-slate-700/50">
          <table className="w-full text-sm text-slate-200">
            <thead>
              <tr className="bg-slate-900/80">
                {block.header.map((cell, j) => (
                  <th key={j} className="px-3 py-2 text-left font-medium text-slate-100">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-slate-700/50">
                  {row.map((cell, c) => (
                    <td key={c} className="px-3 py-2 align-top">{renderInline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'hr':
      return <hr key={key} className="border-slate-700/50" />;
  }
}

export default function Markdown({ content }: { content: string }) {
  const blocks = useMemo(() => parseBlocks(content), [content]);
  return <div className="break-words space-y-2">{blocks.map((block, i) => renderBlock(block, i))}</div>;
}
