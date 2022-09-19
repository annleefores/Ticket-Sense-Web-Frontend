import React from "react";
import Link from "next/link";
import logo from "../assets/image/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-4 ml-5">
        <div>
          <Link href="/">
            <a className="flex flex-row items-center">
              <Image
                src={logo}
                alt="Ticketsense"
                width={36}
                height={36}
                priority
              />
              <p className="ml-1 md:mb-1 text-lg md:text-2xl font-semibold">
                ticket sense
              </p>
            </a>
          </Link>
        </div>
        <div className="flex uppercase mr-5 md:mr-8">
          <Link href="/docs">
            <a>
              <p className="p-2 md:p-4 cursor-pointer text-sm md:text-lg font-semibold">
                DOCS
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
