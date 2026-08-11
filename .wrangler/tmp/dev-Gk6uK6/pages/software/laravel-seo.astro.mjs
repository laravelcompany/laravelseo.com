globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_GZPNdnj0.mjs';
import { $ as $$Section } from '../../chunks/Section_ul3TOVz6.mjs';
import { $ as $$Button } from '../../chunks/Button_JJAb4-kg.mjs';
import { $ as $$BreadcrumbSchema } from '../../chunks/BreadcrumbSchema_BBWi5n_G.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CIWobTvY.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$LaravelSeo = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Real-Time Lighthouse Monitoring",
      description: "Track SEO, accessibility, performance, and best-practice scores as you work. Every change is measured instantly.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
    },
    {
      title: "Automatic Meta Tags",
      description: "Titles, descriptions, keywords, robots rules \u2014 everything generated dynamically with automatic fallbacks.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`
    },
    {
      title: "OpenGraph & Twitter Cards",
      description: "Ensure perfect social previews without writing repetitive markup. OG images and Twitter Cards generated on demand.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`
    },
    {
      title: "JSON-LD Schema Generator",
      description: "Add structured data to enhance search visibility. Supports Article, Product, FAQ, BreadcrumbList, and custom schemas.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`
    },
    {
      title: "XML Sitemaps",
      description: "Automatically generate and submit sitemaps to search engines. Support for images, videos, and news sitemaps.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7"></path></svg>`
    },
    {
      title: "Route-Level Configuration",
      description: "Each route can have bespoke SEO settings. Ideal for SaaS platforms, multi-tenant apps, and dynamic content.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>`
    }
  ];
  const benefits = [
    "Improve search rankings effortlessly",
    "Reduce technical SEO overhead",
    "Built specifically for Laravel",
    "Developer-friendly API",
    "Continuous updates for Google algorithm changes",
    "Production-ready with zero config"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Laravel SEO - Complete SEO Toolkit for Laravel", "description": "The ultimate Laravel SEO toolkit for automatic meta tags, JSON-LD schema generation, sitemaps, and real-time Lighthouse monitoring." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", ' <script type="application/ld+json">', "<\/script>  ", '<section class="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden"> <div class="absolute inset-0 bg-linear-to-br from-pink-900 via-pink-800 to-rose-900"></div> <div class="absolute inset-0 opacity-30"> <div class="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full filter blur-3xl"></div> <div class="absolute bottom-20 right-10 w-96 h-96 bg-rose-400 rounded-full filter blur-3xl"></div> </div> <div class="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto text-center"> <div class="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg>\nSEO Toolkit for Laravel\n</div> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">\nMaster Your Search <span class="text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-rose-300">Visibility</span> </h1> <p class="text-xl md:text-2xl text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed">\nComprehensive SEO toolkit for Laravel applications. Optimize meta tags, sitemaps, schema markup, and improve search rankings effortlessly.\n</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ', " ", " </div> </div> </div> </section>  ", "  ", '  <section class="relative py-20 overflow-hidden"> <div class="absolute inset-0 bg-linear-to-br from-pink-900 to-rose-800"></div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="max-w-3xl mx-auto text-center text-white"> <h2 class="text-3xl md:text-4xl font-bold mb-6">\nBoost Your Search Rankings\n</h2> <p class="text-xl text-pink-100 mb-8">\nStart using Laravel SEO today and see the difference in your search rankings.\n</p> ', " </div> </div> </section> "])), renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": [
    { name: "Home", href: "/" },
    { name: "Software", href: "/software/laravel-seo" },
    { name: "Laravel SEO", href: "/software/laravel-seo" }
  ] }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Laravel SEO",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Laravel/PHP",
    "description": "The ultimate Laravel SEO toolkit for automatic meta tags, JSON-LD schema generation, sitemaps, and real-time Lighthouse monitoring.",
    "url": "https://laravelseo.com/software/laravel-seo",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  })), maybeRenderHead(), renderComponent($$result2, "Button", $$Button, { "href": "https://app.laravelseo.com/login", "size": "lg", "class": "bg-white text-pink-900 hover:bg-pink-50" }, { "default": ($$result3) => renderTemplate`
Login to Dashboard
` }), renderComponent($$result2, "Button", $$Button, { "href": "#", "size": "lg", "variant": "outline", "class": "border-white text-white hover:bg-white/10" }, { "default": ($$result3) => renderTemplate`
View Demo
` }), renderComponent($$result2, "Section", $$Section, { "background": "gray" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
Complete SEO Solution
</h2> <p class="text-xl text-slate-400 max-w-2xl mx-auto">
Everything you need to optimize your Laravel application for search engines.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${features.map((feature) => renderTemplate`<div class="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-pink-500 transition-all group"> <div class="w-14 h-14 rounded-xl bg-linear-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"> <div>${unescapeHTML(feature.icon)}</div> </div> <h3 class="text-xl font-bold text-white mb-3">${feature.title}</h3> <p class="text-slate-400 leading-relaxed">${feature.description}</p> </div>`)} </div> </div> ` }), renderComponent($$result2, "Section", $$Section, { "background": "gray" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
Why Choose Laravel SEO?
</h2> <p class="text-xl text-gray-600 mb-8">
Built by Laravel experts for Laravel developers. Save time and focus on building your application.
</p> <ul class="space-y-4"> ${benefits.map((benefit) => renderTemplate`<li class="flex items-center text-gray-700"> <svg class="w-6 h-6 text-pink-500 mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${benefit} </li>`)} </ul> </div> <div class="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-8 text-white"> <h3 class="text-2xl font-bold mb-4">Start Optimizing Today</h3> <p class="text-pink-100 mb-6">
Join thousands of developers who have improved their Laravel application's search visibility.
</p> ${renderComponent($$result3, "Button", $$Button, { "href": "https://app.laravelseo.com/login", "class": "bg-white text-pink-900 hover:bg-pink-50" }, { "default": ($$result4) => renderTemplate`
Get Started Free
` })} </div> </div> </div> ` }), renderComponent($$result2, "Button", $$Button, { "href": "https://app.laravelseo.com/login", "size": "lg", "class": "bg-white text-pink-900 hover:bg-pink-50" }, { "default": ($$result3) => renderTemplate`
Login to Dashboard
` })) })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/software/laravel-seo.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/software/laravel-seo.astro";
const $$url = "/software/laravel-seo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LaravelSeo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
