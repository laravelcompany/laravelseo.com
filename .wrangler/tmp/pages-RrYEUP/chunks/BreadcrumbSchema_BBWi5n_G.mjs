globalThis.process ??= {}; globalThis.process.env ??= {};
import { af as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_BA1YRW7y.mjs';
import { S as SITE } from './BaseLayout_GZPNdnj0.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://laravelseo.com");
const $$BreadcrumbSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BreadcrumbSchema;
  const { items } = Astro2.props;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": new URL(item.href, SITE.url).href
    }))
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)));
}, "/home/stefan/Projects/laravelseo.com/src/components/BreadcrumbSchema.astro", void 0);

export { $$BreadcrumbSchema as $ };
