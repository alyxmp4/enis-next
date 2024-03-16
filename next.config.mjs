// import { withSentryConfig } from "@sentry/nextjs";
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js')

import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
});

export default withSerwist({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});


// export default withSentryConfig(withSerwist({
//   reactStrictMode: false,
//
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//
//   typescript: {
//     ignoreBuildErrors: true,
//   }
// }, {
//   silent: true,
//   org: "alyxmp4",
//   project: "enis-next",
// }), {
// widenClientFileUpload: true,
//
// transpileClientSDK: true,
//
// tunnelRoute: "/monitoring",
//
// // Hides source maps from generated client bundles
// hideSourceMaps: true,
//
// // Automatically tree-shake Sentry logger statements to reduce bundle size
// disableLogger: true,
// });