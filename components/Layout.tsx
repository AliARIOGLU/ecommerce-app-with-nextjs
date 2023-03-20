import React, { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopFooter from "./TopFooter";

type ChildrenProps = {
  children: ReactElement;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <TopFooter />
      <Footer />
    </>
  );
};

export default Layout;
