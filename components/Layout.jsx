import React from "react";
import { Header } from "./";
import { Footer } from "./";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
