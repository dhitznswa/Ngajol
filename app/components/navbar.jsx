"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuactive, setMenuactive] = useState(false);
  const [navopen, setNavopen] = useState(false);

  function handleClick() {
    setMenuactive(!menuactive);
  }

  return (
    <>
      <header className="bg-body w-full text-white fixed shadow-md flex items-center  top-0 z-[999]">
        <div className="container mx-auto px-5 md:px-14">
          <div className="flex items-center justify-between relative py-5">
            <div className="brand">
              <h1 className="text-2xl font-bold flex items-center">
                <i className="bx bx-book-open text-primary text-4xl mr-2"></i>{" "}
                <span className="my-auto block">Ngajol</span>
              </h1>
            </div>
            <div className="flex items-center">
              <button
                className={
                  menuactive
                    ? "block absolute right-4 menu-active lg:hidden"
                    : "block absolute right-4 lg:hidden"
                }
                onClick={handleClick}
              >
                <span className="menu-line origin-top-left"></span>
                <span className="menu-line"></span>
                <span className="menu-line origin-bottom-left"></span>
              </button>

              <nav
                id="nav-content"
                className={menuactive ? "nav-content" : "nav-content hidden"}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Link
                      href="/"
                      className="lg:text-white nav-active text-body py-2 mx-3 flex group-hover:text-primary"
                    >
                      Surat
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/"
                      className="lg:text-white  text-body py-2 mx-3 flex group-hover:text-primary"
                    >
                      Tentang
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/"
                      className="lg:text-white  text-body py-2 mx-3 flex group-hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
