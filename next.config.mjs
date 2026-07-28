/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "standalone",
  // @mui/styles creates JSS sheets during render and is not Strict Mode safe.
  // Keep this off until the remaining legacy styles move to Emotion.
  reactStrictMode: false,
  poweredByHeader: false,
  i18n: {
    locales: ["en", "zht"],
    defaultLocale: "en",
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
