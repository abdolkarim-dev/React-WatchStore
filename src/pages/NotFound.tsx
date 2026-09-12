import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf9f7] px-6">
      <div className="w-full max-w-lg text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#8b7355]">
          WatchStore
        </p>

        <h1 className="mt-6 text-[100px] font-light leading-none tracking-[-0.06em] text-[#171717] sm:text-[140px]">
          404
        </h1>

        <div className="mx-auto mt-6 h-px w-12 bg-[#8b7355]" />

        <h2 className="mt-6 text-xl font-medium text-[#171717]">
          Page not found
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#888]">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-w-[150px] items-center justify-center rounded-full bg-[#171717] px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8b7355]"
          >
            Back Home
          </Link>

          <Link
            to="/watches"
            className="inline-flex min-w-[150px] items-center justify-center rounded-full border border-[#d8d5cf] px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-[#555] transition-colors hover:border-[#171717] hover:text-[#171717]"
          >
            Explore Watches
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;