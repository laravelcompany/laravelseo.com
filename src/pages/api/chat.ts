import type { APIRoute } from 'astro';

export const prerender = false;

const UPSTREAM = 'https://ai.izdrail.com/api/chat';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.text();
  if (!body) {
    return new Response(JSON.stringify({ error: 'Empty request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const upstream = await fetch(UPSTREAM, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => '');
    return new Response(JSON.stringify({ error: `Upstream error: ${upstream.status}`, detail }), {
      status: upstream.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'Content-Type': upstream.headers.get('content-type') ?? 'application/x-ndjson',
    },
  });
};
