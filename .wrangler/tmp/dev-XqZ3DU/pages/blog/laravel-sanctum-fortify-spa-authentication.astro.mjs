globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_gzEJoz_O.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CIWobTvY.mjs';

const $$LaravelSanctumFortifySpaAuthentication = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Laravel Sanctum + Fortify SPA Authentication: Fixing API Route Redirects";
  const description = "Fix redirect issues when using Laravel Sanctum with Fortify for SPA authentication. Complete setup guide for first-party SPA and API authentication.";
  const date = "2026-06-29";
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "title": title, "description": description, "date": date, "category": "Laravel", "readTime": "11 min read", "tags": "laravel sanctum, fortify, spa authentication, api" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose prose-lg prose-invert max-w-none"> <p>
A common issue when setting up Laravel Sanctum with Fortify for SPA authentication is that API routes unexpectedly redirect to the login page instead of returning JSON 401 responses. This happens because Laravel's default authentication middleware behavior is geared toward session-based web apps, not stateless API consumers. Here is exactly why it happens and how to fix it.
</p> <h2>The Problem</h2> <p>
You have a Laravel 13 application with Sanctum and Fortify installed. Your SPA lives on the same domain as your Laravel backend. You configured Sanctum for SPA authentication following the docs. But when your SPA makes an API call without a valid token, instead of getting a <code>&#123;"message": "Unauthenticated"&#125;</code> JSON response, the server returns an HTML redirect to <code>/login</code>.
</p> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">// Expected:
&#123;
    "message": "Unauthenticated"
&#125;

// Actual:
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta http-equiv="refresh" content="0;url=/login" /&gt;
    ...</code></pre> <p>
The root cause: Laravel's <code>auth</code> middleware redirects unauthenticated users based on the <code>redirectTo()</code> method in <code>App\\Exceptions\\Handler</code> or <code>App\\Http\\Middleware\\Authenticate</code>. It checks <code>expectsJson()</code> on the request, but under certain configurations, that check fails.
</p> <h2>Why It Happens</h2> <p>There are three common causes:</p> <h3>1. Incorrect Middleware on API Routes</h3> <p>
Using <code>auth</code> middleware instead of <code>auth:sanctum</code> on your API routes:
</p> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">&lt;?php

