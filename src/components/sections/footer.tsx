import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="p-[20px] lg:p-[40px]">
      <div className="bg-[#253031] text-[#CDDBDE] lg:flex items-center gap-16 p-[40px] md:px-[70px] py-16 rounded-3xl">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <Image
            src={"/logo-horizontal.svg"}
            alt="logo"
            width={100}
            height={100}
            className="w-48"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div>
            <p className="text-sm text-[#CDDBDE]/50">
              Manufacture Dominique Renaud
            </p>
            <nav>
              <ul className="flex items-center gap-4">
                <li>
                  <Link
                    href={"https://www.instagram.com/dominique.renaud/"}
                    target="_blank"
                    title="Accédez à notre Instagram"
                    className="text-[#CDDBDE] text-sm hover:underline transition">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href={"mailto:press@dominiquerenaud.ch"}
                    target="_blank"
                    title="Contactez notre service de presse"
                    className="text-[#CDDBDE] text-sm hover:underline transition">
                    Presse
                  </Link>
                </li>
                <li>
                  <Link
                    href={"mailto:info@dominiquerenaud.ch"}
                    target="_blank"
                    title="Contactez nous"
                    className="text-[#CDDBDE] text-sm hover:underline transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:flex items-center gap-4 mt-8">
            <nav>
              <ul className="lg:flex items-center gap-4 mb-4 lg:mb-0">
                <li>
                  <Link
                    href={"/legal"}
                    title="Mentions Légales"
                    className="text-[#CDDBDE]/50 text-sm hover:underline transition">
                    Mentions Légales
                  </Link>
                </li>
              </ul>
            </nav>
            <span className="text-sm text-[#CDDBDE]/50">
              © 2025 — Maison Dominique Renaud, ENSCI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
