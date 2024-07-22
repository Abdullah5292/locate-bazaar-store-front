import { Suspense } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { listRegions } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";
import logo from "@modules/layout/templates/nav/TLB_Logo.svg";
import Image from "next/image";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions);

  return (
    <div className="sticky inset-x-0 top-0 z-50 bg-white-0 group">

      <div className="container px-4 mx-auto">

        <div className="flex items-center justify-between ">

          <div className="flex items-center space-x-8 mt-23">
            <a href="#" className="font-semibold ml-80 text-16">All Stores</a>
            <a href="#" className="ml-24 font-semibold text-16">About</a>
          </div>
          <Image className="items-center " src={logo} alt="logo" height={80.51} />
          <div className="flex items-center space-x-8">
            <a href="#" className="text-black">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
            <a href="#" className="text-black">
              <FontAwesomeIcon icon={faUser} />            </a>
            <a href="#" className="text-black">
              <FontAwesomeIcon icon={faCartShopping} />            </a>
          </div>



        </div>
        <div className="flex mb-22 space-x-26 ">
          <a href="#" className="font-semibold hover:underline ml-240 text-16">New Arrivals</a>
          <a href="#" className="font-semibold hover:underline text-16">Best-Sellers</a>
          <a href="#" className="font-semibold hover:underline text-16">Clothing</a>
          <a href="#" className="font-semibold hover:underline text-16">Health & Beauty</a>
          <a href="#" className="font-semibold hover:underline text-16">Home Décor</a>
          <a href="#" className="font-semibold hover:underline text-16">Arts & Crafts</a>
          <a href="#" className="font-semibold hover:underline text-16">Gifts & Specialty Items</a>
          <a href="#" className="font-semibold hover:underline text-16">Shoes & Bags</a>
          <a href="#" className="text-red-500 hover:underline">Sale</a>
        </div>
      </div>
    </div>
  );
};
