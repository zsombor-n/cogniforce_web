// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'dist', // Optional: specify custom output directory
  };
  
  export default nextConfig;