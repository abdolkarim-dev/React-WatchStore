import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../data/products";

function Search() {
  const [search, setSearch] = useState(""); 
  const results = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return [];
    }

    return products.filter((product: Product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Search Header */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8b7355]">
              Find your watch
            </span>

            <h1 className="mt-2 text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl">
              Search
            </h1>
          </div>

          <Link
            to="/watches"
            className="text-xs uppercase tracking-[0.15em] text-[#555] transition-colors hover:text-[#8b7355]"
          >
            Back to Watches
          </Link>
        </div>

        {/* Search Input */}
        <div className="relative border-b border-[#d9d6d0] pb-4">
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 shrink-0 text-[#777]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
              />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search watches, brands, collections..."
              autoFocus
              className="w-full bg-transparent text-lg text-[#171717] outline-none placeholder:text-[#aaa] sm:text-2xl"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="shrink-0 text-[#777] transition-colors hover:text-[#171717]"
                aria-label="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
        {!search.trim() ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <p className="text-sm text-[#999]">
              Start typing to search our collection.
            </p>

            <Link
              to="/watches"
              className="mt-5 text-xs uppercase tracking-[0.2em] text-[#8b7355] hover:underline"
            >
              Explore all watches
            </Link>
          </div>
        ) : results.length > 0 ? (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.15em] text-[#777]">
                {results.length} {results.length === 1 ? "result" : "results"}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {results.map((product) => (
                <Link
                  key={product.id}
                  to={`/watches/${product.id}`}
                  className="group"
                >
                  <article>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f2f1ee]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {product.isNew && (
                        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider">
                          New
                        </span>
                      )}
                    </div>

                    <div className="mt-3 px-1">
                      <p className="text-[9px] uppercase tracking-[0.15em] text-[#999]">
                        {product.brand}
                      </p>

                      <div className="mt-1 flex items-start justify-between gap-2">
                        <h3 className="text-sm text-[#171717]">
                          {product.name}
                        </h3>

                        <span className="whitespace-nowrap text-xs text-[#555]">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f2f1ee]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.3"
                stroke="currentColor"
                className="h-7 w-7 text-[#777]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
                />
              </svg>
            </div>

            <h2 className="mt-5 text-lg text-[#171717]">No watches found</h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[#999]">
              We couldn't find anything matching "{search}". Try searching for
              another watch, brand, or collection.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-6 rounded-full bg-[#171717] px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#8b7355]"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Search;
