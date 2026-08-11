globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_GZPNdnj0.mjs';
import { $ as $$Section } from '../chunks/Section_ul3TOVz6.mjs';
import { $ as $$BreadcrumbSchema } from '../chunks/BreadcrumbSchema_BBWi5n_G.mjs';
import { l as locations } from '../chunks/locations_DSti9KWx.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CIWobTvY.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const regions = [...new Set(locations.map((l) => l.region))];
  const grouped = regions.map((region) => ({
    region,
    cities: locations.filter((l) => l.region === region)
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Laravel SEO Services by Location", "description": "Find Laravel SEO services in your city. Browse our locations to see how developers worldwide use our tools to improve search rankings." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" }
  ] })} ${maybeRenderHead()}<section class="relative py-24 overflow-hidden bg-slate-900"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="max-w-3xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Laravel SEO Services by Location</h1> <p class="text-xl text-slate-300">
Trusted by Laravel developers worldwide. Find resources and tools for your city.
</p> </div> </div> </section> ${renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-6xl mx-auto"> ${grouped.map((group) => renderTemplate`<div class="mb-16 last:mb-0"> <h2 class="text-2xl font-bold text-white mb-8 pb-4 border-b border-slate-800">${group.region}</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> ${group.cities.map((loc) => {
    const display = loc.state ? `${loc.city}, ${loc.state}` : loc.city;
    return renderTemplate`<a${addAttribute(`/locations/${loc.slug}`, "href")} class="group flex items-center gap-4 rounded-xl bg-slate-800/50 p-5 border border-slate-700 hover:border-violet-500/50 transition-all hover:-translate-y-0.5"> <div class="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/30 transition-colors"> <svg class="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h3 class="font-semibold text-white group-hover:text-violet-400 transition-colors">${display}</h3> <p class="text-sm text-slate-500">${loc.country}</p> </div> </a>`;
  })} </div> </div>`)} </div> </div> ` })} ` })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/locations/index.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/locations/index.astro";
const $$url = "/locations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
