import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

function Maintenance() {
  return (
    <div className="h-screen w-screen bg-gray-950 flex flex-col justify-center items-center">
      <Image src={"/logo-horizontal.svg"} alt="" width={200} height={50} />
      <h1 className="text-3xl font-bold text-gray-50 mt-8">
        Website under maintenance
      </h1>
      <p className="text-gray-50 mt-2 mb-8">
        Join us soon to discover the project
      </p>
      <div>
        <Button variant={"outline"} size={"lg"} asChild>
          <Link href={"https://www.renaudtixier.com"}>
            Visit RT&apos;s website
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Maintenance;
