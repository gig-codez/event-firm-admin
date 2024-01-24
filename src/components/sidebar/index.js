"use client";

import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandProducthunt } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import { LiaPlaceOfWorshipSolid } from "react-icons/lia";
import { MdInventory2 } from "react-icons/md";
import { PiUsersFourLight } from "react-icons/pi";
import { useContext } from "react";
import { GlobalContext } from "@/context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <LuLayoutDashboard size={25} />,
  },
  {
    id: "inventory-hire",
    label: "Inventory Hire",
    path: "/products",
    icon: <MdInventory2 size={25}/>,
  },
  {
    id: "providers",
    label: "Providers",
    path: "/visitors",
    icon:<FaServicestack size={25} />,
  },  {
    id: "venues",
    label: "Venues",
    path: "/visitors",
    icon: <LiaPlaceOfWorshipSolid size={25} />,
  },  {
    id: "reviews",
    label: "Reviews",
    path: "/visitors",
    icon: <MdOutlineReviews size={25} />,
  },
];

export default function Sidebar() {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  const { status } = useSession();

  const pathName = usePathname();
  const router = useRouter();

  const handlenavigate = (getMenuItem) => {
    if (status === "unauthenticated") {
      router.push("/unauth-page");
      return;
    }
    router.push(getMenuItem.path);
  };

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static lg:translate-x-0
    ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href={"/"} className="text-[40px] text-white">
          EFA
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  <label
                    onClick={() => handlenavigate(menuItem)}
                    className={`group relative cursor-pointer flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark 
                             ${pathName.includes(menuItem.id) && "bg-graydark"}
                            `}
                  >
                    {menuItem.icon}
                    {menuItem.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
