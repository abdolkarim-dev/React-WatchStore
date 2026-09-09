import { Fragment } from "react/jsx-runtime";
import { products } from "../data/products";
function Home() {
  const productData = products;
  const productStyleCategory = productData.slice(0, 3);
  const productFeaturedCategory = productData.slice(10, 14);

  return (
    <Fragment>
      <section className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <div className="relative min-h-[600px] overflow-hidden rounded-[2rem] bg-[#dedbd4]">
          {/* <!-- Background --> */}
          <img
            src="/src/assets/images/header_site.png"
            alt="Premium watch"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* <!-- Overlay --> */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent"></div>

          {/* <!-- Content --> */}
          <div className="relative flex min-h-[600px] max-w-xl items-center px-8 py-16 sm:px-14 lg:px-20">
            <div className="text-white">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/70">
                The New Collection
              </p>

              <h1 className="text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Time,
                <br />
                beautifully
                <br />
                <span className="text-[#d6b98b]">crafted.</span>
              </h1>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/70">
                Discover our latest collection of premium watches, designed for
                those who appreciate timeless details.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-[#d6b98b]"
                >
                  Shop Collection
                </a>

                <a
                  href="#"
                  className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ================= FEATURES ================= --> */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* <div className="grid gap-8 border-y border-black/10 py-10 sm:grid-cols-3">
          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
            >
              ✓
            </div>

            <div>
              <h3 className="text-sm font-semibold">Authentic Products</h3>
              <p className="mt-1 text-xs text-black/50">100% genuine watches</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
            >
              ↗
            </div>

            <div>
              <h3 className="text-sm font-semibold">Free Shipping</h3>
              <p className="mt-1 text-xs text-black/50">On orders over $200</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
            >
              ♢
            </div>

            <div>
              <h3 className="text-sm font-semibold">Secure Payment</h3>
              <p className="mt-1 text-xs text-black/50">
                Safe & protected checkout
              </p>
            </div>
          </div>
        </div>   */}
      </section>

      {/* <!-- ================= CATEGORIES ================= --> */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8b7355]">
              Collections
            </p>

            <h2 className="mt-2 text-3xl font-medium tracking-tight">
              Find your style
            </h2>
          </div>

          <a
            href="#"
            className="hidden text-sm font-medium underline underline-offset-4 sm:block"
          >
            View all
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {/* <!-- Category --> */}
          {productStyleCategory.map((productStyle) => {
            return (
              <a
                href="#"
                className="group relative h-[420px] overflow-hidden rounded-3xl bg-[#e5e1da]"
              >
                <img
                  src={productStyle.image}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  alt="classNameic watches"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute bottom-7 left-7 text-white">
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    Collection
                  </p>
                  <h3 className="mt-1 text-2xl font-medium">
                    {productStyle.style}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* <!-- ================= PRODUCTS ================= --> */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#8b7355]">
                Our Selection
              </p>

              <h2 className="mt-2 text-3xl font-medium tracking-tight">
                Featured watches
              </h2>
            </div>

            <a
              href="#"
              className="hidden text-sm font-medium underline underline-offset-4 sm:block"
            >
              View all products
            </a>
          </div>

          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Product --> */}
            {productFeaturedCategory.map((features) => {
              return (
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f4f3f0]">
                    {features.isNew && (
                      <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider">
                        New
                      </span>
                    )}

                    {features.isFeatured && (
                      <button className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white opacity-0 shadow-sm transition group-hover:opacity-100">
                        ♡
                      </button>
                    )}

                    <img
                      src={features.image}
                      alt="AbdOlkarim Watch classNameic"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-black/40">AbdOlkarim Watch</p>
                    <h3 className="mt-1 font-medium">
                      {" "}
                      {features.style} {features.specifications.caseColor}
                    </h3>
                    <p className="mt-2 text-sm">${features.price}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* <!-- ================= PROMO ================= --> */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#20201e] px-8 py-20 text-center text-white sm:px-16">
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c7aa7b]">
              Limited Offer
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
              Timeless style.
              <br />
              Exceptional value.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/50">
              Get up to 30% off selected watches from our latest collection.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-[#d6b98b]"
            >
              Shop the offer
            </a>
          </div>
        </div>
      </section>

      {/* <!-- ================= NEWSLETTER ================= --> */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#8b7355]">
          Stay in the loop
        </p>

        <h2 className="mt-3 text-3xl font-medium tracking-tight">
          Get the latest from AbdOlkarim Watch
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-black/50">
          Subscribe to receive new collection announcements, exclusive offers
          and more.
        </p>

        <form className="mx-auto mt-7 flex max-w-md gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="min-w-0 flex-1 rounded-full border border-black/10 bg-white px-5 py-3 text-sm outline-none transition focus:border-black/30"
          />

          <button
            type="submit"
            className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#8b7355]"
          >
            Subscribe
          </button>
        </form>
      </section>
    </Fragment>
  );
}

export default Home;
