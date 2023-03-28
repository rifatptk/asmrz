import React, { useState } from "react";
import useDataFetcher from "../hooks/useFetcher";

export default function Pagination1() {
  const [page, setPage] = useState(1);

  const { isLoading, data, error } = useDataFetcher(
    `https://dummyjson.com/products?limit=10&skip=${
      page * 10 - 10
    }&select=title,price,thumbnail`
  );

  return (
    <div className="bg-gray-800 p-10">
      <h2 className="uppercase text-xl tracking-widest">Pagination one</h2>
      <div className="mt-10">
        {isLoading && <p>Loading...</p>}

        {data && data.products && (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {data.products.map((prod) => (
                <div key={prod.id} className="flex flex-col gap-2 bg-gray-700 ">
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    className="w-full h-[240px] object-cover"
                  />
                  <div className="flex justify-between p-5">
                    <h3>{prod.title}</h3>
                    <strong>${prod.price}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex gap-2 items-stretch pt-5 w-fit mx-auto">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page < 2}
                className="p-2 border rounded-lg border-gray-600 disabled:opacity-20"
              >
                Prev
              </button>

              {[...Array(data.total / data.limit)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  disabled={page === i + 1}
                  className={`w-10 border rounded-full border-gray-600 hover:bg-gray-700 disabled:bg-blue-500`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === data.total / data.limit}
                className="p-2 border rounded-lg border-gray-600 disabled:opacity-20"
              >
                Next
              </button>
            </div>
          </>
        )}

        {error && <p className="text-red-500">Something went wrong!</p>}
      </div>
    </div>
  );
}
