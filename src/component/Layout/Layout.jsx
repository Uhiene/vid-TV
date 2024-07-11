// Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col bg-[#121926] min-h-screen w-screen">
      <Navbar />
      <main className="flex-grow mt-16 p-4 sm:p-8 max-w-7xl sm:mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
