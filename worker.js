// The site is statically rendered by Astro into dist/.
// Wrangler deploys those files as Worker Static Assets.
// Keep this small module so existing Worker bindings remain explicit
// and deployment does not depend on the earlier temporary KV asset handler.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
