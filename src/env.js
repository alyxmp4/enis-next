import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    GA_THREAD_ID: z.string(),
    SENTRY_PROJECT: z.string(),
  },

  client: {
    NEXT_PUBLIC_APP_VERSION: z.string(),
    NEXT_PUBLIC_APP_CHANNEL: z.enum(['stable', 'beta', 'alpha']),
    NEXT_PUBLIC_REPO_URL: z.string().url(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
    NEXT_PUBLIC_APP_CHANNEL: process.env.NEXT_PUBLIC_APP_CHANNEL,
    NEXT_PUBLIC_REPO_URL: process.env.NEXT_PUBLIC_REPO_URL,
    GA_THREAD_ID: process.env.GA_THREAD_ID,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
})
