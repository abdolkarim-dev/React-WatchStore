import React, { useState } from "react";
import routes from "../../Routes";
import { useLocation } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import CartDrawer from "../ui/CartDrawer";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const location = useLocation();
  const { valueCart } = useCart();
  return (
    <>
      <header
        id="headerMenu"
        className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f7f5] md:bg-[#f7f7f5]/50 backdrop-blur-xl"
      >
        <div className="relative mx-auto flex-row-reverse flex md:flex-row h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="#"
            className="text-2xl font-semibold tracking-tight md:hidden"
          >
            <span className="text-[#8b7355]"></span>
          </a>
          {/* Logo */}
          <a href="#" className="text-2xl font-semibold tracking-tight">
            AbdOlkarim Watch<span className="text-[#8b7355]"></span>
          </a>
          {/* Navigation Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {routes.map((nav) => {
              const isActive = location.pathname === nav.path;
              return (
                <a
                  key={nav.name}
                  href={nav.path}
                  className={`text-sm font-medium transition ${isActive ? "hover:text-[#8b7355]" : "text-[#8b7355]"} `}
                >
                  {nav.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu */}
          <nav
            id="mobileMenuNav"
            className={`absolute left-0 top-20 z-50 flex h-[calc(100vh-5rem)] w-[78vw] max-w-sm flex-col justify-between overflow-hidden rounded-r-3xl border-r border-black/5 bg-[#f7f7f5] p-6 transition-transform duration-500 ease-out backdrop-blur-xl md:hidden ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Top */}
            <div>
              <div className="mb-10 flex items-center justify-between">
                <span className="text-xs text-black/30"> Menu </span>
              </div>

              <div className="space-y-2">
                {routes.map((nav) => {
                  const isActive = location.pathname === nav.path;
                  return (
                    <a
                      key={nav.name}
                      href={nav.path}
                      className={`group flex items-center justify-between rounded-2xl px-5 py-4 transition 
                  
                  ${isActive ? "bg-white shadow-sm  hover:bg-[#171717] hover:text-white" : "hover:bg-white hover:shadow-sm"}
                  `}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium">
                          {" "}
                          {nav.name}{" "}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Bottom */}
            <div>
              <div className="mb-5 h-px bg-black/10"></div>

              <a
                href="#"
                className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 transition hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eeeae3]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="8" r="3.5" />
                    <path
                      strokeLinecap="round"
                      d="M5 21c.7-4 3-6 7-6s6.3 2 7 6"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium">My Account</p>
                  <p className="mt-0.5 text-[11px] text-black/40">
                    Sign in or create an account
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="mt-2 flex items-center gap-4 rounded-2xl px-5 py-3.5 transition hover:bg-white"
              >
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 1.9-1.4L22 7H6"
                    />
                    <circle cx="10" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                  </svg>
                  <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#171717] text-[8px] text-white">
                    2
                  </span>
                </div>
                <span className="text-sm text-black/60"> Shopping Cart </span>
                <span className="ml-auto text-xs text-black/30"> 2 items </span>
              </a>

              <p className="mt-6 text-center text-[9px] uppercase tracking-[0.3em] text-black/25">
                AbdOlkarim Watch — TIMELESS BY DESIGN
              </p>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>

            {/* Search */}
            <button className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
            </button>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative hidden md:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 1.9-1.4L22 7H6"
                />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#171717] text-[9px] text-white">
                {valueCart.length}
              </span>
            </button>

            {/* Account */}
            <button className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path strokeLinecap="round" d="M5 21c.7-4 3-6 7-6s6.3 2 7 6" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default Header;
