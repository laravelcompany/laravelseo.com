globalThis.process ??= {}; globalThis.process.env ??= {};
import { af as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_BA1YRW7y.mjs';
import { S as SITE } from './BaseLayout_D4EOnj5P.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://laravelseo.com");
const $$ArticleSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleSchema;
  const { title, description, date, image = "/og-image.png", author = SITE.author } = Astro2.props;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "datePublished": date,
    "dateModified": date,
    "image": new URL(image, SITE.url).href,
    "publisher": {
      "@type": "Organization",
      "name": "Laravel Seo",
      "logo": {
        "@type": "ImageObject",
        "url": new URL("/logo.svg", SITE.url).href
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": Astro2.url.href
    }
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)));
}, "/home/stefan/Projects/laravelseo.com/src/components/ArticleSchema.astro", void 0);

export { $$ArticleSchema as $ };
