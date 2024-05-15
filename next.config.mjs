/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'www.w3.org',
              port: '',
              pathname: '**/svg',
            },
          ],
    }
};

export default nextConfig;
