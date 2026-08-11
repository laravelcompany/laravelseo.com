globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_GZPNdnj0.mjs';
import { $ as $$Section } from '../chunks/Section_ul3TOVz6.mjs';
import { $ as $$Card } from '../chunks/Card_DeBFNgVP.mjs';
import { $ as $$BreadcrumbSchema } from '../chunks/BreadcrumbSchema_BBWi5n_G.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CIWobTvY.mjs';

const $$Backlinks = createComponent(($$result, $$props, $$slots) => {
  const backlinkCategories = [
    {
      title: "Laravel SEO Tools & Packages",
      description: "Essential tools and packages for optimizing Laravel applications for search engines.",
      links: [
        { name: "Laravel SEO Package", url: "https://app.laravelseo.com", description: "The official Laravel SEO package for automated meta tags, structured data, sitemaps, and more." },
        { name: "Laravel Debugbar", url: "https://packagist.org/packages/barryvdh/laravel-debugbar", description: "Debug toolbar for Laravel that helps identify performance bottlenecks affecting SEO." },
        { name: "Laravel Telescope", url: "https://packagist.org/packages/laravel/telescope", description: "Laravel's debug assistant that can help monitor query performance for SEO optimization." },
        { name: "Spatie SEO", url: "https://github.com/spatie/laravel-seo", description: "Another popular Laravel SEO package for managing meta tags and structured data." },
        { name: "Laravel Page Speed", url: "https://packagist.org/packages/renatomarinho/laravel-page-speed", description: "Page speed optimization package that helps improve Core Web Vitals scores." }
      ]
    },
    {
      title: "SEO Learning Resources",
      description: "Learn more about SEO best practices for Laravel and modern web applications.",
      links: [
        { name: "Google Search Central", url: "https://developers.google.com/search", description: "Official Google documentation on search engine optimization and best practices." },
        { name: "Schema.org Documentation", url: "https://schema.org/docs/documents.html", description: "Complete documentation for structured data and JSON-LD schema markup." },
        { name: "Web.dev SEO Guides", url: "https://web.dev/learn/seo/", description: "Google's comprehensive SEO learning path covering all aspects of search optimization." },
        { name: "Moz Beginner's Guide to SEO", url: "https://moz.com/beginners-guide-to-seo", description: "One of the most comprehensive beginner-friendly SEO guides available online." },
        { name: "Ahrefs SEO Blog", url: "https://ahrefs.com/blog/seo/", description: "In-depth SEO articles and case studies from one of the leading SEO tool providers." }
      ]
    },
    {
      title: "Performance & Core Web Vitals",
      description: "Resources for optimizing Laravel application performance and Core Web Vitals.",
      links: [
        { name: "Laravel Octane Documentation", url: "https://laravel.com/docs/octane", description: "Official Laravel Octane docs for supercharging application performance and server response times." },
        { name: "Laravel Vite Documentation", url: "https://laravel.com/docs/vite", description: "Learn how to use Vite for optimized asset bundling and faster page loads." },
        { name: "PageSpeed Insights", url: "https://pagespeed.web.dev/", description: "Google's tool for measuring and improving Core Web Vitals and page performance." },
        { name: "Web Vitals Documentation", url: "https://web.dev/vitals/", description: "Official Google documentation on Core Web Vitals metrics and optimization strategies." },
        { name: "Lighthouse Documentation", url: "https://developer.chrome.com/docs/lighthouse/", description: "Google's automated auditing tool for performance, accessibility, and SEO." }
      ]
    },
    {
      title: "Laravel Development Communities",
      description: "Communities and forums for Laravel developers focused on SEO and optimization.",
      links: [
        { name: "Laravel News", url: "https://laravel-news.com/", description: "Latest Laravel news, tutorials, and packages including SEO-related content." },
        { name: "Laravel.io Forum", url: "https://laravel.io/forum", description: "Community forum where Laravel developers discuss SEO optimization and best practices." },
        { name: "r/laravel on Reddit", url: "https://reddit.com/r/laravel", description: "Active Reddit community covering all aspects of Laravel development including SEO." },
        { name: "Laracasts Forum", url: "https://laracasts.com/discuss", description: "Video tutorial platform with community discussions about Laravel SEO techniques." },
        { name: "Laravel Discord Community", url: "https://discord.gg/laravel", description: "Official Laravel Discord server with channels dedicated to optimization and SEO." }
      ]
    },
    {
      title: "SEO Analytics & Monitoring",
      description: "Tools for tracking and monitoring your Laravel application's SEO performance.",
      links: [
        { name: "Google Search Console", url: "https://search.google.com/search-console", description: "Essential free tool from Google for monitoring search performance and indexing issues." },
        { name: "Google Analytics", url: "https://analytics.google.com/", description: "Track organic traffic, user behavior, and conversion data for your Laravel app." },
        { name: "Ahrefs Webmaster Tools", url: "https://ahrefs.com/webmaster-tools", description: "Free SEO audit tools including backlink analysis and keyword research." },
        { name: "Screaming Frog SEO Spider", url: "https://www.screamingfrog.co.uk/seo-spider/", description: "Powerful website crawler for technical SEO audits and broken link detection." },
        { name: "GTmetrix", url: "https://gtmetrix.com/", description: "Website performance monitoring tool that helps track Core Web Vitals over time." }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Laravel SEO Resources & Backlinks - Curated Tools and Guides", "description": "Curated collection of the best Laravel SEO tools, packages, learning resources, and communities tagged with 'laravel seo'. Everything you need to optimize your Laravel application." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/backlinks" }
  ] })} ${maybeRenderHead()}<section class="relative py-24 overflow-hidden bg-slate-900"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="max-w-3xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Laravel SEO Resources</h1> <p class="text-xl text-slate-300 mb-4">A curated collection of the best tools, packages, and guides tagged with "<strong class="text-violet-400">laravel seo</strong>".</p> <p class="text-sm text-slate-400">Hand-picked resources to help you optimize your Laravel applications for search engines and AI-powered discovery.</p> </div> </div> </section> ${backlinkCategories.map((category) => renderTemplate`${renderComponent($$result2, "Section", $$Section, { "background": category.title === "SEO Learning Resources" ? "gray" : "dark", "id": category.title.toLowerCase().replace(/\s+/g, "-") }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-5xl mx-auto"> <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">${category.title}</h2> <p class="text-slate-400 mb-8">${category.description}</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${category.links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="group block"> ${renderComponent($$result3, "Card", $$Card, { "hover": true, "class": "h-full p-5 transition-all group-hover:border-violet-500/50" }, { "default": ($$result4) => renderTemplate` <div class="flex items-start justify-between mb-2"> <h3 class="font-semibold text-white group-hover:text-violet-400 transition-colors">${link.name}</h3> <svg class="w-4 h-4 text-slate-500 group-hover:text-violet-400 shrink-0 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </div> <p class="text-sm text-slate-400 leading-relaxed">${link.description}</p> <div class="mt-3 flex items-center gap-2"> <span class="rounded-full bg-violet-500/10 px-2 py-0.5 text-xs text-violet-400">laravel seo</span> <span class="text-xs text-slate-600">resource</span> </div> ` })} </a>`)} </div> </div> </div> ` })}`)}${renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Suggest a Resource</h2> <p class="text-slate-400 mb-8">
Know a great <strong class="text-violet-400">Laravel SEO</strong> resource that should be on this list? We are always looking to expand our collection.
</p> <a href="/contact" class="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-violet-600 to-pink-600 px-6 py-3 font-semibold text-white transition-all hover:from-violet-500 hover:to-pink-500">
Contact Us
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> ` })} ` })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/backlinks.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/backlinks.astro";
const $$url = "/backlinks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Backlinks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
