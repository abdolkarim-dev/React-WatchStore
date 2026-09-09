import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-8">
        {/* <!-- Breadcrumb --> */}
        <div className="mb-12 flex items-center gap-2 text-xs text-black/40">
        <Link to="/" className="transition hover:text-black">
            Home
          </Link>

          <span>/</span>

          <span className="text-black"> About </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* <!-- Text --> */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
              The AbdOlkarim Watch Story
            </p>

            <h1 className="mt-5 text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Time should be
              <br />
              <span className="text-[#8b7355]">remembered.</span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-black/50">
              We believe a watch is more than something that tells time. It
              becomes part of your story, your moments, and the memories you
              carry with you.
            </p>

            <a
              href="#story"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#171717] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#8b7355]"
            >
              Discover our story
              <span>↓</span>
            </a>
          </div>

          {/* <!-- Image --> */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-[#e6e2da]">
              <img
                src="./src/assets/images/products/7.jpg"
                alt="AbdOlkarim Watch watch"
                className="h-[560px] w-full object-cover"
              />
            </div>

            {/* <!-- Floating detail --> */}
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-xl sm:-left-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                Est.
              </p>

              <p className="mt-1 text-2xl font-medium">2026</p>

              <p className="mt-1 text-xs text-black/40">Built around time</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Brand Statement --> */}
      <section id="story" className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
            What we believe
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            We don't make watches
            <br className="hidden sm:block" />
            for a moment. We make them
            <br className="hidden sm:block" />
            for a lifetime.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-black/50">
            In a world that moves faster every day, we choose to slow down.
            Every detail is considered, every material carefully selected, and
            every design created with longevity in mind.
          </p>
        </div>
      </section>

      {/* <!-- Story Section --> */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          {/* <!-- Image --> */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] bg-[#e8e5df]">
              <img
                src="./src/assets/images/products/8.jpg"
                alt="Watch craftsmanship"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>

          {/* <!-- Text --> */}
          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
              Our Philosophy
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
              Crafted with
              <br />
              intention.
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-8 text-black/50">
              <p>
                AbdOlkarim Watch began with a simple idea: create watches that
                feel just as relevant ten years from now as they do today.
              </p>

              <p>
                We focus on clean proportions, honest materials and details that
                reveal themselves slowly. Nothing is added without purpose.
              </p>

              <p>
                From the first sketch to the final timepiece, every decision is
                guided by one principle — make something worth keeping.
              </p>
            </div>

            <div className="mt-9 flex items-center gap-4">
              <div className="h-px w-12 bg-[#8b7355]"></div>

              <span className="text-xs uppercase tracking-[0.2em] text-black/40">
                Designed for the long run
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Values --> */}
      <section className="bg-[#20201e] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-14 max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c7aa7b]">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
              What defines AbdOlkarim Watch.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">
            {/* <!-- Value --> */}
            <div className="bg-[#20201e] p-8 sm:p-10">
              <span className="text-sm text-[#c7aa7b]"> 01 </span>

              <h3 className="mt-10 text-2xl font-medium">Craftsmanship</h3>

              <p className="mt-5 text-sm leading-7 text-white/45">
                Every detail matters. We believe quality can be seen, felt and
                appreciated over time.
              </p>
            </div>

            {/* <!-- Value --> */}
            <div className="bg-[#20201e] p-8 sm:p-10">
              <span className="text-sm text-[#c7aa7b]"> 02 </span>

              <h3 className="mt-10 text-2xl font-medium">Timelessness</h3>

              <p className="mt-5 text-sm leading-7 text-white/45">
                Trends come and go. Good design remains. Our watches are created
                to outlive seasons.
              </p>
            </div>

            {/* <!-- Value --> */}
            <div className="bg-[#20201e] p-8 sm:p-10">
              <span className="text-sm text-[#c7aa7b]"> 03 </span>

              <h3 className="mt-10 text-2xl font-medium">Integrity</h3>

              <p className="mt-5 text-sm leading-7 text-white/45">
                From the materials we choose to the service we provide, honesty
                is at the heart of everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Numbers --> */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid divide-y divide-black/10 border-y border-black/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-6 py-8 text-center">
            <p className="text-4xl font-medium tracking-tight">10+</p>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-black/40">
              Years of passion
            </p>
          </div>

          <div className="px-6 py-8 text-center">
            <p className="text-4xl font-medium tracking-tight">24</p>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-black/40">
              Unique timepieces
            </p>
          </div>

          <div className="px-6 py-8 text-center">
            <p className="text-4xl font-medium tracking-tight">100%</p>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-black/40">
              Attention to detail
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Final CTA --> */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#e8e4dc] px-8 py-20 text-center sm:px-16">
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
              Your story starts here
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
              Find your timeless piece.
            </h2>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-black/50">
              Explore our collection and discover a watch designed to become
              part of your story.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex rounded-full bg-[#171717] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#8b7355]"
            >
              Explore Watches
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
