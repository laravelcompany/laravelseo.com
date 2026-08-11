globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, ak as renderScript, u as unescapeHTML } from '../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_GZPNdnj0.mjs';
import { $ as $$Section } from '../chunks/Section_ul3TOVz6.mjs';
import { $ as $$Button } from '../chunks/Button_JJAb4-kg.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BeKiHvih.mjs';
import { $ as $$SoftwareProducts } from '../chunks/SoftwareProducts_DnYzcGGE.mjs';
import { $ as $$BreadcrumbSchema } from '../chunks/BreadcrumbSchema_BBWi5n_G.mjs';
import { c as ctaBgImg } from '../chunks/photo-1553413077-190dd305871c_C26u_u8x.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CIWobTvY.mjs';

const heroBgImg = new Proxy({"src":"/_astro/photo-1586528116311-ad8dd3c8310d.DL0h7ntM.jpg","width":4822,"height":3215,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/stefan/Projects/laravelseo.com/src/assets/photo-1586528116311-ad8dd3c8310d.jpg";
							}
							
							return target[name];
						}
					});

const $$Capabilities = createComponent(($$result, $$props, $$slots) => {
  const capabilities = [
    {
      title: "Real-Time Lighthouse Monitoring",
      description: "Track SEO, accessibility, performance, and best-practice scores as you work. Every change is measured instantly, helping you tune your site with absolute clarity.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
      features: [
        "Live score updates",
        "Performance metrics",
        "Accessibility checks",
        "Best practices auditing"
      ]
    },
    {
      title: "Automatic Meta Tags",
      description: "Titles, descriptions, keywords, robots rules \u2014 everything generated dynamically with automatic fallbacks. Override at any level: route, controller, or resource.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`,
      features: [
        "Dynamic generation",
        "Blade components",
        "Route overrides",
        "Automatic fallbacks"
      ]
    },
    {
      title: "OpenGraph & Social Cards",
      description: "Ensure perfect social previews without writing a single line of repetitive markup. OG images and Twitter Cards generated on demand.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
      features: [
        "Facebook OpenGraph",
        "Twitter Cards",
        "Dynamic images",
        "Preview generator"
      ]
    },
    {
      title: "JSON-LD Schema Generator",
      description: "Add structured data to your pages to enhance search visibility. Supports Article, Product, FAQ, BreadcrumbList, LocalBusiness, and custom schemas.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>`,
      features: [
        "Rich snippets",
        "Product schema",
        "FAQ schema",
        "Custom schemas"
      ]
    },
    {
      title: "Route-Level SEO Configuration",
      description: "Each route in your application can have bespoke SEO settings. Ideal for SaaS platforms, multi-tenant apps, and anything with dynamic content.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7m0 0L9 5.382" /></svg>`,
      features: [
        "Per-route config",
        "Mult-tenant support",
        "Dynamic parameters",
        "Wildcard matching"
      ]
    },
    {
      title: "Environment-Aware Profiles",
      description: "Define how SEO behaves on local, staging, and production. Track score variations across deployments.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>`,
      features: [
        "Local vs Production",
        "Staging safety",
        "Deployment tracking",
        "Config profiles"
      ]
    },
    {
      title: "API & Webhooks",
      description: "Adjust SEO data programmatically using the REST API, or sync changes across your ecosystem through real-time webhooks.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
      features: [
        "REST API access",
        "Real-time webhooks",
        "Programmatic updates",
        "Integration events"
      ]
    },
    {
      title: "CI/CD Integration",
      description: "Ensure performance regressions never reach production. Run Lighthouse checks inside your pipeline and block weak builds.",
      icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>`,
      features: [
        "Pipeline checks",
        "Build blocking",
        "Regression testing",
        "Automated audits"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Laravel SEO Platform Capabilities - Automated Search Tools", "description": "Explore the complete Laravel SEO platform capabilities. Real-time Lighthouse monitoring, automatic meta tags, JSON-LD schema generation, and more." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": [
    { name: "Home", href: "/" },
    { name: "Capabilities", href: "/capabilities" }
  ] })}  ${maybeRenderHead()}<section class="relative min-h-[70vh] flex items-center overflow-hidden"> <!-- Background Image with Overlay --> <div class="absolute inset-0"> ${renderComponent($$result2, "Image", $$Image, { "src": heroBgImg, "alt": "Laravel Seo Capabilities", "class": "w-full h-full object-cover", "width": 2070, "height": 1380 })} <div class="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div> </div> <!-- Three.js Canvas --> <canvas id="capabilities-canvas" class="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing"></canvas> <!-- Grid overlay --> <div class="absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px); background-size: 60px 60px;"></div> <!-- Content --> <div class="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-24 md:py-32"> <div class="max-w-4xl mx-auto text-center"> <div class="inline-flex items-center px-4 py-2 mb-6 bg-linear-to-r from-violet-600 to-pink-600 text-white text-sm font-semibold rounded-full shadow-lg"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path> </svg>
Complete Toolkit
</div> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
Complete <span class="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-pink-400 to-violet-400">
SEO Toolkit
</span> </h1> <p class="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
Everything you need to audit, monitor, and optimize your Laravel
          application for search engines and AI-powered discovery.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="#capabilities-grid" class="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-violet-600 to-pink-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/25">
Explore Capabilities
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg> </a> </div> </div> </div> </section> ${renderScript($$result2, "/home/stefan/Projects/laravelseo.com/src/pages/capabilities.astro?astro&type=script&index=0&lang.ts")}  ${renderComponent($$result2, "Section", $$Section, { "background": "dark", "id": "capabilities-grid" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> ${capabilities.map((capability) => renderTemplate`<div class="bg-slate-800/80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700/50 hover:border-violet-500/30 group"> <div class="flex items-start"> <div class="shrink-0 w-16 h-16 rounded-xl bg-linear-to-br from-violet-500 to-pink-500 text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-violet-500/25 transition-all duration-300"> <div class="w-8 h-8">${unescapeHTML(capability.icon.replace("w-12 h-12", "w-8 h-8"))}</div> </div> <div class="ml-6 flex-1"> <h2 class="text-2xl font-bold text-white mb-3"> ${capability.title} </h2> <p class="text-slate-200 mb-6 leading-relaxed"> ${capability.description} </p> <ul class="space-y-3"> ${capability.features.map((feature) => renderTemplate`<li class="flex items-center text-slate-300"> <svg class="w-5 h-5 text-violet-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${feature} </li>`)} </ul> </div> </div> </div>`)} </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-4xl mx-auto"> <div class="inline-flex items-center px-4 py-2 mb-6 bg-violet-500/20 text-violet-300 text-sm font-semibold rounded-full"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path> </svg>
The Modern SEO Landscape
</div> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
SEO Has Changed Forever
</h2> <div class="prose prose-lg text-slate-300"> <p class="mb-6">
For years, technical SEO was about optimizing for one thing: Google's crawler. But the digital ecosystem has fundamentally shifted. Today, your website needs to be discoverable not just by traditional search engines, but by AI systems that power tools like ChatGPT, Perplexity, and Google's Gemini. When someone asks an AI assistant about a product or service you offer, can your content be found and understood?
</p> <p class="mb-6">
This shift isn't coming tomorrow—it's already here. AI-powered answer engines influence how users discover information, and <a href="/" class="text-violet-400 hover:text-violet-300 underline font-semibold">modern SEO tools</a> must adapt accordingly. The old playbook of keyword stuffing and backlink farms no longer works. Search engines prioritize expertise, authority, trustworthiness, and structured data that AI systems can parse and cite.
</p> <p class="mb-6">
Our platform was designed for this new reality. At its core is <strong>Black SEO Analyzer</strong> — a Rust-built, enterprise-grade web crawler that emulates how search engines and AI systems map your site. It runs over <strong>300 automated checks</strong> across 12+ analysis modules, assessing content, metadata, technical SEO, and Core Web Vitals for a complete health snapshot.
</p> <p class="mb-6">
But that's just the beginning. The same container also bundles <strong>Lighthouse</strong> (via Chromium) for real-time performance monitoring, a <strong>check-if-email-exists</strong> validator powered by ReacherHQ for lead validation, and <strong>Redis</strong> for high-throughput caching and queue management. With <strong>Go</strong>, <strong>Rust (Cargo)</strong>, and <strong>Python</strong> runtimes baked in, you can extend the platform with custom scrapers, data pipelines, and automation scripts — all running inside a single, deployable image.
</p> <p class="mb-6">
Infrastructure-wise, <strong>Supervisor</strong> keeps every process alive, <strong>RoadRunner</strong> serves your Laravel app with blistering speed, and <strong>MySQL 8.0</strong> provides a rock-solid relational store. Tools like <strong>ffmpeg</strong>, <strong>poppler-utils</strong>, <strong>dnsutils</strong>, and <strong>fswatch</strong> handle media processing, PDF extraction, DNS lookups, and file-change monitoring — giving you an <a href="/" class="text-violet-400 hover:text-violet-300 underline font-semibold">all-in-one SEO and development environment</a>.
</p> <p>
Whether you're running a <a href="/" class="text-violet-400 hover:text-violet-300 underline font-semibold">Laravel-based SaaS platform</a>, an e-commerce empire, or a content-heavy blog, this integrated toolset delivers the actionable insights you need to stay ahead. <a href="/" class="text-violet-400 hover:text-violet-300 underline font-semibold">Explore our full platform</a> and see how we can help future-proof your online presence.
</p> </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
True Ownership, No Subscriptions
</h2> <p class="text-lg text-slate-300 mb-8">
Unlike cloud-based SEO tools that operate on subscription models and lock your data behind proprietary interfaces, Black SEO Analyzer represents a return to true software ownership. It's not a SaaS product you rent—it's a high-performance binary you run locally on your machine.
</p> <div class="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/50 mb-8"> <div class="flex flex-wrap items-center justify-between gap-6"> <div> <h3 class="text-2xl font-bold text-white mb-2">One-Time Purchase</h3> <p class="text-slate-300 mb-4">$279 for a single license covering unlimited sites and pages</p> <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300"> <li class="flex items-center"><svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Lifetime software ownership</li> <li class="flex items-center"><svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> All future updates included</li> <li class="flex items-center"><svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> CLI and GUI included</li> <li class="flex items-center"><svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Unlimited URLs and sites</li> </ul> </div> <div class="shrink-0"> <span class="inline-flex items-center px-4 py-2 bg-slate-700 text-slate-200 text-sm font-semibold rounded-full"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
Source Code Escrow
</span> </div> </div> </div> <p class="text-slate-400 text-sm">
If the product is ever discontinued or development ceases for 12+ consecutive months, you receive the full source code—ensuring your investment is protected indefinitely.
</p> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-4xl mx-auto"> <div class="inline-flex items-center px-4 py-2 mb-6 bg-pink-500/20 text-pink-300 text-sm font-semibold rounded-full"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M11 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm0 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clip-rule="evenodd"></path> </svg>
300+ Automated Checks
</div> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
The Comprehensive Feature Set
</h2> <p class="text-lg text-slate-300 mb-8">
Black SEO Analyzer isn't a lightweight checker—it's a full-fledged SEO audit suite with <strong>over 300 automated checks</strong> spanning 12+ specialized analysis modules.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300 group"> <div class="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors"> <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> </div> <h3 class="text-xl font-bold text-white mb-2">Hybrid Crawling Engine</h3> <p class="text-slate-300">Fast HTTP fetching for static content plus headless Chrome integration for SPAs built with React, Angular, Vue.js. Automatically detects when browser rendering is needed.</p> </div> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-pink-500/30 hover:shadow-xl transition-all duration-300 group"> <div class="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors"> <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg> </div> <h3 class="text-xl font-bold text-white mb-2">Technical SEO Analysis</h3> <p class="text-slate-300">23 metadata issues, 38 Core Web Vitals, content quality, structured data validation (JSON-LD, Microdata, RDFa), link analysis, security headers, mobile optimization, and i18n.</p> </div> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300 group"> <div class="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors"> <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> </div> <h3 class="text-xl font-bold text-white mb-2">AI-Powered Insights</h3> <p class="text-slate-300">Integrates with Anthropic Claude, OpenAI GPT, DeepSeek, and Google Gemini. Generate meta descriptions, identify content gaps, and get strategic recommendations.</p> </div> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-pink-500/30 hover:shadow-xl transition-all duration-300 group"> <div class="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors"> <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg> </div> <h3 class="text-xl font-bold text-white mb-2">Multiple Output Formats</h3> <p class="text-slate-300">JSON, JSONL, XML, CSV, CSV Flat, HTML folder with interactive navigation, and individual JSON files per page. Fully customizable HTML reports with your branding.</p> </div> </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-4xl mx-auto"> <div class="inline-flex items-center px-4 py-2 mb-6 bg-violet-500/20 text-violet-300 text-sm font-semibold rounded-full"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M11 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm0 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clip-rule="evenodd"></path> </svg>
Built for Laravel
</div> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
Why Laravel Developers Need Black SEO Analyzer
</h2> <div class="space-y-6"> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300 group"> <h3 class="text-xl font-bold text-white mb-3 flex items-center"> <span class="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center mr-3 text-sm font-bold group-hover:bg-violet-400 transition-colors">1</span>
Headless Chrome for Modern SPAs
</h3> <p class="text-slate-300">...</p> </div> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300 group"> <h3 class="text-xl font-bold text-white mb-3 flex items-center"> <span class="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center mr-3 text-sm font-bold group-hover:bg-violet-400 transition-colors">2</span>
CI/CD Pipeline Integration
</h3> <p class="text-slate-300">...</p> </div> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300 group"> <h3 class="text-xl font-bold text-white mb-3 flex items-center"> <span class="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center mr-3 text-sm font-bold group-hover:bg-violet-400 transition-colors">3</span>
Local Execution, Data Privacy
</h3> <p class="text-slate-300">...</p> </div> </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-4xl mx-auto"> <div class="inline-flex items-center px-4 py-2 mb-6 bg-pink-500/20 text-pink-300 text-sm font-semibold rounded-full"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M11 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm0 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clip-rule="evenodd"></path> </svg>
Seamless Integration
</div> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
How Our Laravel SEO Software Integrates Black SEO Analyzer
</h2> <p class="text-lg text-slate-300 mb-8">
Our Laravel SEO software has been designed from the ground up to leverage Black SEO Analyzer as its core analysis engine.
</p> <div class="bg-slate-900 rounded-2xl p-6 mb-8 overflow-x-auto"> <pre class="text-sm text-slate-300 font-mono"><code>./black-seo-analyzer --url-to-begin-crawl https://your-laravel-app.com \\
  --output-type json \\
  --output-file storage/seo-reports/latest.json \\
  --concurrent-requests 15 \\
  --max-pages 5000</code></pre> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300"> <h3 class="font-bold text-white mb-3">Automated, Scheduled Audits</h3> <p class="text-slate-300">Using Laravel's task scheduling, our software triggers Black SEO Analyzer crawls daily, weekly, or monthly—completely unattended.</p> </div> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300"> <h3 class="font-bold text-white mb-3">Dashboard Visualization</h3> <p class="text-slate-300">Parse JSON output into an intuitive dashboard showing health scores, critical issues, performance trends, and per-page breakdowns.</p> </div> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300"> <h3 class="font-bold text-white mb-3">AI-Enhanced Recommendations</h3> <p class="text-slate-300">Surface AI-generated insights directly in the UI—meta descriptions, title optimizations, content opportunities.</p> </div> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300"> <h3 class="font-bold text-white mb-3">Client Reporting</h3> <p class="text-slate-300">Generate branded, white-label reports with executive summaries and actionable recommendations.</p> </div> </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-4xl mx-auto"> <div class="inline-flex items-center px-4 py-2 mb-6 bg-violet-500/20 text-violet-300 text-sm font-semibold rounded-full"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57a22.99 22.99 0 01-.387 1.642c.562.649 1.413 1.076 2.353 1.253A15.98 15.98 0 0118 18a15.98 15.98 0 01-6.023-2.757c.94-1.177 1.79-1.604 2.353-1.253V9a2 2 0 012-2h2zm-4 0a1 1 0 011-1h2a1 1 0 011 1v1h-4V6z" clip-rule="evenodd"></path> </svg>
Real-World Applications
</div> <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
Practical Use Cases
</h2> <div class="space-y-6"> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300"> <h3 class="text-xl font-bold text-white mb-3">E-commerce SEO Audits</h3> <p class="text-slate-300">
For Laravel-based e-commerce platforms (using packages like Bagisto or Aimeos), product pages often number in the thousands. Black SEO Analyzer can crawl these at scale, checking for missing meta descriptions, duplicate content across similar products, broken category links, and Core Web Vitals issues that impact conversion rates.
</p> </div> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300"> <h3 class="text-xl font-bold text-white mb-3">SaaS Landing Page Optimization</h3> <p class="text-slate-300">
SaaS companies constantly iterate on landing pages to improve conversion. Our Laravel SEO software integrates Black SEO Analyzer into the deployment pipeline, running an automated audit every time new content is pushed to production. This catches title tag truncations, missing canonical URLs, and performance regressions before they affect search rankings.
</p> </div> <div class="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50 hover:border-violet-500/30 hover:shadow-xl transition-all duration-300"> <h3 class="text-xl font-bold text-white mb-3">Multi-Language Internationalization</h3> <p class="text-slate-300">
Laravel's localization features are powerful, but hreflang implementation is notoriously error-prone. Black SEO Analyzer's i18n module validates language tags, checks hreflang annotations, and ensures proper character encoding—critical for sites targeting multiple countries.
</p> </div> </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
The Free Trial and Getting Started
</h2> <p class="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
Black SEO Analyzer offers a generous free trial that analyzes up to 3 pages with all features enabled—no credit card required. This allows you to test the integration with your Laravel application before committing to a license.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="https://app.laravelseo.com/login" class="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-violet-600 to-pink-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/25">
Download Free Trial
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> </a> <a href="https://app.laravelseo.com/register" class="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-slate-200 font-semibold rounded-xl hover:border-violet-500/50 hover:text-white transition-all duration-300">
Create Account
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg> </a> </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "dark" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-4xl mx-auto"> <div class="bg-gradient-to-br from-slate-800/80 via-slate-800/80 to-slate-800/80 rounded-2xl p-8 border border-slate-700/50"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
Future-Proof Your Laravel SEO
</h2> <div class="prose prose-lg text-slate-300"> <p class="mb-4">
The SEO landscape isn't going to get simpler. AI-powered answer engines are becoming the primary way users discover information, and traditional search engines are evolving faster than ever. Tools that can't adapt to this new reality will leave your website invisible.
</p> <p class="mb-4">
Black SEO Analyzer represents a different approach—one built on transparency, performance, and true ownership. It's not a rented tool that stops working when you stop paying; it's an asset you own, run locally, and integrate deeply into your development workflow.
</p> <p class="mb-6">
Our Laravel SEO software takes this foundation and builds upon it, delivering automated, scheduled audits with AI-enhanced recommendations, all presented through an intuitive interface. Whether you're a solo developer managing a single site or an agency handling dozens of client properties, this integration provides the comprehensive SEO analysis you need to dominate both search engines and AI systems.
</p> </div> <div class="mt-8 pt-6 border-t border-slate-700"> <p class="text-lg font-semibold text-white">
Ready to see the difference?
</p> <p class="text-slate-300 mt-2 mb-6">
Download the free trial of Black SEO Analyzer, integrate it with your Laravel application, and start optimizing with confidence.
</p> <a href="https://app.laravelseo.com/login" class="inline-flex items-center px-6 py-3 bg-linear-to-r from-violet-600 to-pink-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-md">
Get Started Free
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg> </a> </div> </div> </div> </div> ` })} ${renderComponent($$result2, "SoftwareProducts", $$SoftwareProducts, {})}  <section class="relative py-32 overflow-hidden"> <!-- Background Image --> <div class="absolute inset-0"> ${renderComponent($$result2, "Image", $$Image, { "src": ctaBgImg, "alt": "SEO Dashboard Background", "class": "w-full h-full object-cover", "width": 2070, "height": 1380 })} <div class="absolute inset-0 bg-linear-to-r from-violet-900/95 to-pink-900/95"></div> </div> <!-- Content --> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="max-w-4xl mx-auto text-center text-white"> <div class="inline-block px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
Get Started Today
</div> <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
Ready to Optimize with <span class="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-pink-400">LaravelSeo</span>?
</h2> <p class="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed">
Improve your Laravel application's performance and visibility today.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center"> ${renderComponent($$result2, "Button", $$Button, { "href": "https://app.laravelseo.com/login", "size": "lg", "class": "bg-linear-to-r! from-violet-600! to-pink-600! hover:from-violet-500! hover:to-pink-500! text-white! shadow-2xl! hover:shadow-violet-500/50!" }, { "default": ($$result3) => renderTemplate`
Login
` })} </div> </div> </div> </section> ` })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/capabilities.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/capabilities.astro";
const $$url = "/capabilities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Capabilities,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
