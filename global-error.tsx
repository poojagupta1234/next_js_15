'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string }
  reset: () => void
}>) {
   
  return (
    // global-error must include html and body tags
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}