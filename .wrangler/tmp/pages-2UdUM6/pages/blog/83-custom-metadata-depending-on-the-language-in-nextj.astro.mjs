globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_gzEJoz_O.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CIWobTvY.mjs';

const $$83CustomMetadataDependingOnTheLanguageInNextj = createComponent(($$result, $$props, $$slots) => {
  const title = "Custom Metadata depending on the language in Next.js";
  const description = "Custom Metadata in Next.js: Providing Language-Specific SEO for Global Sites As developers striving to build globally accessible applications, optimizing...";
  const date = "2026-08-10";
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "title": title, "description": description, "date": date }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Custom Metadata in Next.js: Providing Language-Specific SEO for Global Sites</h1> <p>As developers striving to build globally accessible applications, optimizing Search Engine Optimization (SEO) across multiple languages is paramount. Simply translating content isn't enough; you need to provide unique, contextually relevant metadata—titles, descriptions, and keywords—for each language variant. This is a common challenge when working with internationalization (i18n), especially in modern frameworks like Next.js.</p> <p>This guide will walk you through how to leverage the Next.js 13 Metadata API to dynamically provide custom SEO metadata based on the user's selected language, ensuring your site ranks effectively across different linguistic markets.</p> <h2>The Challenge of Internationalized Metadata</h2> <p>When dealing with multilingual sites, defining static metadata becomes cumbersome. If you define separate <code>metadata</code> objects for English and Portuguese, the challenge lies in determining <em>which</em> object to export dynamically based on the route segment (e.g., <code>/en/page</code> vs. <code>/pt/page</code>).</p> <p>The core solution involves moving away from simple static exports and utilizing dynamic functions provided by Next.js, specifically <code>generateMetadata</code>, which allows you to fetch data based on the current request context—in this case, the locale.</p> <h2>Implementing Dynamic Metadata with Next.js</h2> <p>Instead of trying to conditionally assign a single object at the top level, the most robust approach is to implement metadata generation within the dynamic function. This gives you access to the route parameters, allowing for precise control over the output based on the detected language.</p> <p>Here is how you can structure your <code>layout.tsx</code> or page component to handle this logic:</p> <pre><code class="language-tsx">import &#123; Metadata &#125; from 'next';
  import &#123; useLocale &#125; from 'next-intl'; // Assuming you are using next-intl for i18n setup
  
  // Define the base metadata structures
  const englishMetadata = &#123;
    title: &#123;
      default: &quot;Brand | brand.xyz&quot;,
      template: &quot;%s | brand.xyz&quot;,
    &#125;,
    description: &quot;Some description in English.&quot;,
    openGraph: &#123;
      title: &quot;Brand&quot;,
      description: &quot;A great site in English.&quot;,
      url: &quot;brand.xyz&quot;,
      siteName: &quot;Brand&quot;,
      type: &quot;website&quot;,
    &#125;,
    keywords: &quot;events clothing, fashion, style&quot;,
  &#125;;
  
  const portugueseMetadata = &#123;
    title: &#123;
      default: &quot;Marca | brand.xyz&quot;,
      template: &quot;%s | brand.xyz&quot;,
    &#125;,
    description: &quot;Alguma descrição em Português.&quot;,
    openGraph: &#123;
      title: &quot;Marca&quot;,
      description: &quot;Um ótimo site em Português.&quot;,
      url: &quot;brand.xyz&quot;,
      siteName: &quot;Marca&quot;,
      type: &quot;website&quot;,
    &#125;,
    keywords: &quot;eventos, vestuário, moda&quot;,
  &#125;;
  
  export async function generateMetadata(&#123; params &#125;: &#123; params: &#123; locale: string &#125; &#125;): Promise&lt;Metadata&gt; &#123;
    const locale = params.locale;
  
    if (locale === 'pt') &#123;
      return portugueseMetadata;
    &#125;
  
    // Default to English if the locale is not Portuguese (or handle other locales)
    return englishMetadata;
  &#125;
  
  // Note: In a real Next.js App Router setup, you would typically use this function 
  // inside a Server Component or layout file.
  </code></pre> <h3>Breakdown and Best Practices</h3> <ol> <li><strong>Dynamic Function (<code>generateMetadata</code>):</strong> By using <code>generateMetadata</code>, you instruct Next.js to execute this function on the server for every request that requires metadata generation. This is superior to static exports when content depends on runtime variables like locale.</li> <li><strong>Accessing Route Parameters:</strong> The function receives an object containing route parameters (<code>params</code>). We use <code>params.locale</code> to determine which set of metadata to return. If you are using a library like <code>next-intl</code>, this locale is readily available, making the logic clean and centralized.</li> <li><strong>Separation of Concerns:</strong> By defining your metadata objects separately (as shown above), you keep your SEO data organized. This makes maintenance significantly easier, especially when scaling to support more languages or regions.</li> </ol> <p>This pattern ensures that the correct, localized metadata is injected into the <code>&lt;head&gt;</code> of the HTML document for each language variant. For robust application architecture, consider how separation of concerns applies to large projects; frameworks like those found in the wider ecosystem, such as Laravel and its associated tools, emphasize clear structure which translates well into Next.js development practices.</p> <h2>Conclusion</h2> <p>Providing custom metadata based on language is a crucial step for achieving true international SEO. By moving from static exports to dynamic functions like <code>generateMetadata</code>, you gain the necessary runtime context to tailor your SEO signals precisely. This approach not only solves your immediate problem with English and Portuguese localization but establishes a scalable pattern for handling any number of locales in your Next.js application. Embrace dynamic rendering, keep your data organized, and watch your global rankings improve.</p> ` })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/blog/83-custom-metadata-depending-on-the-language-in-nextj.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/blog/83-custom-metadata-depending-on-the-language-in-nextj.astro";
const $$url = "/blog/83-custom-metadata-depending-on-the-language-in-nextj";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$83CustomMetadataDependingOnTheLanguageInNextj,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
