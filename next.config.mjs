/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
    images: {
      unoptimized: true,
        domains: ['readymadeui.com','placehold.co','picsum.photos'], // add any other external domains here
      },
};

export default nextConfig;
