/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: "YOUR_KEY_HERE",
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

export default nextConfig;
