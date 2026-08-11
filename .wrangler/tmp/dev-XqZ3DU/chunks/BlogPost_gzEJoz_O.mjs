globalThis.process ??= {}; globalThis.process.env ??= {};
import { af as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, ak as renderScript, a as renderTemplate, r as renderComponent, al as renderSlot } from './astro/server_BA1YRW7y.mjs';
import { $ as $$BaseLayout } from './BaseLayout_D4EOnj5P.mjs';
import { $ as $$ArticleSchema } from './ArticleSchema_HWfPIoUY.mjs';
import { $ as $$BreadcrumbSchema } from './BreadcrumbSchema_D20bdGzY.mjs';

const $$Astro$3 = createAstro("https://laravelseo.com");
const $$ShareButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ShareButtons;
  const { title, url, description } = Astro2.props;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-2"> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="share-btn share-twitter" aria-label="Share on Twitter"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path> </svg> </a> <a${addAttribute(`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, "href")} target="_blank" rel="noopener noreferrer" class="share-btn share-linkedin" aria-label="Share on LinkedIn"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="share-btn share-facebook" aria-label="Share on Facebook"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a> <button class="share-btn share-copy" id="copy-link-btn"${addAttribute(url, "data-url")} aria-label="Copy link"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path> </svg> </button> </div> ${renderScript($$result, "/home/stefan/Projects/laravelseo.com/src/components/blog/ShareButtons.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/stefan/Projects/laravelseo.com/src/components/blog/ShareButtons.astro", void 0);

const $$Astro$2 = createAstro("https://laravelseo.com");
const $$AuthorCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AuthorCard;
  const {
    name = "Stefan",
    bio = "SEO engineer and Laravel developer. Building tools to help Laravel applications rank higher in search results.",
    avatar = "/avatar.png"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-8"> <div class="flex flex-col sm:flex-row items-start gap-6"> <img${addAttribute(avatar, "src")}${addAttribute(name, "alt")}${addAttribute(80, "width")}${addAttribute(80, "height")} class="w-20 h-20 rounded-full object-cover ring-2 ring-violet-500/20" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%221e293b%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2250%22 text-anchor=%22middle%22 dominant-baseline=%22central%22 font-size=%2240%22 fill=%22%237c3aed%22>👤</text></svg>'"> <div class="flex-1 min-w-0"> <p class="text-lg font-semibold text-white mb-1">${name}</p> <p class="text-sm text-slate-400 leading-relaxed">${bio}</p> </div> </div> </div>`;
}, "/home/stefan/Projects/laravelseo.com/src/components/blog/AuthorCard.astro", void 0);

const $$Astro$1 = createAstro("https://laravelseo.com");
const $$RelatedPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { posts, currentTitle } = Astro2.props;
  const filtered = posts.filter((p) => p.title !== currentTitle).slice(0, 3);
  return renderTemplate`${filtered.length > 0 && renderTemplate`${maybeRenderHead()}<section><h2 class="text-2xl font-bold text-white mb-8">Related Articles</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6">${filtered.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="group block rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/5"><div class="flex items-center gap-3 mb-3"><span class="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-400">${post.category}</span><span class="text-xs text-slate-500">${post.readTime}</span></div><h3 class="text-base font-semibold text-white group-hover:text-violet-400 transition-colors mb-2 line-clamp-2">${post.title}</h3><p class="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-3">${post.description}</p><span class="text-xs text-slate-500">${post.date}</span></a>`)}</div></section>`}`;
}, "/home/stefan/Projects/laravelseo.com/src/components/blog/RelatedPosts.astro", void 0);

const $$Astro = createAstro("https://laravelseo.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    title,
    description,
    date,
    category,
    readTime,
    tags,
    image,
    breadcrumbTitle,
    relatedPosts
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${title} | Laravel Seo`, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ArticleSchema", $$ArticleSchema, { "title": title, "description": description, "date": date, "image": image })} ${renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: breadcrumbTitle ?? title, href: Astro2.url.pathname }
  ] })}  ${maybeRenderHead()}<div id="reading-progress" role="progressbar" aria-label="Reading progress"></div>  <details class="toc-mobile mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16"> <summary class="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 rounded-xl border border-slate-800 bg-slate-900/50 cursor-pointer hover:text-violet-400 transition-colors select-none"> <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
Table of Contents
<svg class="w-3 h-3 ml-auto transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <nav id="toc-mobile-content" class="mt-2 px-2 py-2 rounded-xl border border-slate-800 bg-slate-900/50" aria-label="Table of contents (mobile)"></nav> </details> <article class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8"> <!-- Article Header --> <header class="mb-12 article-header-glow"> <div class="flex flex-wrap items-center gap-3 mb-4"> ${category && renderTemplate`<span class="rounded-full bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-400 border border-violet-500/20">${category}</span>`} ${readTime && renderTemplate`<span class="text-sm text-slate-500 flex items-center gap-1.5"> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${readTime} </span>`} </div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">${title}</h1> <p class="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">${description}</p> <div class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500"> <span class="flex items-center gap-1.5"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> ${date} </span> ${tags && renderTemplate`<span class="flex items-center gap-1.5"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path> </svg> ${tags} </span>`} </div> </header> <!-- Post Content (slot) --> ${renderSlot($$result2, $$slots["default"])} <!-- Author Card --> <div class="mt-16"> ${renderComponent($$result2, "AuthorCard", $$AuthorCard, {})} </div> <!-- Related Posts --> ${relatedPosts && relatedPosts.length > 0 && renderTemplate`<div class="mt-16 pt-8 border-t border-slate-800"> ${renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "posts": relatedPosts, "currentTitle": title })} </div>`} <!-- Share & Navigation --> <div class="mt-16 pt-8 border-t border-slate-800"> <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"> <div> <p class="text-sm font-medium text-slate-400 mb-3">Share this article</p> ${renderComponent($$result2, "ShareButtons", $$ShareButtons, { "title": title, "url": Astro2.url.href, "description": description })} </div> <a href="/blog" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-300 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-violet-400 transition-all"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m7-7l-7 7 7 7"></path> </svg>
Back to Blog
</a> </div> </div> </article>  <aside class="toc-desktop fixed top-32 right-4 xl:right-8 2xl:right-16 w-56 max-h-[calc(100vh-10rem)] overflow-y-auto hidden xl:block" aria-label="Table of contents"> <nav id="toc-desktop-content" class="space-y-0.5"> <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 px-3">On this page</p> </nav> </aside>  <button id="back-to-top" aria-label="Back to top"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path> </svg> </button> ` })} ${renderScript($$result, "/home/stefan/Projects/laravelseo.com/src/layouts/BlogPost.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/stefan/Projects/laravelseo.com/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
