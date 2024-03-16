import { type MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'eNIS next',
    short_name: 'eNIS next',
    description:
      'Быстрый, адаптивный, а главное - стабильный клиент электронного дневника',
    start_url: '/',
    display: 'standalone',
    background_color: '#171717',
    theme_color: '#0fc455',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
