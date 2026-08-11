globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_DrskGsOj.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CIWobTvY.mjs';

const $$130JsonLdSchemaorgMultipleVideoimagePage = createComponent(($$result, $$props, $$slots) => {
  const title = "JSON-LD Schema.org: Multiple video/image page";
  const description = "JSON-LD Schema.org: Structuring Multiple Media on a Single Page Dealing with dynamic content, especially large lists like search results featuring multiple...";
  const date = "2026-08-10";
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "title": title, "description": description, "date": date }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>JSON-LD Schema.org: Structuring Multiple Media on a Single Page</h1> <p>Dealing with dynamic content, especially large lists like search results featuring multiple videos or images on one page, often confuses developers when applying structured data using JSON-LD and Schema.org. The core difficulty isn't defining a single item; it’s defining the relationship between the container (the page) and the many items within it.</p> <p>The solution lies in understanding how Schema.org supports collections and arrays. You don't define each video or image individually as top-level entities if they all belong to a singular context. Instead, you use array notation to group related objects under a parent entity.</p> <h2>The Strategy: Utilizing Arrays for Collections</h2> <p>When you have 50 videos on a search results page, the primary <code>@type</code> should describe the page itself (e.g., <code>WebPage</code> or perhaps <code>SearchResultsPage</code>). Within that page object, you define properties that hold collections of related media. For example, instead of defining 50 separate <code>VideoObject</code> instances at the root level, you embed an array of these objects within a relevant property on your main page schema.</p> <p>This approach maintains semantic accuracy while keeping the markup concise and highly readable for search engines.</p> <h2>Implementing Multiple Media with JSON-LD</h2> <p>Let’s look at how this translates into practice. If your goal is to mark up a results page that features multiple videos, you would define an array property within the main schema. This tells Google that these items are all components of the parent page context.</p> <p>Consider a search results page. You want to indicate that this page contains a collection of video results.</p> <p>Here is a conceptual example demonstrating how you would structure the JSON-LD:</p> <pre><code class="language-json">&#123;
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;name&quot;: &quot;Top 50 Search Results for Tech Videos&quot;,
    &quot;description&quot;: &quot;A collection of videos related to recent technology trends.&quot;,
    &quot;mainVideoResults&quot;: &#123;
      &quot;@type&quot;: &quot;ItemList&quot;,
      &quot;name&quot;: &quot;Video Search Results&quot;,
      &quot;itemListElement&quot;: [
        &#123;
          &quot;@type&quot;: &quot;VideoObject&quot;,
          &quot;name&quot;: &quot;Video Title 1&quot;,
          &quot;thumbnailUrl&quot;: &quot;https://example.com/video1_thumb.jpg&quot;,
          &quot;duration&quot;: &quot;120s&quot;,
          &quot;url&quot;: &quot;https://example.com/video1&quot;
        &#125;,
        &#123;
          &quot;@type&quot;: &quot;VideoObject&quot;,
          &quot;name&quot;: &quot;Video Title 2&quot;,
          &quot;thumbnailUrl&quot;: &quot;https://example.com/video2_thumb.jpg&quot;,
          &quot;duration&quot;: &quot;95s&quot;,
          &quot;url&quot;: &quot;https://example.com/video2&quot;
        &#125;
        // ... up to 50 entries here
      ]
    &#125;
  &#125;
  </code></pre> <p>In this structure, the <code>mainVideoResults</code> property acts as a container. It uses the <code>ItemList</code> type, which is designed specifically for listing items. The actual videos are then placed inside the <code>itemListElement</code> array. This pattern allows you to scale indefinitely—whether you have 5 or 500 results, the structure remains valid and highly informative for crawlers.</p> <h2>Developer Best Practices and Scalability</h2> <p>From a development standpoint, handling this dynamically requires careful consideration of your backend logic. When working with frameworks like Laravel, where you are generating content based on database queries, ensuring that your Eloquent models correctly map to these complex JSON structures is crucial. You should avoid hardcoding large arrays directly into static files; instead, generate the JSON-LD payload dynamically during the rendering process.</p> <p>For instance, when fetching results from a database, you would iterate through the result set and construct an array of video objects before serializing it into your final output. This keeps the data source (your database) separate from the structured markup generation. If you are building complex API endpoints or content management systems, leveraging robust tools—perhaps by using packages that streamline schema generation within Laravel applications—can significantly reduce the chance of structural errors when dealing with large, repetitive datasets.</p> <p>The key takeaway is to think hierarchically: define what the page <em>is</em>, then define what collections exist on that page, and finally, define the individual items within those collections. This nested approach is how Schema.org is designed to handle complex, relational data effectively across large-scale content.</p> ` })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/blog/130-json-ld-schemaorg-multiple-videoimage-page.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/blog/130-json-ld-schemaorg-multiple-videoimage-page.astro";
const $$url = "/blog/130-json-ld-schemaorg-multiple-videoimage-page";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$130JsonLdSchemaorgMultipleVideoimagePage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
