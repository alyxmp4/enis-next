'use client'

import React, { useEffect } from 'react'
import { refresh } from '@/actions/refresh'
import Spinner from '@/components/Spinner/Spinner'

/*
  Okay, Vercel found it good to hide all the error details from the client side
  And when the error is fetched it will always try to refresh token, thanks to the Vercel for the decision above

  It's not a good idea, I know, I should fix that madness, but not now
  TODO determine the other way to refreshing tokens
*/

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  useEffect(() => {
    void refresh().then(() => reset())

    // Sentry.captureException(error)
  }, [error, reset])

  return <Spinner />
}

export default Error
