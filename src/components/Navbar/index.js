import React, { useState } from "react";
import { Button, Drawer } from "antd";
import FeatherIcon from "../FeatherIcon";
import Link from "next/link";
import routes from "../../utils/routes";

const NavbarItems = [
  { label: "Movies" },
  { label: "Sports" },
  { label: "News" },
];

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between min-h-[80px] px-8 md:px-10 lg:px-12 shadow-md">
      <Drawer
        title={
          <Link href={routes.HOME}>
            <img
              src="/assets/logo_black.svg"
              className="cursor-pointer max-w-[80px]"
            />
          </Link>
        }
        closable
        placement="left"
        onClose={() => setIsOpen(false)}
        visible={isOpen}
        width="300px"
        className="lg:hidden"
      >
        {NavbarItems.map((item) => (
          <div
            key={item.label}
            className="px-4 py-4 cursor-pointer border-b-2 hover:text-themeColor hover:border-themeLightColor"
          >
            {item.label}
          </div>
        ))}
      </Drawer>
      <div className="flex items-center">
        <FeatherIcon
          size={20}
          icon="menu"
          className="mr-6 cursor-pointer lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <Link href={routes.HOME}>
          <img
            src="/assets/logo_black.svg"
            className="cursor-pointer max-w-[80px] md:max-w-[80px] lg:max-w-[100px] mr-4 lg:mr-8 pb-2"
          />
        </Link>
        {NavbarItems.map((item) => (
          <div
            key={item.label}
            className="trans3 hidden lg:block font-semibold px-8 py-2 rounded-full cursor-pointer border-b-2 border-white hover:text-themeColor hover:border-themeLightColor"
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="flex items-end">
        <div className="flex items-center border-b-2 mr-0 lg:mr-4 px-2">
          <input
            className="outline-none px-0 lg:px-2 py-1"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FeatherIcon icon="search" className="text-gray-400 cursor-pointer" />
        </div>
        <Button type="ghost" className="mx-4 !hidden md:!block">
          Login
        </Button>
        <Button
          type="primary"
          className="!hidden md:!block !bg-themeColor !border-themeColor hover:bg-themeColor hover:border-red-600 active:bg-themeColor"
        >
          Signup, It's free
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
