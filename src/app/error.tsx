'use client';
export default function ErrorPage({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Error Page</h1>
      <p className="text-lg">{error.message} ...</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}