// routes/api.php — WRONG
Route::middleware('auth')-&gt;group(function () &#123;
    // These routes redirect to login instead of returning 401
&#125;);

// routes/api.php — CORRECT
Route::middleware('auth:sanctum')-&gt;group(function () &#123;
    // Sanctum guard returns proper JSON 401
&#125;);</code></pre> <h3>2. SPA Not Sending Accept Header</h3> <p>
Sanctum's SPA authentication expects the <code>Accept: application/json</code> header. Without it, Laravel assumes it is a browser request and redirects:
</p> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">// Frontend fetch — missing Accept header
fetch('/api/user');
// Server sees non-XHR, no Accept header → redirect

// Correct way
fetch('/api/user', &#123;
    headers: &#123;
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    &#125;,
    credentials: 'include', // Required for Sanctum SPA auth
&#125;);</code></pre> <h3>3. Custom Authenticate Middleware Override</h3> <p>
If you customized <code>app/Http/Middleware/Authenticate.php</code>, the <code>redirectTo()</code> method might not check <code>expectsJson()</code>:
</p> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">&lt;?php

namespace App\\Http\\Middleware;

use Illuminate\\Auth\\Middleware\\Authenticate as Middleware;

class Authenticate extends Middleware
&#123;
    protected function redirectTo($request)
    &#123;
        // Missing the expectsJson check!
        return route('login');
    &#125;
&#125;

// Fixed version:
protected function redirectTo($request)
&#123;
    if (!$request-&gt;expectsJson()) &#123;
        return route('login');
    &#125;
&#125;</code></pre> <h2>Complete Setup Checklist</h2> <p>
Here is a verified working setup for Sanctum SPA authentication with Fortify on Laravel 13:
</p> <h3>Step 1: Install and Configure Sanctum</h3> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">composer require laravel/sanctum
php artisan install:api
php artisan vendor:publish --provider="Laravel\\Sanctum\\SanctumServiceProvider"</code></pre> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">&lt;?php

// config/sanctum.php
'stateful' =&gt; explode(',', env('SANCTUM_STATEFUL_DOMAINS', sprintf(
    '%s%s',
    'localhost,localhost:3000,localhost:5173,127.0.0.1,127.0.0.1:8000,::1',
    Sanctum::currentApplicationUrlWithPort()
))),

'middleware' =&gt; [
    'authenticate_session' =&gt; Laravel\\Sanctum\\Http\\Middleware\\AuthenticateSession::class,
    'encrypt_cookies' =&gt; Laravel\\Sanctum\\Http\\Middleware\\EncryptCookies::class,
    'validate_csrf_token' =&gt; Laravel\\Sanctum\\Http\\Middleware\\ValidateCsrfToken::class,
],</code></pre> <h3>Step 2: Configure CORS</h3> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">// config/cors.php
return [
    'paths' =&gt; ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' =&gt; ['*'],
    'allowed_origins' =&gt; [env('FRONTEND_URL', 'http://localhost:5173')],
    'supports_credentials' =&gt; true,
];</code></pre> <h3>Step 3: Configure Fortify</h3> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">// config/fortify.php
'views' =&gt; false, // Disable Fortify's views since you have an SPA

// Make sure Fortify's routes use the correct guard
'guard' =&gt; 'web', // Keep web guard for SPA authentication via cookies</code></pre> <h3>Step 4: API Routes Setup</h3> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">&lt;?php

// routes/api.php
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Route;

Route::get('/user', function (Request $request) &#123;
    return $request-&gt;user();
&#125;)-&gt;middleware('auth:sanctum');</code></pre> <h3>Step 5: Bootstrap the SPA Auth</h3> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">// Frontend — Vue/React/vanilla JS
async function login(email, password) &#123;
    // Step 1: Get CSRF cookie
    await fetch('/sanctum/csrf-cookie', &#123;
        method: 'GET',
        credentials: 'include',
    &#125;);

    // Step 2: Login via Fortify
    const response = await fetch('/login', &#123;
        method: 'POST',
        headers: &#123;
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        &#125;,
        body: JSON.stringify(&#123; email, password &#125;),
        credentials: 'include',
    &#125;);

    if (!response.ok) &#123;
        const error = await response.json();
        throw new Error(error.message);
    &#125;

    // Now authenticated — subsequent API calls work with cookie
&#125;

async function fetchUser() &#123;
    const response = await fetch('/api/user', &#123;
        headers: &#123;
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        &#125;,
        credentials: 'include',
    &#125;);

    if (response.status === 401) &#123;
        // Not authenticated — redirect to login
        return null;
    &#125;

    return response.json();
&#125;</code></pre> <h2>Quick Debugging Checklist</h2> <p>
If your API routes are still redirecting, run through this checklist:
</p> <ol> <li>Run <code>php artisan route:list</code> and verify your API routes use <code>auth:sanctum</code>, not <code>auth</code></li> <li>Check the browser's Network tab — are your API requests sending the <code>Accept: application/json</code> header?</li> <li>Are your requests including <code>credentials: 'include'</code>?</li> <li>Is <code>SESSION_DRIVER</code> set to <code>cookie</code> in your <code>.env</code>?</li> <li>Is <code>SANCTUM_STATEFUL_DOMAINS</code> correctly set to include your frontend domain?</li> <li>Verify your SPA and backend are on the same top-level domain (Sanctum requires this for SPA auth)</li> </ol> <h2>Alternative: Use API Tokens Instead</h2> <p>
If you cannot use the same domain for your SPA and API, switch to Sanctum's API token approach instead:
</p> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">&lt;?php

// Generate a token
$token = $user-&gt;createToken('spa-token')-&gt;plainTextToken;

// Return it to the frontend
return response()-&gt;json(['token' =&gt; $token]);

// Frontend sends it as a Bearer token
fetch('/api/user', &#123;
    headers: &#123;
        'Authorization': \`Bearer $&#123;token&#125;\`,
        'Accept': 'application/json',
    &#125;,
&#125;);</code></pre> <p>
This approach does not require cookies, CSRF protection, or same-domain constraints. The trade-off is that tokens stored in localStorage are more vulnerable to XSS attacks than HTTP-only cookies.
</p> <h2>Conclusion</h2> <p>
The API route redirect problem with Sanctum and Fortify almost always comes down to one of three things: using the wrong middleware guard, missing the <code>Accept: application/json</code> header, or a misconfigured <code>Authenticate</code> middleware. Fix those three and your SPA authentication will return proper JSON responses as expected.
</p> </div> ` })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/blog/laravel-sanctum-fortify-spa-authentication.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/blog/laravel-sanctum-fortify-spa-authentication.astro";
const $$url = "/blog/laravel-sanctum-fortify-spa-authentication";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LaravelSanctumFortifySpaAuthentication,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
