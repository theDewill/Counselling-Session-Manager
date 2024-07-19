"use client";
// export default function Navbar() {
//   return (
//     <nav
//       style={{ backdropFilter: "blur(25px)" }}
//       className="z-100 w-full flex justify-center items-center mt-4 fixed bg-[#cfcfcf85] p-4 mx-[30px] rounded-2xl "
//     >
//       <ul className="flex gap-4">
//         <li>Home</li>
//         <li>Bookings</li>
//         <li>Marketplace</li>
//         <li>Our Events</li>
//         <li>About</li>
//       </ul>
//     </nav>
//   );
// }

import React from "react";
import Link from "next/link";

export default function Navbar({ activeTab }) {
  // Example tabs
  const tabs = ["Home", "Bookings", "Marketplace", "Our Events", "About"];

  return (
    <nav
      style={{ backdropFilter: "blur(25px)" }}
      className="z-100 self-center max-w-[800px] flex justify-center items-center mt-4 fixed bg-[#cfcfcf85] px-[80px] py-2 mx-[30px] rounded-2xl"
    >
      <ul className="flex gap-[50px] justify-center items-center">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              activeTab === tab
                ? "bg-white text-black rounded-md px-3 py-2"
                : "text-black"
            }`}
            onClick={() => {
              /* Function to change the active tab */
            }}
          >
            <Link
              className={activeTab === tab ? "active" : ""}
              href={tab == "Home" ? `/` : `/${tab}`}
            >
              {tab}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
