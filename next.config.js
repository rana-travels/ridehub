const isProd = process.env.NEXT_PUBLIC_NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },

  basePath: isProd ? '/ridehub' : '',
  assetPrefix: isProd ? '/ridehub/' : '',
};

module.exports = nextConfig;