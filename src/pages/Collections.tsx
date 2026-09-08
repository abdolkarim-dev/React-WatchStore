import React from "react";
import { Link } from "react-router-dom";

export default function Collections() {
  return (
    <>
      {/* <!-- Page Header --> */}
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-12 lg:px-8">
        {/* <!-- Breadcrumb --> */}
        <div className="mb-12 flex items-center gap-2 text-xs text-black/40">
          <Link to="/" className="transition hover:text-black">
            Home
          </Link>

          <span>/</span>

          <span className="text-black"> Collections </span>
        </div>

        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
            Discover AbdOlkarim Watch
          </p>

          <h1 className="mt-4 text-5xl font-medium tracking-tight sm:text-6xl">
            Our Collections
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-black/50">
            Explore our curated collections, each created around a different
            expression of time, style and craftsmanship.
          </p>
        </div>
      </section>

      {/* <!-- Featured Collection --> */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <a
          href="#"
          className="group relative block min-h-[500px] overflow-hidden rounded-[2rem] bg-[#d9d6cf]"
        >
          <img
            src="./src/assets/images/products/20.jpg"
            alt="The Essential Collection"
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent"></div>

          <div className="relative flex min-h-[500px] items-end p-8 sm:p-12 lg:p-16">
            <div className="max-w-lg text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Featured Collection
              </p>

              <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
                The Essential
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                Refined silhouettes, precise details and timeless proportions
                made for everyday elegance.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 text-sm font-medium">
                Explore Collection
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* <!-- Collections Grid --> */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#8b7355]">
                Explore
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-tight">
                Find your collection
              </h2>
            </div>

            <span className="hidden text-sm text-black/40 sm:block">
              6 Collections
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* <!-- Collection 01 --> */}
            <a
              href="#"
              className="group relative min-h-[460px] overflow-hidden rounded-3xl bg-[#e7e4de]"
            >
              <img
                src="./src/assets/images/products/12.jpg"
                alt="classNameic Collection"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/55">
                  08 Watches
                </p>

                <h3 className="mt-2 text-3xl font-medium">classNameic</h3>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  Discover
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* <!-- Collection 02 --> */}
            <a
              href="#"
              className="group relative min-h-[460px] overflow-hidden rounded-3xl bg-[#e7e4de]"
            >
              <img
                src="./src/assets/images/products/13.jpg"
                alt="Luxury Collection"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/55">
                  06 Watches
                </p>

                <h3 className="mt-2 text-3xl font-medium">Luxury</h3>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  Discover
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* <!-- Collection 03 --> */}
            <a
              href="#"
              className="group relative min-h-[460px] overflow-hidden rounded-3xl bg-[#e7e4de]"
            >
              <img
                src="./src/assets/images/products/14.jpg"
                alt="Sport Collection"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/55">
                  05 Watches
                </p>

                <h3 className="mt-2 text-3xl font-medium">Sport</h3>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  Discover
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* <!-- Collection 04 --> */}
            <a
              href="#"
              className="group relative min-h-[460px] overflow-hidden rounded-3xl bg-[#e7e4de]"
            >
              <img
                src="./src/assets/images/products/15.jpg"
                alt="Automatic Collection"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/55">
                  04 Watches
                </p>

                <h3 className="mt-2 text-3xl font-medium">Automatic</h3>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  Discover
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Minimal Collection Banner --> */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#e9e6df] md:grid-cols-2">
          {/* <!-- Text --> */}
          <div className="flex items-center p-8 sm:p-12 lg:p-16">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
                Made to last
              </p>

              <h2 className="mt-4 text-4xl font-medium tracking-tight">
                Designed beyond
                <br />
                the moment.
              </h2>

              <p className="mt-6 text-sm leading-7 text-black/50">
                Every AbdOlkarim Watch collection is built around a simple idea:
                create watches that remain beautiful long after trends have
                passed.
              </p>

              <a
                href="#"
                className="mt-7 inline-flex items-center gap-3 text-sm font-medium"
              >
                Our Story
                <span> → </span>
              </a>
            </div>
          </div>

          {/* <!-- Image --> */}
          <div className="min-h-[400px]">
            <img
              src="./src/assets/images/products/16.jpg"
              alt="AbdOlkarim Watch watch"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* <!-- Bottom CTA --> */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] bg-[#20201e] px-8 py-20 text-center text-white sm:px-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c7aa7b]">
            Your time
          </p>

          <h2 className="mx-auto mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl">
            Find the watch that feels like you.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/45">
            Explore every AbdOlkarim Watch collection and discover your next
            timeless piece.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-[#d6b98b]"
          >
            Shop All Watches
          </a>
        </div>
      </section>
    </>
  );
}
