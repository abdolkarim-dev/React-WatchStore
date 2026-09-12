import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useEffect, useState } from "react";
import type { Product } from "../data/products";
function Watches() {
  const productsData = products;
  const [currentPage, setCurrentPage] = useState(1);
  const [getCategory, setGetCategory] = useState("All");

  // for Pagination
  const productPrePage = 8;

  const indexOfLastProduct = currentPage * productPrePage;
  const indexOfFitstProduct = indexOfLastProduct - productPrePage;

  const totalPages = Math.ceil(productsData.length / productPrePage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  //get category
  const categoryItems: Product[] = [];
  productsData.forEach((product) => {
    const exists = categoryItems.some(
      (item) => item.category === product.category,
    );
    if (!exists) {
      categoryItems.push(product);
    }
  });

  // filter category
  const filteredProducts: Product[] =
    getCategory === "All"
      ? productsData
      : productsData.filter((item) => item.category === getCategory);

  let currentProduct = filteredProducts.slice(
    indexOfFitstProduct,
    indexOfLastProduct,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [getCategory]);

  return (
    <>
      {/* <!-- Page Header --> */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-12 lg:px-8">
        {/* <!-- Breadcrumb --> */}
        <div className="mb-10 flex items-center gap-2 text-xs text-black/40">
          <Link to="/" className="transition hover:text-black">
            Home
          </Link>
          <span>/</span>

          <span className="text-black"> Watches </span>
        </div>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
              Our Collection
            </p>

            <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
              All Watches
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-black/50">
              Explore our complete collection of carefully selected timepieces,
              from timeless classNameics to contemporary designs.
            </p>
          </div>

          {/* <!-- Product Count --> */}
          <p className="text-sm text-black/40">
            {productsData.length} Products
          </p>
        </div>
      </section>
      {/* <!-- Filters --> */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          {/* <!-- Categories --> */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setGetCategory("All")}
              className="whitespace-nowrap rounded-full bg-[#171717] px-5 py-2.5 text-xs font-medium text-white"
            >
              All
            </button>
            {categoryItems.map((items) => {
              return (
                <button
                  onClick={() => setGetCategory(items.category)}
                  key={items.id}
                  className="whitespace-nowrap rounded-full border border-black/10 px-5 py-2.5 text-xs font-medium text-black/60 transition hover:border-black/30 hover:text-black"
                >
                  {items.category}
                </button>
              );
            })}
          </div>

          {/* <!-- Sort --> */}
          <button className="flex items-center gap-2 self-start rounded-full border border-black/10 px-5 py-2.5 text-xs font-medium transition hover:border-black/30 md:self-auto">
            Sort by
            <span className="text-black/40"> ↕ </span>
          </button>
        </div>
      </section>
      {/* <!-- Products --> */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {/* <!-- Product 01 --> */}
          {currentProduct.map((product) => {
            return (
              <article key={product.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f2f1ee]">
                  {product.isNew && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider sm:left-4 sm:top-4">
                      New
                    </span>
                  )}

                  {product.isFeatured && (
                    <button className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm opacity-100 shadow-sm transition sm:right-4 sm:top-4">
                      ♡
                    </button>
                  )}
                  <img
                    src={product.image}
                    alt="classNameic Silver"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* <!-- Quick Add --> */}
                  <button className="absolute bottom-4 left-4 right-4 hidden rounded-full bg-white py-3 text-xs font-medium shadow-lg transition hover:bg-[#171717] hover:text-white sm:block sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    Quick Add
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-black/40">
                    {product.brand}
                  </p>

                  <h2 className="mt-1 text-sm font-medium">{product.name}</h2>

                  <div className="mt-2 flex gap-3 text-[10px] text-black/40">
                    <span>{product.specifications.caseMaterial}</span>
                    <span>•</span>
                    <span>{product.specifications.caseSize}</span>
                    <span>•</span>
                    <span>{product.specifications.movement}</span>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-medium">${product.price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* <!-- Pagination --> */}
        {filteredProducts.length > 8 && (
          <div className="mt-16 flex items-center justify-center gap-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-xs transition ${
                currentPage === 1
                  ? "cursor-not-allowed text-black/20"
                  : "text-black/50 hover:bg-white hover:text-black"
              }`}
            >
              ←
            </button>

            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xs transition ${
                  currentPage === number
                    ? "bg-[#171717] text-white"
                    : "text-black/50 hover:bg-white hover:text-black"
                }`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-xs transition ${
                currentPage === totalPages
                  ? "cursor-not-allowed text-black/20"
                  : "text-black/50 hover:bg-white hover:text-black"
              }`}
            >
              →
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Watches;
