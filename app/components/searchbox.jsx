"use client";
import Fuse from "fuse.js";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Search() {
  const [listsurat, setListsurat] = useState([]);
  const [hasilsurat, setHasilsurat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openmodal, setOpenmodal] = useState(false);

  useEffect(() => {
    fetch("https://equran.id/api/surat")
      .then((res) => res.json())
      .then((list) => {
        setListsurat(list);
        setLoading(false);
      });
  }, []);

  async function search(q) {
    console.log(hasilsurat);
    if (q.length > 0) {
      const options = {
        includeScore: true,
        keys: ["nama", "nama_latin"],
      };
      const fuse = new Fuse(listsurat, options);
      const result = fuse.search(q);
      console.log(result);
      if (result.length > 0) {
        const data = [];
        for (var i = 0; i <= 5; i++) {
          if (result != undefined) {
            data.push(result[i]);
          } else {
            continue;
          }
        }

        setHasilsurat(data);
      } else {
        setHasilsurat(null);
      }
    }
  }

  function handlerClick() {
    setOpenmodal(!openmodal);
  }

  return (
    <div>
      <button
        className="py-1 px-3 border border-primary rounded text-sm text-primary flex items-center"
        onClick={handlerClick}
      >
        <i className="bx bx-search mr-2"></i> Cari Surat
      </button>
      <div
        className={`w-full h-screen fixed duration-700 z-[99999] bg-slate-600 top-0 left-0 bg-opacity-80  items-center justify-center ${
          openmodal ? "flex" : "hidden"
        }`}
      >
        <div className="w-[90%] md:w-[50%] bg-body p-4 rounded-md relative">
          <button
            className="h-6 w-6 rounded-full text-black absolute -top-2 -right-2 flex items-center justify-center bg-white"
            onClick={handlerClick}
          >
            <i className="bx bx-plus text-xl rotate-45"></i>
          </button>
          <div className="my-3">
            <input
              type="text"
              className={`w-full px-3 py-3 text-base bg-body outline-none border border-primary focus:shadow-sm focus:shadow-primary rounded-md ${
                loading ? "hidden" : ""
              }`}
              onChange={(e) => {
                search(e.target.value);
              }}
              placeholder="Cari surat disini .."
            />
          </div>
          <div className="result-box mt-3">
            {hasilsurat != null ? (
              hasilsurat.map((res, i) => (
                <div className="mb-1" key={i}>
                  {res != undefined ? (
                    <Link href={`/surat/${res.item.nomor}`}>
                      <div className="w-full py-1 px-3 rounded border border-slate-400 hover:border-primary">
                        <h2 className="text-sm font-semibold">
                          {res.item.nama_latin}
                        </h2>
                      </div>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              ))
            ) : (
              <div className="w-full py-1 px-3 rounded border border-slate-400">
                <h2 className="text-sm font-semibold">Surat tidak ditemukan</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
