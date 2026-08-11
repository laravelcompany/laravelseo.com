globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, b as addAttribute, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_GZPNdnj0.mjs';
import { $ as $$Section } from '../../chunks/Section_ul3TOVz6.mjs';
import { $ as $$Button } from '../../chunks/Button_JJAb4-kg.mjs';
import { $ as $$BreadcrumbSchema } from '../../chunks/BreadcrumbSchema_BBWi5n_G.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CIWobTvY.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$LaravelMail = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Campaign Management",
      description: "Create, schedule, and send email campaigns with ease. Support for HTML templates, plain text, and responsive designs.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`
    },
    {
      title: "Subscriber Management",
      description: "Import, export, and manage your subscribers with tags, segments, and custom fields. Handle millions of subscribers effortlessly.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`
    },
    {
      title: "Automation Workflows",
      description: "Set up triggered emails based on user behavior, dates, or custom conditions. Welcome sequences, abandoned carts, and more.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
    },
    {
      title: "Advanced Analytics",
      description: "Track opens, clicks, bounces, and conversions in real-time. Detailed reports and exportable data for deeper insights.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`
    },
    {
      title: "A/B Testing",
      description: "Test subject lines, content, and send times to optimize your campaigns. Let data drive your email strategy.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>`
    },
    {
      title: "API & Integrations",
      description: "Connect with your existing tools via REST API, webhooks, and native integrations for CRM, e-commerce, and more.",
      icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`
    }
  ];
  const pricingPlans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for small businesses getting started with email marketing.",
      features: ["Up to 2,500 subscribers", "1,000 emails/month", "Basic analytics", "Email support"]
    },
    {
      name: "Professional",
      price: "79",
      description: "For growing businesses that need advanced automation and features.",
      features: ["Up to 10,000 subscribers", "Unlimited emails", "Advanced analytics", "Automation workflows", "Priority support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "199",
      description: "For large organizations with high-volume email needs.",
      features: ["Unlimited subscribers", "Unlimited emails", "Custom analytics", "Automation & A/B testing", "Dedicated account manager", "24/7 phone support"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Laravel Mail - Email Marketing & Automation Platform", "description": "Email marketing and automation platform built for Laravel. Send campaigns, track opens, and automate your email workflows." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", ' <script type="application/ld+json">', "<\/script>  ", '<section class="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden"> <div class="absolute inset-0 bg-linear-to-br from-violet-900 via-violet-800 to-violet-900"></div> <div class="absolute inset-0 opacity-30"> <div class="absolute top-20 left-10 w-72 h-72 bg-violet-400 rounded-full filter blur-3xl"></div> <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl"></div> </div> <div class="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto text-center"> <div class="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>\nEmail Marketing Platform\n</div> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">\nPowerful Email Marketing for <span class="text-transparent bg-clip-text bg-linear-to-r from-violet-300 to-pink-300">Laravel</span> </h1> <p class="text-xl md:text-2xl text-violet-100 mb-8 max-w-3xl mx-auto leading-relaxed">\nSend campaigns, manage subscribers, and track performance with powerful analytics. Built specifically for Laravel applications.\n</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ', " ", " </div> </div> </div> </section>  ", "  ", '  <section class="relative py-20 overflow-hidden"> <div class="absolute inset-0 bg-linear-to-br from-violet-900 to-violet-800"></div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="max-w-3xl mx-auto text-center text-white"> <h2 class="text-3xl md:text-4xl font-bold mb-6">\nReady to Grow Your Email List?\n</h2> <p class="text-xl text-violet-100 mb-8">\nJoin thousands of Laravel developers who trust Laravel Mail for their email marketing needs.\n</p> ', " </div> </div> </section> "])), renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": [
    { name: "Home", href: "/" },
    { name: "Software", href: "/software/laravel-mail" },
    { name: "Laravel Mail", href: "/software/laravel-mail" }
  ] }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Laravel Mail",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Laravel/PHP",
    "description": "Email marketing and automation platform built for Laravel. Send campaigns, track opens, and automate your email workflows.",
    "url": "https://laravelseo.com/software/laravel-mail",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD"
    }
  })), maybeRenderHead(), renderComponent($$result2, "Button", $$Button, { "href": "#", "size": "lg", "class": "bg-white text-violet-900 hover:bg-violet-50" }, { "default": ($$result3) => renderTemplate`
Start Free Trial
` }), renderComponent($$result2, "Button", $$Button, { "href": "#", "size": "lg", "variant": "outline", "class": "border-white text-white hover:bg-white/10" }, { "default": ($$result3) => renderTemplate`
View Demo
` }), renderComponent($$result2, "Section", $$Section, { "background": "gray" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
Everything You Need to Succeed
</h2> <p class="text-xl text-slate-400 max-w-2xl mx-auto">
A complete email marketing solution built for Laravel developers and businesses.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${features.map((feature) => renderTemplate`<div class="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-violet-500 transition-all group"> <div class="w-14 h-14 rounded-xl bg-linear-to-br from-violet-500 to-violet-700 text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"> <div>${unescapeHTML(feature.icon)}</div> </div> <h3 class="text-xl font-bold text-white mb-3">${feature.title}</h3> <p class="text-slate-400 leading-relaxed">${feature.description}</p> </div>`)} </div> </div> ` }), renderComponent($$result2, "Section", $$Section, { "background": "gray" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Simple, Transparent Pricing
</h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Choose the plan that fits your needs. No hidden fees, no surprises.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"> ${pricingPlans.map((plan) => renderTemplate`<div${addAttribute(`relative bg-white rounded-2xl p-8 border-2 ${plan.popular ? "border-violet-500 shadow-2xl" : "border-gray-200 shadow-lg"}`, "class")}> ${plan.popular && renderTemplate`<div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-500 text-white text-sm font-semibold rounded-full">
Most Popular
</div>`} <h3 class="text-xl font-bold text-gray-900 mb-2">${plan.name}</h3> <div class="flex items-baseline mb-4"> <span class="text-4xl font-bold text-gray-900">$${plan.price}</span> <span class="text-gray-600 ml-2">/month</span> </div> <p class="text-gray-600 mb-6">${plan.description}</p> <ul class="space-y-3 mb-8"> ${plan.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-700"> <svg class="w-5 h-5 text-violet-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${feature} </li>`)} </ul> ${renderComponent($$result3, "Button", $$Button, { "href": "#", "class": `w-full ${plan.popular ? "" : "variant-secondary"}` }, { "default": ($$result4) => renderTemplate`
Get Started
` })} </div>`)} </div> </div> ` }), renderComponent($$result2, "Button", $$Button, { "href": "#", "size": "lg", "class": "bg-white text-violet-900 hover:bg-violet-50" }, { "default": ($$result3) => renderTemplate`
Start Your Free Trial
` })) })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/software/laravel-mail.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/software/laravel-mail.astro";
const $$url = "/software/laravel-mail";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LaravelMail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
