module.exports = {
  generateBuildId: () => 'build',
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: ['https://res.cloudinary.com/'],
    path: 'https://acoustic.to/_next/image',
    loader: 'cloudinary'
  },
  async redirects() {
    return [
      {
        source: '/invite',
        destination:
          'https://discord.com/api/oauth2/authorize?client_id=816842865732091924&permissions=8&redirect_uri=http%3A%2F%2Foauth.acoustic.to&response_type=code&scope=bot%20guilds.join%20identify%20applications.commands',
        permanent: true
      },
      {
        source: '/support',
        destination: 'https://discord.gg/8gspb92Cns',
        permanent: true
      },
      {
        source: '/vote',
        destination: 'https://top.gg/bot/816842865732091924',
        permanent: true
      },
      {
        source: '/servervote',
        destination: 'https://top.gg/servers/830229630950047774',
        permanent: true
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/acousticlybot',
        permanent: true
      },
      {
        source: '/youtube',
        destination: 'https://youtube.com/channel/UCukKSll51JBQ1t1V9MVRHeA',
        permanent: true
      },
      {
        source: '/patreon',
        destination: 'https://patreon.com/acousticly',
        permanent: true
      }
    ]
  }
}
