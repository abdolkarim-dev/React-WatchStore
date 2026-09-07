function Footer() {
  return (    
     <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div
          className="grid gap-12 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-4"
        >
          {/* <!-- Brand --> */}
          <div className="md:col-span-1 text-center">
            <a href="#" className="text-2xl font-semibold tracking-tight">
              AbdOlkarim Watch<span className="text-[#8b7355]">.</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-black/45">
              Premium watches designed with timeless aesthetics and
              uncompromising attention to detail.
            </p>
          </div>

          {/* <!-- Shop --> */}
          <div>
            <h3 className="text-sm font-semibold">Shop</h3>

            <ul className="mt-5 space-y-3 text-sm text-black/50">
              <li><a href="#" className="hover:text-black">All Watches</a></li>
              <li><a href="#" className="hover:text-black">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black">Best Sellers</a></li>
              <li><a href="#" className="hover:text-black">Collections</a></li>
            </ul>
          </div>
{/* 
          <!-- Company --> */}
          <div>
            <h3 className="text-sm font-semibold">Company</h3>

            <ul className="mt-5 space-y-3 text-sm text-black/50">
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">Shipping</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
            </ul>
          </div>

          {/* <!-- Social --> */}
          <div className="">
            <h3 className="text-sm text-center sm:text-left font-semibold">
              Follow us
            </h3>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xs transition hover:bg-black hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xs transition hover:bg-black hover:text-white"
              >
                FB
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xs transition hover:bg-black hover:text-white"
              >
                X
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-14 flex flex-col items-center sm:items-start justify-between gap-3 border-t border-black/10 pt-6 text-xs text-black/40 sm:flex-row"
        >
          <p>© 2026 AbdOlkarim Watch. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
