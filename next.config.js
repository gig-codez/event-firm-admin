/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com","firebasestorage.googleapis.com","images.unsplash.com"],
      },
      ssr:true,
      hydrate: false
}

module.exports = nextConfig
