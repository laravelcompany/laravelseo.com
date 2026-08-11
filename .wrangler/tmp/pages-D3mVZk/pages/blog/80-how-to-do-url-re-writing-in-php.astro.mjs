globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_DrskGsOj.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CIWobTvY.mjs';

const $$80HowToDoUrlReWritingInPhp = createComponent(($$result, $$props, $$slots) => {
  const title = "How to do URL re-writing in PHP?";
  const description = "Mastering Clean URLs: A Developer's Guide to URL Rewriting in PHP Implementing clean URLs\u2014where readable, human-friendly paths are used instead of messy query...";
  const date = "2026-08-10";
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "title": title, "description": description, "date": date }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Mastering Clean URLs: A Developer's Guide to URL Rewriting in PHP</h1> <p>Implementing clean URLs—where readable, human-friendly paths are used instead of messy query strings or deep directory structures—is crucial for both user experience and Search Engine Optimization (SEO). When building dynamic applications in PHP, mastering URL rewriting is a fundamental skill. This guide will walk you through the practical steps for achieving this transformation, addressing your specific requirements for handling content slugs and IDs.</p> <h2>The Philosophy of Clean URLs</h2> <p>The core goal of URL rewriting is to map a friendly URL structure (e.g., <code>/videos/play/google-io-2009-wave-intro</code>) into an internal, structured request that the PHP application can easily process. This process moves the complexity away from the browser and into the server or application logic.</p> <p>We are essentially transforming:
<code>http://example.com/videos/play/slug</code> $\\rightarrow$ <code>index.php?category=videos&amp;type=play&amp;title=slug</code></p> <p>This transformation allows us to use parameters (like <code>title</code> or <code>id</code>) for data retrieval, which is cleaner and more manageable than relying on complex path structures.</p> <h2>Method 1: Server-Level Rewriting using <code>.htaccess</code></h2> <p>The most efficient way to handle large volumes of URL rewriting before the request even hits your PHP scripts is by using server configuration files, specifically Apache's <code>.htaccess</code> file (using <code>mod_rewrite</code>). This keeps your application logic cleaner.</p> <p>In your root directory (or the specific subdirectory where you want this rule applied), create or edit the <code>.htaccess</code> file:</p> <pre><code class="language-apache">RewriteEngine On
  RewriteBase /
  
  # Rule to handle the desired structure for video playback
  RewriteRule ^videos/play/(.*)$ play.php?title=$1 [L,QSA]
  </code></pre> <p><strong>Explanation:</strong>
* <code>RewriteEngine On</code>: Activates the rewrite engine.
  * <code>RewriteRule ...</code>: Defines the rule. It looks for URLs matching the pattern.
  * <code>^videos/play/(.*)$</code>: This captures everything after <code>/videos/play/</code> into the variable <code>$1</code> (this becomes your slug or ID).
  * <code>play.php?title=$1</code>: This rewrites the URL internally to a clean PHP file, appending the captured value as a query parameter (<code>title</code>).</p> <p>This method effectively handles your first requirement: converting <code>/videos/play/google-io-2009-wave-intro</code> into <code>play.php?title=google-io-2009-wave-intro</code>.</p> <h2>Method 2: Application-Level Handling in PHP</h2> <p>While <code>.htaccess</code> handles the <em>routing</em>, the PHP script must handle the <em>data retrieval</em>. Once the request hits <code>play.php</code>, your PHP code needs to read the parameters and query the database.</p> <p>Here is how you would process the incoming request within that file:</p> <pre><code class="language-php">&lt;?php
  // Assuming this script is play.php
  
  if (isset($_GET['title'])) &#123;
      $videoTitle = $_GET['title'];
      // Step 2: Use $videoTitle to query your MySQL database
      // Example: $stmt = $pdo-&gt;prepare(&quot;SELECT * FROM videos WHERE title = ?&quot;);
      echo &quot;Displaying video for title: &quot; . htmlspecialchars($videoTitle);
  &#125; elseif (isset($_GET['id'])) &#123;
      $videoId = $_GET['id'];
      // Example: $stmt = $pdo-&gt;prepare(&quot;SELECT * FROM videos WHERE id = ?&quot;);
      echo &quot;Displaying video with ID: &quot; . htmlspecialchars($videoId);
  &#125; else &#123;
      echo &quot;Error: Missing video identifier.&quot;;
  &#125;
  ?&gt;
  </code></pre> <p>This application-level logic allows you to handle both cases seamlessly, depending on which parameter (<code>title</code> or <code>id</code>) was passed by the URL.</p> <h2>SEO and Best Practices: Slug vs. ID</h2> <p>You asked which structure is best for SEO and management:</p> <ol> <li><strong><code>/videos/play/google-io-2009-wave-intro</code> (Slug-based):</strong> <strong>Recommended.</strong> Slugs are highly readable, descriptive, and excellent for SEO. They tell search engines exactly what the page is about.</li> <li><strong><code>/videos/play/203/google-io-2009-wave-intro</code> (ID-based Path):</strong> Less readable for users and less beneficial for SEO unless the ID itself is meaningful content (which it usually isn't).</li> </ol> <p>For modern web applications, prioritizing human readability (slugs) over purely numeric paths generally yields better engagement and SEO results. Frameworks like <strong>Laravel</strong>, which heavily emphasize routing and clean URLs, make this separation of concerns extremely straightforward, providing robust tools for managing these transitions efficiently.</p> <h2>Conclusion</h2> <p>Implementing URL rewriting is a layered process involving both server configuration and application logic. Start with <code>.htaccess</code> to handle the initial mapping, and then use your PHP code to safely extract and utilize the data passed via query parameters. By focusing on clean, descriptive slugs, you ensure a better experience for your users and improved visibility in search engine results.</p> ` })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/blog/80-how-to-do-url-re-writing-in-php.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/blog/80-how-to-do-url-re-writing-in-php.astro";
const $$url = "/blog/80-how-to-do-url-re-writing-in-php";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$80HowToDoUrlReWritingInPhp,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
