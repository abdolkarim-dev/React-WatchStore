import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function Checkout() {
  const { valueCart, setValueCart } = useCart();
  const navigate = useNavigate();

  const subtotal = valueCart.reduce((total, item) => total + item.price, 0);

  const shipping = subtotal > 0 ? 15 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handlePurchase = () => {
    // API for Pay
    alert("Purchase completed successfully!");

    setValueCart([]);
    navigate("/");
  };

  if (valueCart.length === 0) {
    return (
      <main className="min-h-[70vh] bg-[#faf9f7] px-6 py-16">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f2f1ee]">
            {/* Shopping Bag SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 8h12l1 12H5L6 8Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8a3 3 0 0 1 6 0"
              />
            </svg>
          </div>

          <h1 className="mt-6 text-2xl font-medium">Your bag is empty</h1>

          <p className="mt-3 text-sm leading-6 text-black/40">
            There are no items to checkout. Discover our collection and find
            your perfect timepiece.
          </p>

          <Link
            to="/watches"
            className="mt-7 rounded-full bg-[#171717] px-8 py-3.5 text-xs font-medium text-white transition hover:bg-[#8b7355]"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* ================= HEADER ================= */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          {/* Breadcrumb */}
          <Link
            to="/watches"
            className="inline-flex items-center gap-2 text-xs text-black/40 transition hover:text-black"
          >
            {/* Arrow Left */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5M11 18l-6-6 6-6"
              />
            </svg>
            Back to Shopping
          </Link>

          <div className="mt-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b7355]">
              Final Step
            </p>

            <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
              Checkout
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-black/45">
              Review your selected timepieces and complete your purchase.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CHECKOUT ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr]">
          {/* ================= PRODUCTS ================= */}
          <div>
            <div className="flex items-center justify-between border-b border-black/10 pb-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                  Your Selection
                </p>

                <h2 className="mt-1 text-xl font-medium">Order Summary</h2>
              </div>

              <span className="text-xs text-black/40">
                {valueCart.length} {valueCart.length === 1 ? "Item" : "Items"}
              </span>
            </div>

            <div className="divide-y divide-black/10">
              {valueCart.map((item) => (
                <article key={item.id} className="flex gap-5 py-6">
                  {/* Image */}
                  <div className="h-32 w-28 shrink-0 overflow-hidden rounded-2xl bg-[#f2f1ee] sm:h-36 sm:w-32">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-black/40">
                        {item.brand}
                      </p>

                      <h3 className="mt-1 text-sm font-medium sm:text-base">
                        {item.name}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-black/40">
                        <span>{item.specifications.caseMaterial}</span>

                        <span>•</span>

                        <span>{item.specifications.caseSize}</span>

                        <span>•</span>

                        <span>{item.specifications.movement}</span>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-black/30">
                        Price
                      </span>

                      <span className="text-sm font-medium">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ================= INVOICE ================= */}
          <aside className="h-fit lg:sticky lg:top-8">
            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#8b7355]">
                    Your Invoice
                  </p>

                  <h2 className="mt-1 text-xl font-medium">Order Details</h2>
                </div>

                {/* Receipt Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f1ee]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8h6M9 12h6M9 16h3"
                    />
                  </svg>
                </div>
              </div>

              {/* Price Details */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-black/50">Subtotal</span>

                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-black/50">Shipping</span>

                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-black/50">Tax</span>

                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-black/10" />

              {/* Total */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-black/35">
                    Total
                  </p>

                  <p className="mt-1 text-xl font-medium">Amount Due</p>
                </div>

                <span className="text-2xl font-medium">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Purchase Button */}
              <button
                onClick={handlePurchase}
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#171717] py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#8b7355]"
              >
                Complete Purchase
                {/* Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </button>

              <p className="mt-4 text-center text-[9px] leading-5 text-black/30">
                By completing your purchase, you agree to our terms and
                conditions.
              </p>
            </div>

            {/* Secure Checkout */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-black/35">
              {/* Lock */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect width="14" height="11" x="5" y="10" rx="2" />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10V7a4 4 0 0 1 8 0v3"
                />
              </svg>
              Secure checkout
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
