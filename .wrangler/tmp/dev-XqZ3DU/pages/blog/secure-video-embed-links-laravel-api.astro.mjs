globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BA1YRW7y.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_gzEJoz_O.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CIWobTvY.mjs';

const $$SecureVideoEmbedLinksLaravelApi = createComponent(async ($$result, $$props, $$slots) => {
  const title = "How to Secure API-Generated Video Embed Links in Laravel and Prevent Sharing";
  const description = "Learn how to generate expiring, single-use video embed links in Laravel APIs. Prevent users from sharing protected video content with token-based access control.";
  const date = "2026-06-29";
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "title": title, "description": description, "date": date, "category": "Laravel", "readTime": "10 min read", "tags": "laravel api, video security, token-based access, embed links" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose prose-lg prose-invert max-w-none"> <p>
A common challenge in Laravel applications is generating secure embed links for paid video content. The workflow seems straightforward: a user pays, hits a watch page, your API generates an embed URL from a hosting provider like UIshare or Vimeo, and returns it to the client. But there is a problem: if that embed URL is a static link, the user can share it with anyone, and your paid content protection is gone.
</p> <p>
This guide walks through a Laravel implementation that generates expiring, single-use, device-bound embed links so your protected video content stays protected.
</p> <h2>The Problem with Static Embed Links</h2> <p>
Most video hosting platforms generate a standard embed URL that looks something like this:
</p> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">https://player.vimeo.com/video/123456789

https://uisha.re/embed/abc123def</code></pre> <p>
These URLs are static and permanent. Once your Laravel backend returns one to the client, the user can copy it, share it, or embed it anywhere. The only thing preventing sharing is obscurity, and that is not a security strategy.
</p> <h2>The Solution: Token-Based Access Control</h2> <p>
Instead of returning the embed URL directly, you create a proxy endpoint in Laravel that validates access before serving the embed. Here is the architecture:
</p> <ol> <li>User purchases access and lands on the watch page</li> <li>Your backend verifies their entitlement</li> <li>Generate a signed, expiring token tied to the user and the specific video</li> <li>Return the token (not the embed URL) to the frontend</li> <li>The frontend uses the token to request the actual embed URL via a secure endpoint</li> <li>Your backend validates the token and returns a short-lived proxy URL</li> </ol> <h2>Implementation</h2> <h3>Step 1: Create the Token Generation</h3> <p>
Laravel's built-in URL signing is perfect for this. You do not need any external packages:
</p> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">&lt;?php

namespace App\\Services;

use Illuminate\\Support\\Facades\\URL;
use Illuminate\\Support\\Str;

class VideoAccessService
&#123;
    public function generateAccessToken(string $userId, string $videoId): string
    &#123;
        // Create a signed URL with a 30-minute expiration
        // tied to the specific user and video
        $signedUrl = URL::temporarySignedRoute(
            'video.proxy',
            now()->addMinutes(30),
            [
                'user' => $userId,
                'video' => $videoId,
                'nonce' => Str::random(32),
            ]
        );

        // Optionally store the token in cache for revocation capability
        cache()->set(
            "video_access:&#123;$userId&#125;:&#123;$videoId&#125;",
            true,
            now()->addMinutes(30)
        );

        return $signedUrl;
    &#125;
&#125;</code></pre> <h3>Step 2: Create the Proxy Route and Controller</h3> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">&lt;?php

// routes/web.php
Route::get('/video/proxy/&#123;user&#125;/&#123;video&#125;', 'VideoController@proxy')
    ->name('video.proxy')
    ->middleware('signed'); // Laravel's built-in signed URL validation</code></pre> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">&lt;?php

namespace App\\Http\\Controllers;

use App\\Models\\Video;
use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Cache;

class VideoController extends Controller
&#123;
    public function proxy(Request $request, User $user, string $videoId)
    &#123;
        // Verify user entitlement
        if (!$user->hasAccessToVideo($videoId)) &#123;
            abort(403, 'Access revoked');
        &#125;

        // Check cache for revocation
        if (!Cache::get("video_access:&#123;$user->id&#125;:&#123;$videoId&#125;")) &#123;
            abort(410, 'Token expired or revoked');
        &#125;

        // Verify it is the same user making the request
        if ($request-&gt;user()-&gt;id !== $user-&gt;id) &#123;
            abort(403, 'Token belongs to another user');
        &#125;

        // Generate a short-lived embed URL from your video provider
        $embedUrl = $this->generateEmbedUrl($videoId, 5); // 5-minute TTL

        // Delete the cache entry to make it single-use
        Cache::forget("video_access:&#123;$user->id&#125;:&#123;$videoId&#125;");

        return response()-&gt;json([
            'embed_url' =&gt; $embedUrl,
            'expires_at' =&gt; now()-&gt;addMinutes(5)-&gt;toIso8601String(),
        ]);
    &#125;

    private function generateEmbedUrl(string $videoId, int $ttlMinutes): string
    &#123;
        // Call your video provider's API to generate a time-limited embed URL
        // Example with a generic API:
        $response = Http::withToken(config('services.videoprovider.key'))
            -&gt;post('https://api.videoprovider.com/embed', [
                'video_id' =&gt; $videoId,
                'expires_in' =&gt; $ttlMinutes * 60,
                'domain_restriction' =&gt; config('app.url'),
            ]);

        return $response-&gt;json('embed_url');
    &#125;
&#125;</code></pre> <h3>Step 3: Frontend Integration</h3> <p>
On the client side, request the token from your API, then use it to fetch the actual embed URL:
</p> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">// Frontend JavaScript (or Vue/React)
async function loadVideo(videoId) &#123;
    // Step 1: Request an access token from your API
    const tokenResponse = await fetch('/api/video/request-token', &#123;
        method: 'POST',
        headers: &#123; 'Content-Type': 'application/json' &#125;,
        body: JSON.stringify(&#123; video_id: videoId &#125;),
    &#125;);
    const &#123; token &#125; = await tokenResponse.json();

    // Step 2: Use the token to get the actual embed URL
    const proxyResponse = await fetch(token);
    const &#123; embed_url, expires_at &#125; = await proxyResponse.json();

    // Step 3: Load the embed
    const iframe = document.getElementById('video-player');
    iframe.src = embed_url;
&#125;</code></pre> <h2>Additional Security Layers</h2> <h3>Domain Restriction</h3> <p>
Configure your video hosting provider to only serve the embed from your domain. Most providers support this:
</p> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">// Vimeo: Set allowed domains in the video settings
// UIshare: Pass domain_restriction in the API call</code></pre> <h3>IP Binding</h3> <p>
Bind the token to the user's IP address at generation time and verify it at consumption time:
</p> <pre class="bg-slate-900 rounded-lg p-4 overflow-x-auto"><code class="text-sm text-slate-200">&lt;?php

public function generateAccessToken(string $userId, string $videoId, string $ip): string
&#123;
    return URL::temporarySignedRoute(
        'video.proxy',
        now()->addMinutes(30),
        [
            'user' =&gt; $userId,
            'video' =&gt; $videoId,
            'ip' =&gt; $ip, // Bind to IP
            'nonce' =&gt; Str::random(32),
        ]
    );
&#125;

// In the proxy controller:
if ($request-&gt;ip() !== $request-&gt;route('ip')) &#123;
    abort(403, 'IP address mismatch');
&#125;</code></pre> <h3>User Agent Fingerprinting</h3> <p>
For stricter security, combine IP binding with user agent fingerprinting. This makes it significantly harder for someone to share the token with another person.
</p> <h2>Handling the Sharing Problem</h2> <p>
The original question asked how to prevent users from sharing the embed link. Here is how each layer helps:
</p> <ul> <li><strong>Expiring tokens</strong> — the embed link is only valid for a few minutes, making shared links useless quickly</li> <li><strong>Single-use tokens</strong> — once the embed is loaded, the token cannot be reused</li> <li><strong>IP binding</strong> — the token only works from the original requester's IP</li> <li><strong>Domain restriction</strong> — the embed only renders on your domain</li> <li><strong>Revocation cache</strong> — you can invalidate all tokens for a user if you detect abuse</li> </ul> <h2>Conclusion</h2> <p>
Protecting paid video content in a Laravel application does not require a third-party DRM service. By combining Laravel's built-in signed routes with short-lived tokens, IP binding, and domain restriction, you can build a robust access control system that prevents unauthorized sharing of your embed links.
</p> <p>
The key principle: <strong>never return a static embed URL to the client</strong>. Always proxy through your backend with time-limited, revocable tokens.
</p> </div> <div class="not-prose mt-12 pt-8 border-t border-slate-800"> <a href="/capabilities" class="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-all shadow-lg shadow-violet-500/25">Explore Capabilities</a> </div> ` })}`;
}, "/home/stefan/Projects/laravelseo.com/src/pages/blog/secure-video-embed-links-laravel-api.astro", void 0);

const $$file = "/home/stefan/Projects/laravelseo.com/src/pages/blog/secure-video-embed-links-laravel-api.astro";
const $$url = "/blog/secure-video-embed-links-laravel-api";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SecureVideoEmbedLinksLaravelApi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
