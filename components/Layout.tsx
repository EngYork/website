import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
