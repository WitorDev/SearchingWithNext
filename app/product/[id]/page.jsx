import React from "react";
import data from "../../../data/data";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default async function Page({ params }) {
  const { id } = await params;
  const productId = parseInt(id); // Convert the id to an integer
  const _product = data.find((product) => product.id === productId);

  return (
    <main>
      <Navbar />

      <div className="bg-slate-300 p-2  flex flex-col gap-10 justify-between items-center">
        <div className="max-w-screen-xl w-full">
          {_product ? (
            <div className="flex flex-col gap-2">
              <div className="font-bold text-xl text-black bg-white p-2 rounded-lg ">
                {_product.name}
              </div>
              <div className="text-black bg-white p-2 rounded-lg ">
                {_product.brand}
              </div>
              <div className="text-black bg-white p-2 rounded-lg ">
                {_product.description}
              </div>
            </div>
          ) : (
            <div className="text-black bg-white p-2 rounded-lg ">
              Nothing found...
            </div>
          )}
        </div>
        <div className="max-w-screen-xl flex justify-end w-full">
          <Link href="/list">
            <button className="p-4 rounded-lg bg-blue-800 text-white hover:bg-slate-700 font-bold text-xl hover:text-slate-200">
              Back
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
