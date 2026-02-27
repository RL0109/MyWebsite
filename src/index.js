export default {
    async fetch(request, env) {
      // If this prints false, your deployed Worker does NOT have the assets binding
      const hasAssets = !!env.ASSETS;
  
      if (!hasAssets) {
        return new Response(
          "ASSETS binding missing. This deploy is not using wrangler assets config.",
          { status: 500 }
        );
      }
  
      return env.ASSETS.fetch(request);
    },
  };