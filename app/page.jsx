import Image from "next/image";
import Link from "next/link";
import Search from "./components/searchbox";

export async function getSurats() {
  const res = await fetch("https://equran.id/api/surat");
  return res.json();
}

export default async function Home() {
  const data = getSurats();
  const [surats] = await Promise.all([data]);

  return (
    <div>
      <div className="md:px-14">
        <img
          src="https://source.unsplash.com/random/1000x500/?ngaji"
          alt=""
          className="w-full md:w-[80%] mx-auto border-8 border-white"
        />
        <div className="w-full md:w-[80%] mx-auto mt-4">
          <div className="flex justify-between text-white mt-9 items-center">
            <div className="titlebar">
              <h2 className="text-2xl font-bold underline underline-offset-8">
                Surat
              </h2>
            </div>
            <div className="action flex items-center">
              <Search />
            </div>
          </div>
          <div className="flex flex-wrap w-full mt-3 text-white">
            {surats.map((surat, i) => (
              <div className="w-1/2 md:w-1/4 p-2" key={i}>
                <Link href={"/surat/" + surat.nomor}>
                  <div className="shadow-lg shadow-slate-900 group hover:shadow-slate-200 p-2 rounded text-center">
                    <i className="bx bx-book text-5xl text-primary group-hover:scale-105 duration-300 transition group-hover:rotate-45"></i>
                    <h3 className="text-lg text-slate-300 font-bold mt-2">
                      {surat.nama_latin}
                    </h3>
                    <div className="w-full py-3 px-2  flex items-center justify-center">
                      <h2 className="text-sm italic flex items-center text-slate-400 text-center">
                        Baca{" "}
                        <i class="bx bxs-right-arrow-alt text-lg group-hover:ml-2 duration-300"></i>
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
