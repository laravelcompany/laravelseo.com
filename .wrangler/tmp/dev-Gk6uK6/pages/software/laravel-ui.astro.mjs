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
const $$LaravelUi = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Marketing UI Blocks",
      description: "Beautiful, conversion-focused components for landing pages, hero sections, CTAs, and more.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`
    },
    {
      title: "Application UI Components",
      description: "Dashboard elements, data tables, forms, navigation, and interactive components.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>`
    },
    {
      title: "Blade Components",
      description: "Fully reusable Laravel Blade components. Just drop them in and customize with props.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`
    },
    {
      title: "Responsive Design",
      description: "Every component is fully responsive. Looks great on mobile, tablet, and desktop.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`
    },
    {
      title: "Accessibility Ready",
      description: "Components follow WCAG guidelines. Built with accessibility in mind from the start.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>`
    },
    {
      title: "Dark Mode Support",
      description: "Built-in dark mode variants for all components. Perfect for modern applications.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`
    }
  ];
  const componentCategories = [
    { name: "Hero Sections", count: 12 },
    { name: "Navigation", count: 8 },
    { name: "Cards", count: 15 },
    { name: "Forms", count: 10 },
    { name: "Buttons", count: 20 },
    { name: "Modals", count: 6 },
    { name: "Footers", count: 5 },
    { name: "Pricing Tables", count: 8 }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Laravel UI - Premium UI Components for Laravel", "description": "Premium UI components for Laravel applications. Marketing blocks, dashboards, forms, and more ready-to-use components." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", ' <script type="application/ld+json">', "<\/script>  ", '<section class="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden"> <div class="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-sky-900"></div> <div class="absolute inset-0 opacity-30"> <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div> <div class="absolute bottom-20 right-10 w-96 h-96 bg-sky-400 rounded-full filter blur-3xl"></div> </div> <div class="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto text-center"> <div class="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path> </svg>\nPremium UI Components\n</div> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">\nBeautiful UI for Your <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-sky-300">Laravel App</span> </h1> <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">\nPremium UI components designed for easy use with Laravel. High-quality Marketing and Application UI blocks built for conversion-driven applications.\n</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ', " ", " </div> </div> </div> </section>  ", "  ", '  <section class="relative py-20 overflow-hidden"> <div class="absolute inset-0 bg-linear-to-br from-blue-900 to-sky-800"></div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="max-w-3xl mx-auto text-center text-white"> <h2 class="text-3xl md:text-4xl font-bold mb-6">\nBuild Faster with Laravel UI\n</h2> <p class="text-xl text-blue-100 mb-8">\nStart building beautiful Laravel applications with our premium component library.\n</p> ', " </div> </div> </section> "])), renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": [
    { name: "Home", href: "/" },
    { name: "Software", href: "/software/laravel-ui" },
    { name: "Laravel UI", href: "/software/laravel-ui" }
  ] }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Laravel UI",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Laravel/PHP",
    "description": "Premium UI components for Laravel applications. Marketing blocks, dashboards, forms, and more ready-to-use components.",
    "url": "https://laravelseo.com/software/laravel-ui",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  })), maybeRenderHead(), renderComponent($$result2, "Button", $$Button, { "href": "#", "size": "lg", "class": "bg-white text-blue-900 hover:bg-blue-50" }, { "default": ($$result3) => renderTemplate`
Browse Components
` }), renderComponent($$result2, "Button", $$Button, { "href": "#", "size": "lg", "variant": "outline", "class": "border-white text-white hover:bg-white/10" }, { "default": ($$result3) => renderTemplate`
View Demo
` }), renderComponent($$result2, "Section", $$Section, { "background": "gray" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
Why Laravel UI?
</h2> <p class="text-xl text-slate-400 max-w-2xl mx-auto">
Save hours of development time with our professionally designed, production-ready components.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${features.map((feature) => renderTemplate`<div class="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all group"> <div class="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-sky-600 text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"> <div>${unescapeHTML(feature.icon)}</div> </div> <h3 class="text-xl font-bold text-white mb-3">${feature.title}</h3> <p class="text-slate-400 leading-relaxed">${feature.description}</p> </div>`)} </div> </div> ` }), renderComponent($$result2, "Section", $$Section, { "background": "gray" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Component Library
</h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Over 100+ professionally designed components ready to use in your Laravel application.
</p> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> ${componentCategories.map((category) => renderTemplate`<div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 group cursor-pointer"> <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">${category.name}</h3> <p class="text-gray-500">${category.count} components</p> </div>`)} </div> </div> ` }), renderComponent($$result2, "Button", $$Button, { "href": "#", "size": "lg", "class": "bg-white text-blue-900 hover:bg-blue-50" }, { "default": ($$result3) => renderTemplate`
Get Started Free
` })) })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/software/laravel-ui.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/software/laravel-ui.astro";
const $$url = "/software/laravel-ui";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LaravelUi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
