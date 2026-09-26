
import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages static export
  output: 'export',
  basePath: '/adspeak',
  trailingSlash: true,

  // Build settings
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  // TypeScript and ESLint
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image optimization
  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
    qualities: [75, 85, 100],
    unoptimized: true,
  },

  // Webpack configuration
  webpack(config, { dev }) {
    if (dev) {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: '@dhiwise/component-tagger/nextLoader',
          },
        ],
      });

      const ignoredPaths = (process.env.WATCH_IGNORED_PATHS || '')
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean);

      config.watchOptions = {
        ignored: ignoredPaths.length
          ? ignoredPaths.map(
              (p) => `**/${p.replace(/^\/+|\/+$/g, '')}/**`
            )
          : undefined,
      };
    }

    return config;
  },
};

export default nextConfig;
