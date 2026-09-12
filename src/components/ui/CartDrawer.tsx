import { useCart } from "../../context/CartProvider";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { valueCart, setValueCart } = useCart();

  // Remove item from cart
  const removeItem = (id: number) => {
    setValueCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = valueCart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#faf9f7] shadow-2xl transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b7355]">
              Your Selection
            </p>

            <div className="mt-1 flex items-center gap-2">
              <h2 className="text-xl font-medium">Shopping Bag</h2>

              {valueCart.length > 0 && (
                <span className="text-xs text-black/40">
                  ({valueCart.length})
                </span>
              )}
            </div>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/60 transition hover:bg-[#171717] hover:text-white"
          >
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
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </button>
        </div>

        {/* ================= EMPTY CART ================= */}
        {valueCart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            {/* Shopping Bag Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f2f1ee]">
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

            <h3 className="mt-5 text-lg font-medium">Your bag is empty</h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-black/40">
              Discover our carefully selected timepieces and find something that
              suits your style.
            </p>

            <button
              onClick={onClose}
              className="mt-7 rounded-full bg-[#171717] px-7 py-3 text-xs font-medium text-white transition hover:bg-[#8b7355]"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* ================= CART ITEMS ================= */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <div className="space-y-5">
                {valueCart.map((item) => (
                  <article
                    key={item.id}
                    className="flex gap-4 border-b border-black/10 pb-5"
                  >
                    {/* Product Image */}
                    <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-[#f2f1ee]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[9px] uppercase tracking-[0.15em] text-black/40">
                            {item.brand}
                          </p>

                          <h3 className="mt-1 truncate text-sm font-medium">
                            {item.name}
                          </h3>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="shrink-0 text-black/30 transition hover:text-red-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Product Details */}
                      <div className="mt-auto flex items-end justify-between">
                        <div className="flex gap-2 text-[9px] text-black/35">
                          <span>{item.specifications.caseMaterial}</span>

                          <span>•</span>

                          <span>{item.specifications.caseSize}</span>
                        </div>

                        <p className="text-sm font-medium">${item.price}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* ================= FOOTER ================= */}
            <div className="border-t border-black/10 bg-white px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-black/50">Subtotal</span>

                <span className="text-lg font-medium">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <p className="mt-2 text-[10px] leading-5 text-black/35">
                Shipping and taxes calculated at checkout.
              </p>

              {/* Checkout */}
              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#8b7355]">
                Checkout
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
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </button>

              {/* Continue Shopping */}
              <button
                onClick={onClose}
                className="mt-3 w-full py-2 text-xs text-black/50 transition hover:text-black"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
