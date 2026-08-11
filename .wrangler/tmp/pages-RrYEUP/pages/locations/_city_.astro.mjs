globalThis.process ??= {}; globalThis.process.env ??= {};
import { af as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_GZPNdnj0.mjs';
import { $ as $$Section } from '../../chunks/Section_ul3TOVz6.mjs';
import { $ as $$Card } from '../../chunks/Card_DeBFNgVP.mjs';
import { $ as $$Button } from '../../chunks/Button_JJAb4-kg.mjs';
import { $ as $$BreadcrumbSchema } from '../../chunks/BreadcrumbSchema_BBWi5n_G.mjs';
import { l as locations } from '../../chunks/locations_DSti9KWx.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CIWobTvY.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://laravelseo.com");
function getStaticPaths() {
  return locations.map((loc) => ({
    params: { city: loc.slug },
    props: { loc }
  }));
}
const $$city = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$city;
  const { loc } = Astro2.props;
  const locationDisplay = loc.state ? `${loc.city}, ${loc.state}` : loc.city;
  const services = [
    {
      title: "Automated Meta Tags",
      description: `Dynamic title tags, meta descriptions, and Open Graph cards generated automatically for every page of your ${loc.city} Laravel application.`
    },
    {
      title: "JSON-LD Structured Data",
      description: `Schema markup for articles, products, FAQs, and local business \u2014 helping ${loc.city} businesses stand out in search results with rich snippets.`
    },
    {
      title: "Lighthouse Monitoring",
      description: `Real-time SEO, accessibility, and performance scores so ${loc.city} developers can catch issues before they impact rankings.`
    },
    {
      title: "XML Sitemaps",
      description: `Automatically generated sitemaps that help search engines discover and index every page of your ${loc.city} Laravel site.`
    },
    {
      title: "Core Web Vitals",
      description: `Optimize loading speed, interactivity, and visual stability \u2014 critical for ranking in ${loc.city}'s competitive search landscape.`
    },
    {
      title: "Route-Level SEO",
      description: `Configure unique SEO settings for each route in your ${loc.city} Laravel application, perfect for SaaS and multi-tenant platforms.`
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Laravel SEO Services in ${locationDisplay}`, "description": loc.description }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", ' <script type="application/ld+json">', "<\/script> ", '<section class="relative py-24 overflow-hidden bg-slate-900"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="max-w-3xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">\nLaravel SEO Services in ', ' </h1> <p class="text-xl text-slate-300 leading-relaxed"> ', " </p> </div> </div> </section> ", " ", " ", " ", " "])), renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: loc.city, href: `/locations/${loc.slug}` }
  ] }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Laravel SEO in ${loc.city}`,
    "description": loc.description,
    "url": `https://laravelseo.com/locations/${loc.slug}`,
    "areaServed": {
      "@type": "City",
      "name": loc.city,
      "addressCountry": loc.country
    },
    "availableLanguage": ["English"],
    "priceRange": "$$"
  })), maybeRenderHead(), locationDisplay, loc.intro, renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-5xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-white mb-4">
Complete SEO Toolkit for Laravel Developers in ${loc.city} </h2> <p class="text-lg text-slate-300 max-w-3xl mx-auto">
Everything your ${loc.city} Laravel project needs to rank higher, from automated meta tags to real-time performance monitoring.
</p> </div> <div class="bg-slate-800 rounded-xl p-6 mb-12 border border-violet-500/20"> <p class="text-slate-300 leading-relaxed text-center italic"> ${loc.highlight} </p> </div> </div> </div> ` }), renderComponent($$result2, "Section", $$Section, { "background": "gray" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-white mb-4">
What Our SEO Tools Do for ${loc.city} Developers
</h2> <p class="text-lg text-slate-300 max-w-3xl mx-auto">
Purpose-built for Laravel, our toolkit automates the technical SEO that drives organic growth.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> ${services.map((service) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "hover": true, "class": "p-6" }, { "default": ($$result4) => renderTemplate` <h3 class="text-lg font-semibold text-white mb-3">${service.title}</h3> <p class="text-slate-400 text-sm leading-relaxed">${service.description}</p> ` })}`)} </div> </div> ` }), renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-white mb-4">
Why ${loc.city} Businesses Need Laravel SEO
</h2> <p class="text-lg text-slate-300">
In a competitive market like ${loc.city}, technical SEO can make the difference between page one and obscurity.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700"> <div class="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4"> <svg class="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="text-lg font-semibold text-white mb-2">Save Development Time</h3> <p class="text-slate-400 text-sm leading-relaxed">
Stop writing repetitive meta tags and schema markup. Our tools generate everything automatically, letting ${loc.city} developers focus on building features.
</p> </div> <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700"> <div class="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4"> <svg class="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> </div> <h3 class="text-lg font-semibold text-white mb-2">Improve Rankings</h3> <p class="text-slate-400 text-sm leading-relaxed">
Real-time Lighthouse monitoring and Core Web Vitals tracking help ${loc.city} teams catch SEO issues before they affect search rankings.
</p> </div> <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700"> <div class="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4"> <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path> </svg> </div> <h3 class="text-lg font-semibold text-white mb-2">Automate Structured Data</h3> <p class="text-slate-400 text-sm leading-relaxed">
JSON-LD schema generation for articles, products, FAQs, and local business — helping ${loc.city} sites earn rich results in search.
</p> </div> <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700"> <div class="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4"> <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> </div> <h3 class="text-lg font-semibold text-white mb-2">Scale with Confidence</h3> <p class="text-slate-400 text-sm leading-relaxed">
Route-level SEO configuration means every page of your ${loc.city} Laravel application gets optimized, from the homepage to the deepest nested route.
</p> </div> </div> </div> </div> ` }), renderComponent($$result2, "Section", $$Section, { "background": "gray" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto text-center"> <div class="max-w-3xl mx-auto"> <h2 class="text-3xl font-bold text-white mb-4">
Ready to Optimize Your ${loc.city} Laravel Application?
</h2> <p class="text-lg text-slate-300 mb-8">
Join thousands of developers worldwide who use our Laravel SEO toolkit to automate their technical SEO and improve search rankings.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result3, "Button", $$Button, { "href": "/capabilities", "size": "lg" }, { "default": ($$result4) => renderTemplate`Explore Capabilities` })} ${renderComponent($$result3, "Button", $$Button, { "href": "/contact", "size": "lg", "variant": "secondary" }, { "default": ($$result4) => renderTemplate`Contact Us` })} </div> </div> </div> ` })) })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/locations/[city].astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/locations/[city].astro";
const $$url = "/locations/[city]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$city,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
