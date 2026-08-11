// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/",
    "/_astro/*",
    "/.assetsignore",
    "/favicon.svg",
    "/logo.svg",
    "/old-favicon.svg",
    "/robots.txt",
    "/sitemap.xml",
    "/speed-metrics.png",
    "/sw.js"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/home/stefan/Projects/laravelseo.com/.wrangler/tmp/pages-D3mVZk/bundledWorker-0.8164440465459211.mjs";
import { isRoutingRuleMatch } from "/home/stefan/Projects/laravelseo.com/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/home/stefan/Projects/laravelseo.com/.wrangler/tmp/pages-D3mVZk/bundledWorker-0.8164440465459211.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=zb6ayva7ug.js.map
