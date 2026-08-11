globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D4EOnj5P.mjs';
import { $ as $$Button } from '../chunks/Button_JJAb4-kg.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CIWobTvY.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 - Page Not Found | Laravel Seo", "description": "The page you are looking for does not exist. Return to Laravel Seo homepage.", "robots": "noindex" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex min-h-[70vh] items-center justify-center px-4"> <div class="max-w-lg text-center"> <div class="mb-8"> <span class="text-9xl font-bold bg-linear-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">404</span> </div> <h1 class="mb-4 text-3xl font-bold text-white">Page Not Found</h1> <p class="mb-8 text-lg text-slate-400">
The page you are looking for doesn't exist or has been moved. Let us help you find your way back.
</p> <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"> ${renderComponent($$result2, "Button", $$Button, { "href": "/", "size": "lg" }, { "default": ($$result3) => renderTemplate`Return Home` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/capabilities", "size": "lg", "variant": "secondary" }, { "default": ($$result3) => renderTemplate`Explore Capabilities` })} </div> <div class="mt-12 border-t border-slate-800 pt-8"> <p class="text-sm text-slate-500">
Looking for something specific? Try our <a href="/backlinks" class="text-violet-400 hover:text-violet-300">resources page</a> or read our <a href="/blog" class="text-violet-400 hover:text-violet-300">latest articles</a>.
</p> </div> </div> </section> ` })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/404.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
