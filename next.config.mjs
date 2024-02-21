/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
        return [
            {
                source: '/lbtn',
                destination: 'https://nore.beehiiv.com/',
                permanent: false
            },
            {
                source: '/rbtn',
                destination: 'https://twitter.com/Web3NoRe',
                permanent: false
            }
        ]
    }

};

export default nextConfig;
