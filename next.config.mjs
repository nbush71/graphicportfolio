/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` creates an `out/` folder you can host anywhere.
  output: "export",
  images: { unoptimized: true },
};
export default nextConfig;
