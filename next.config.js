/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '**',
            },
          ],
        domains:['images.unsplash.com','www.physology.co.uk']
    }
}

module.exports = nextConfig
