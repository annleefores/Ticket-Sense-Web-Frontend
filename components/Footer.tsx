import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BrandGithub } from "tabler-icons-react";
import logo_text_white from "../assets/image/logo_text_white.png";

const Footer = () => {
  return (
    <div className="border-t border-neutral-700 mt-12 w-full h-full">
      <div className="my-8">
        <div className="flex flex-col w-full md:flex-row justify-between items-center my-8 md:my-4 gap-3 px-8">
          <div className="w-[200px] flex justify-center md:justify-start">
            <Link href="/">
              <a>
                <div className="h-auto w-[130px]">
                  <Image
                    src={logo_text_white}
                    alt="Ticketsense"
                    layout="responsive"
                    priority
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="text-sm text-neutral-400 md:text-base w-[200px] text-center">
            <p>
              Made by{" "}
              <span>
                <Link href="http://annleefores.com/">
                  <a>annleefores</a>
                </Link>
              </span>
            </p>
          </div>
          <div className="w-[200px] text-neutral-400 flex justify-center md:justify-end text-sm md:text-base">
            <Link href="https://github.com/annleefores/Ticket-Sense-Web">
              <a>
                <p>
                  <BrandGithub />
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
