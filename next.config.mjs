/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'luvtirdnwxbnlqwjwygl.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/gig-posters/**',

            }
        ],
    }
};

export default nextConfig;
