import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

export const links = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Reports",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Reports 3",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Message 1",
        path: "/messages/message1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Message 2",
        path: "/messages/message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
const sidebarExpandedWidth = 200;

export default function Sidenav3() {
  const [isSidebarExpanded, setisSidebarExpanded] = useState(false);

  return (
    <div className="bg-gray-800 p-10">
      <h1 className="tracking-widest mb-5">SIDENAV THREE</h1>

      <div className="bg-gray-900 rounded-lg overflow-hidden">
        {/* topbar */}
        <div className="bg-gray-500 px-4 py-2 flex items-center gap-2 shadow-xl">
          <button
            onClick={() => setisSidebarExpanded(!isSidebarExpanded)}
            className="p-2 bg-gray-800 w-fit rounded-full hover:bg-gray-800/80 active:bg-gray-900"
            title={isSidebarExpanded ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarExpanded ? <IoIcons.IoMdClose /> : <FiMenu />}
          </button>
          <span className="font-semibold tracking-widest">Topbar</span>
        </div>
        {/* sidebar & content */}
        <div className="flex">
          <aside
            style={{
              width: isSidebarExpanded ? sidebarExpandedWidth : "fit-content",
            }}
            className={`${
              isSidebarExpanded ? `w-[${sidebarExpandedWidth}px] px-2` : "w-0"
            } py-2 overflow-hidden bg-gray-700 transition-all`}
          >
            <div className="flex flex-col gap-1 divide-y divide-gray-600/50">
              {links.map((link) => (
                <NavItem
                  key={link.path}
                  {...link}
                  isSidebarExpanded={isSidebarExpanded}
                />
              ))}
            </div>
          </aside>

          <main className="flex-1 p-5">Content goes here</main>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, path, title, subNav, isSidebarExpanded }) {
  const [isExpanded, setisExpanded] = useState(false);
  return subNav ? (
    <div className="px-4 py-1 cursor-pointer">
      <div
        className="flex justify-between items-center gap-2"
        onClick={() => setisExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          {isSidebarExpanded && <span>{title}</span>}
        </div>
        <div>
          <IoIcons.IoIosArrowForward
            className={`${isExpanded && "rotate-90"} transition-transform`}
          />
        </div>
      </div>
      {isExpanded &&
        subNav.map((link) => (
          <NavItem
            isSidebarExpanded={isSidebarExpanded}
            key={link.path}
            {...link}
          />
        ))}
    </div>
  ) : (
    <div className="flex items-center gap-2 px-4 py-1 cursor-pointer">
      <span>{icon}</span>
      {isSidebarExpanded && <span>{title}</span>}
    </div>
  );
}
