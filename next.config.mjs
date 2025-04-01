/** @type {import('next').NextConfig} */
const BUCKET_NAME = process.env.BUCKET_NAME;
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: `${BUCKET_NAME}.s3.amazonaws.com`,
        }],
    },
};
export default nextConfig;
