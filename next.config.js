
// Force revalidation of static assets
module.exports = {
  headers: async () => [
    {
      source: '/favicon.ico',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-cache, no-store, must-revalidate'
        }
      ]
    }
  ]
}
