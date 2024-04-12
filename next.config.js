const withNextra = require('nextra')({
  latex: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
};

module.exports = withNextra(nextConfig);
