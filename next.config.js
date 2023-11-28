/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'www.tropicopia.com',
          port: '',
          pathname: '/house-plant/**',
        },
      ],
    },
  }
  

