import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import products from '../../data/data';


export default function page() {
  return (
    <>
    <Navbar />
    <main className="p-2 bg-gray-300 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-white font-bold text-center w-full mx-auto bg-blue-800 border-slate-200 border-2 rounded-lg">List:</h1>
        <ul>
        {
          products.map((product, i) => {
            return <Card key={i} id={product.id} title={product.name} paragraph={product.description} />
          })
        }
        </ul>
      </div>
    </main>
    </>
  );
}
