import React from "react";

export default function Header() {
  return (
    <div className="bg-gray-700/50 px-10 py-2 flex justify-between fixed top-0 w-full z-50 backdrop-blur-sm">
      <h1 className="font-semibold tracking-widest">LETS GET AMAZED</h1>
      <a
        href="https://github.com/rifatptk/asmrz"
        target="_blank"
        rel="noreferrer"
        className="text-sm font-semibold"
      >
        CODE
      </a>
    </div>
  );
}
