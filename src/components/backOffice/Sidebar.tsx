"use client";
import {
  BagIcon,
  CatalogueIcon,
  CustomersIcon,
  DashboardIcon,
  DropDownIcon,
  FarmersIcon,
  OnlineStoresIcon,
  OrdersIcon,
  RetailIcon,
  SettingsIcon,
  StaffIcon,
} from "@/icons";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [openCatalogue, setOpenCatalogue] = useState(false);
  return (
    <aside className="w-64 h-[calc(100vh-64px)] flex flex-col bg-gray-800 text-gray-400">
      <Link
        href={"#"}
        className="relative px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200"
      >
        <span
          className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        ></span>
        <DashboardIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
        <span className="ml-4">Dashboard</span>
      </Link>
      <Link
        href={"#"}
        className="relative px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200"
        onClick={() => setOpenCatalogue(!openCatalogue)}
      >
        <span
          className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        ></span>
        <CatalogueIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
        <span className="mx-4">Catalogue</span>
        <DropDownIcon
          className={`w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 ${
            openCatalogue ? "rotate-90" : "rotate-0"
          }`}
        />
      </Link>
      <Link
        href={"#"}
        className="relative px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200"
      >
        <span
          className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        ></span>
        <CustomersIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
        <span className="mx-4">Customers</span>
      </Link>

      <Link
        href={"#"}
        className="relative px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200"
      >
        <span
          className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        ></span>
        <RetailIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
        <span className="mx-4">Markets</span>
      </Link>
      <Link
        href={"#"}
        className="relative px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200"
      >
        <span
          className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        ></span>
        <FarmersIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
        <span className="mx-4">Farmers</span>
      </Link>
      <Link
        href={"#"}
        className="relative px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200"
      >
        <span
          className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        ></span>
        <OrdersIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
        <span className="mx-4">Orders</span>
      </Link>
      <Link
        href={"#"}
        className="relative px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200"
      >
        <span
          className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        ></span>
        <StaffIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
        <span className="mx-4">Our Staff</span>
      </Link>
      <Link
        href={"#"}
        className="relative px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200"
      >
        <span
          className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        ></span>
        <SettingsIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
        <span className="mx-4">Settings</span>
      </Link>
      <Link
        href={"#"}
        className="relative px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200"
      >
        <span
          className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        ></span>
        <OnlineStoresIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
        <span className="mx-4">Online Stores</span>
      </Link>
    </aside>
  );
};

export default Sidebar;
