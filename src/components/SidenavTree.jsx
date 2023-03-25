import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const links = [
  {
    id: 1,
    title: "Dashboard",
    to: "/dashboard",
    children: [
      { id: "1A", title: "Overview", to: "/overview" },
      { id: "1B", title: "Summary", to: "/summary" },
    ],
  },
  {
    id: 2,
    title: "Products",
    to: "/products",
    children: [
      { id: "2A", title: "All Products", to: "/products" },
      { id: "2B", title: "Low Stock", to: "/products/low-stock" },
      { id: "2C", title: "New Products", to: "/products/new" },
    ],
  },
  {
    id: 3,
    title: "Customers",
    to: "/customers",
    children: [
      { id: "3A", title: "All Customers", to: "/products" },
      { id: "3B", title: "New Customers", to: "/products/new" },
    ],
  },
  {
    id: 4,
    title: "Accounts",
    to: "/accounts",
  },
];

function SidenavLink({ link, depth }) {
  const [isExpanded, setisExpanded] = useState(false);

  return (
    <div
      className={`bg-gray-800 ${
        depth > 0 ? "px-2" : "px-4"
      } py-2 rounded cursor-pointer`}
    >
      {link.children ? (
        <>
          <div
            onClick={() => setisExpanded(!isExpanded)}
            className="flex gap-1 items-center"
          >
            <IoIosArrowForward
              className={`${isExpanded && "rotate-90"} transition-transform`}
            />
            <span>{link.title}</span>{" "}
          </div>
          {isExpanded && (
            <div className="border-l border-gray-600 ml-2">
              {link.children.map((link) => (
                <div className="flex items-center" key={link.id}>
                  <div className="h-[2px] w-4 bg-gray-700" />
                  <SidenavLink key={link.id} link={link} depth={depth + 1} />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div>{link.title}</div>
      )}
    </div>
  );
}

export default function SidenavTree() {
  return (
    <div className="min-h-screen bg-gray-800 p-10 flex flex-col gap-5">
      <h1 className="tracking-widest">SIDENAV TREE</h1>

      <div className="flex-1 bg-gray-900 rounded-lg flex">
        <aside className="p-2 w-[200px] flex flex-col gap-1">
          {links.map((link) => (
            <SidenavLink key={link.id} link={link} depth={0} />
          ))}
        </aside>
        <main className="flex-1"></main>
      </div>
    </div>
  );
}
