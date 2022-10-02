import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="grow shrink-0 basis-auto bg-slate-200 dark:bg-gray-800">{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
