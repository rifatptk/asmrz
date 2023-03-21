/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { ImSvg } from "react-icons/im";
import { BsFileEarmarkCode } from "react-icons/bs";
import { BsFiletypePdf } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";

const files = {
  name: "ASMRZ",
  children: [
    {
      id: "asdga",
      name: "public",
      children: [
        {
          id: "as4dga",
          name: "images",
          children: [{ id: "asd65ga", name: "vite.svg" }],
        },
        {
          id: "a3sdga",
          name: "files",
          children: [{ id: "as23dga", name: "file.pdf" }],
        },
      ],
    },
    {
      id: "aesdga",
      name: "src",
      children: [
        {
          id: "646",
          name: "components",
          children: [
            { id: "as643dga", name: "fileTree.jsx" },
            { id: "87", name: "header.jsx" },
            { id: "09", name: "hoverBanner.jsx" },
          ],
        },
        {
          id: "3567",
          name: "layouts",
          children: [{ id: "5675", name: "root.jsx" }],
        },
        { id: "64357", name: "index.css" },
        { id: "3534", name: "main.js" },
      ],
    },
    { id: 6425245, name: "index.html" },
    { id: 6422245, name: "package.json" },
  ],
};

const fileIcons = {
  html: <FaHtml5 color="#DB4437" />,
  css: <FaCss3 color="#4285F4" />,
  svg: <ImSvg color="#F4B400" />,
  jsx: <FaReact color="#4285F4" />,
  pdf: <BsFiletypePdf color="#DB4437" />,
  js: <SiJavascript color="#F4B400" />,
  json: <FaNodeJs color="	#0F9D58" />,
  unknown: <BsFileEarmarkCode />,
};

function FileElement({ el, depth }) {
  const [isExpanded, setisExpanded] = useState(false);
  return (
    <div
      style={{ paddingLeft: depth * 10 }}
      className="text-sm cursor-pointer my-1"
    >
      {el.children ? (
        <div>
          <div
            onClick={() => setisExpanded(!isExpanded)}
            className="flex gap-2 items-center"
          >
            {isExpanded ? (
              <FaFolderOpen color="#F4B400" />
            ) : (
              <FaFolder color="#F4B400" />
            )}{" "}
            <span>{el.name}</span>
          </div>
          {isExpanded &&
            el.children.map((el) => (
              <FileElement key={el.id} el={el} depth={depth + 1} />
            ))}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {/* <span className="w-2 border-b border-gray-700"></span> */}
          <span>{fileIcons[el.name.split(".")[1]] || fileIcons.unknown}</span>
          <span>{el.name}</span>
        </div>
      )}
    </div>
  );
}

export default function FileTree() {
  return (
    <div className="min-h-screen bg-gray-800 p-10 flex flex-col">
      <h1 className="tracking-widest text-2xl">FILE TREE</h1>

      <div className="p-5 bg-gray-900 rounded-lg mt-5 flex-1">
        {files.children.map((el) => (
          <FileElement el={el} depth={0} key={el.id} />
        ))}
      </div>
    </div>
  );
}
