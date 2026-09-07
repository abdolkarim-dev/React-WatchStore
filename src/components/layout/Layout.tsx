import { useState, useEffect, type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
type Layout = {
  children: ReactNode;
};
function Layout({ children }: Layout) {
  return (
    <>
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
