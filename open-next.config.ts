import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

// Next's output tracing only copies the Emotion entrypoints used by the Node
// build. Avoid resolving Emotion's untraced edge-light variants when OpenNext
// bundles the same server output for workerd.
config.cloudflare = {
  ...config.cloudflare,
  useWorkerdCondition: false,
};

export default config;
