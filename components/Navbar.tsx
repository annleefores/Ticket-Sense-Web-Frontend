import React from "react";
import Link from "next/link";
import logo from "../assets/image/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-5 ml-5">
        <div>
          <Link href="/">
            <a className="flex flex-row items-center">
              <Image src={logo} alt="Ticketsense" width={36} height={36} />
              <p className="ml-1 md:mb-1 text-lg md:text-2xl font-semibold">
                ticket sense
              </p>
            </a>
          </Link>
        </div>
        <div className="flex flex-row uppercase mr-5 md:mr-8">
          <p className="p-2 md:p-4 cursor-pointer text-sm md:text-lg font-semibold">
            DOCS
          </p>
          <p className="p-2 md:p-4 cursor-pointer text-sm md:text-lg font-semibold">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
