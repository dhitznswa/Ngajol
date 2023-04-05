"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Detail Surat - Ngaji Online",
  description: "Web Application for ngaji",
};
export default function DetailSurat({ params }) {
  const [surat, setSurat] = useState([]);
  const [ayat, setAyat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notfound, setNotfound] = useState(false);

  useEffect(() => {
    fetchData(params.params[0]);
  }, []);

  const fetchData = (id) => {
    fetch(`https://equran.id/api/surat/${id}`)
      .then((response) => response.json())
      .then((result) => {
        if (result != null || result != undefined) {
          setSurat(result);
          setAyat(result.ayat);
          setLoading(false);
        } else {
          setLoading(false);
          setNotfound(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return (
      <h1 className="text-center text-2xl text-slate-400">Memuat surat ...</h1>
    );
  }

  if (notfound) {
    return (
      <h1 className="text-center text-2xl text-slate-400">
        Surat tidak ditemukan !!
      </h1>
    );
  }

  return (
    <>
      <Link
        className="text-sm font-bold mb-4 flex items-center text-primary"
        href={"/"}
      >
        <i className="bx bx-arrow-back text-lg mr-2"></i>
        Kembali{" "}
      </Link>
      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/3 p-3 mb-3 ">
          <div className="w-full rounded px-3 py-5 text-center shadow-md shadow-slate-900 mb-3">
            <h3 className="mb-3">
              <i className="bx bx-book-open text-6xl text-primary"></i>
            </h3>
            <h2 className="text-white text-2xl font-bold underline underline-offset-8">
              {surat.nama} ({surat.nama_latin})
            </h2>
            <p className="text-sm text-white font-semibold uppercase">
              {surat.tempat_turun} • {surat.arti} • {surat.jumlah_ayat} Ayat
            </p>
          </div>
          <div className="w-full rounded px-3 py-5 text-center shadow-md shadow-slate-900 mb-3">
            <audio
              src={surat.audio}
              controls
              className="w-full bg-body h-[30px]"
            ></audio>
          </div>
          <div className="w-full rounded px-3 py-5 shadow-md shadow-slate-900">
            <p className="text-sm text-slate-300">{surat.deskripsi}</p>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-3 relative">
          {ayat.map((ayat, i) => (
            <div
              className="w-full rounded px-3 py-5 text-white shadow-md shadow-slate-900 mb-3"
              key={i}
            >
              <h1 className="text-right text-3xl font-semibold mb-5">
                {ayat.ar}
              </h1>
              <h3 className="text-sm font-semibol">{ayat.tr}</h3>
              <hr />
              <h3 className="text-sm text-slate-500">{ayat.idn}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
