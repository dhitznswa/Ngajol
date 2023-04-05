import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="w-full py-5 flex justify-center items-center mt-24
      "
      >
        <h2 className="text-sm text-slate-400 text-center">
          Copyright <i className="bx bx-copyright"></i>{" "}
          {new Date().getFullYear()}
          <br className="md:hidden" /> Created by{" "}
          <a
            href="https://dhitznswa.github.io"
            target="_blank"
            className="font-semibold text-primary"
          >
            Adhitya Nasuwa
          </a>
          <br />
          Powered by{" "}
          <a
            href="https://equran.id/"
            target="_blank"
            className="font-semibold"
          >
            EQuran.id
          </a>
        </h2>
      </div>
    </>
  );
}
