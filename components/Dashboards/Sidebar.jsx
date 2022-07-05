import React from "react";
import Link from "next/link";

const LinkList = [
  {
    id: 0,
    title: "Dashboard",
    link: "/doctor/dashboard",
  },

  {
    id: 1,
    title: "Profile",
    link: "doctor/profile",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-pup text-white px-5 hidden">
      <ul>
        {LinkList.map((link) => (
          <li key={link.id}>
            <Link href={link.link}>
              <a>{link.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
