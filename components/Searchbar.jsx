"use client";
import Link from "@/node_modules/next/link";
import React, { useState } from "react";
import products from "../data/data";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  function search(e) {
    const inputQuery = e.target.value;
    setQuery(inputQuery);
    
    let filteredQuery = inputQuery.toLowerCase();
    let results = products.filter((product) =>
    product.name.toLowerCase().includes(filteredQuery)
    );
    
    setSearchResult(results);
  }

  return (
    <>
      <div className="border-2 border-blue-600 rounded-lg p-2">
        <input
          onChange={(e) => search(e)}
          value={query}
          className="focus:outline-none"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div>
        {query != "" && (
        searchResult.length > 0 ? (
          <ul 
          className="p-2 overflow-y-scroll max-h-40 border-2 border-blue-500 mt-1">
            {searchResult.map((product, i) => (
              <li key={i}>
                <ProductResult product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="border-2 border-blue-300 rounded-lg p-2 mt-2">
            Nothing found...
          </div>
        ))}
      </div>
    </>
  );
}

export function ProductResult({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
    <div className="border-2 border-blue-300 rounded-lg p-2">
      {product.name}
    </div></Link>
  );
}
