globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D4EOnj5P.mjs';
import { $ as $$Section } from '../chunks/Section_ul3TOVz6.mjs';
import { $ as $$BreadcrumbSchema } from '../chunks/BreadcrumbSchema_D20bdGzY.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BeKiHvih.mjs';
import { c as ctaBgImg } from '../chunks/photo-1553413077-190dd305871c_C26u_u8x.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CIWobTvY.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Privacy Policy | Laravel Seo", "description": "Laravel Company LLC Privacy Policy - Learn how we collect, use, and protect your personal data." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy" }
  ] })} ${maybeRenderHead()}<section class="relative py-24 overflow-hidden"> <div class="absolute inset-0"> ${renderComponent($$result2, "Image", $$Image, { "src": ctaBgImg, "alt": "Privacy Policy", "class": "w-full h-full object-cover", "width": 2070, "height": 1380 })} <div class="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50"></div> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="max-w-3xl mx-auto"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1> <p class="text-slate-300">Last updated: 4/7/2026</p> </div> </div> </section> ${renderComponent($$result2, "Section", $$Section, { "background": "white" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto"> <div class="max-w-3xl mx-auto prose prose-lg prose-slate"> <h2>1. Introduction</h2> <p>
Welcome to Laravel Company LLC. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
</p> <h2>2. Data We Collect</h2> <p>
We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
</p> <ul> <li><strong>Identity Data:</strong> includes first name, last name, username</li> <li><strong>Contact Data:</strong> includes email address and telephone numbers</li> <li><strong>Technical Data:</strong> includes IP address, browser type and version</li> <li><strong>Usage Data:</strong> includes information about how you use our website and services</li> </ul> <h2>3. How We Use Your Data</h2> <p>
We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
</p> <ul> <li>To provide our services to you</li> <li>To improve our website and services</li> <li>To communicate with you about our services</li> <li>To comply with legal obligations</li> </ul> <h2>4. Data Security</h2> <p>
We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
</p> <h2>5. Your Legal Rights</h2> <p>
Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
</p> <ul> <li>Request access to your personal data</li> <li>Request correction of your personal data</li> <li>Request erasure of your personal data</li> <li>Object to processing of your personal data</li> <li>Request restriction of processing your personal data</li> <li>Request transfer of your personal data</li> <li>Right to withdraw consent</li> </ul> <h2>6. Contact Us</h2> <p>
If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:info@laravelcompany.com" class="text-violet-600 hover:text-violet-700">info@laravelcompany.com</a> </p> </div> </div> ` })} ` })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/privacy.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
