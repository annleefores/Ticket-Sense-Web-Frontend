import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutElem = ({
  image,
  content,
  addcontent1,
  addcontent2,
}: {
  image: any;
  content: string;
  addcontent1?: { link: string; content: string };
  addcontent2?: { link: string; content: string };
}) => {
  return (
    <>
      <div className="flex flex-col text-neutral-400 justify-center mb-12 gap-8 max-w-[350px] rounded-xl  ">
        <div className=" w-60 h-auto mx-auto mt-4 ">
          <Image
            src={image}
            layout="responsive"
            alt="booking image"
            className="object-cover h-48 w-48"
          />
        </div>
        <div className="p-3 px-6 text-center">
          <p>
            {content}{" "}
            {addcontent1?.content ? (
              <>
                {" "}
                <span className="font-semibold ">
                  <Link href={addcontent1.link}>
                    <a target="_blank">{addcontent1.content}</a>
                  </Link>
                </span>{" "}
              </>
            ) : null}
            {addcontent2?.content ? (
              <>
                &{" "}
                <span className="font-semibold">
                  <Link href={addcontent2.link}>
                    <a target="_blank">{addcontent2.content}</a>
                  </Link>
                </span>
              </>
            ) : null}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutElem;
