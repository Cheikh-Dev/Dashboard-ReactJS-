import React from "react";
import {
  HiOutlineAdjustments,
  HiOutlineLibrary,
  HiOutlineClipboardList,
  HiOutlineLightningBolt,
  HiOutlinePresentationChartLine,
  HiOutlinePhotograph,
  HiOutlineUser,
} from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";

export default function SideDemo() {
  const menuItems = [
    { icon: HiOutlineAdjustments, label: "Settings" },
    { icon: HiOutlineLibrary, label: "Library" },
    { icon: HiOutlineClipboardList, label: "Tasks" },
    { icon: HiOutlineLightningBolt, label: "Energy" },
    { icon: HiOutlinePresentationChartLine, label: "Reports" },
    { icon: HiOutlinePhotograph, label: "Gallery" },
    { icon: HiOutlineUser, label: "Profile" },
  ];

  return (
    <div className="w-full h-full bg-gray-200 flex justify-center items-center sm:block">
      <div className="w-full h-full bg-gray-200 flex flex-col items-center space-y-10 sm:space-y-0 sm:space-x-0 sm:flex-row sm:flex-col">
        <ul className="flex flex-row justify-between sm:flex-col sm:space-y-6 bg-gray-200 w-full sm:w-auto h-full sm:h-auto p-3">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="py-2 px-5 flex items-center cursor-pointer hover:bg-gray-800"
            >
              <item.icon className="h-6 w-6 text-gray-500 transition-all hover:text-blue-600" />
              <span className="ml-2 text-gray-500 hidden lg:inline">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
