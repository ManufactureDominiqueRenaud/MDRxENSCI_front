"use client";

import { StrapiComponentImage, StrapiComponentLink } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export type StrapiFooterData = {
  data: {
    data: {
      id: number;
      attributes: {
        title: string;
        copyright: string;
        logo: {
          data: {
            attributes: StrapiComponentImage;
          };
        };
        footerLinks: StrapiComponentLink[];
        legalLinks: StrapiComponentLink[];
      };
    };
  };
};

function Footer(footerData: StrapiFooterData) {
  const { locale } = useParams();

  return (
    <footer className="p-[20px] lg:p-[40px]">
      <div className="bg-[#253031] text-[#CDDBDE] lg:flex items-center gap-16 p-[40px] md:px-[70px] py-16 rounded-3xl">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <Image
            src={footerData.data.data.attributes.logo.data.attributes.url || ""}
            alt={
              footerData.data.data.attributes.logo.data.attributes
                .alternativeText || ""
            }
            width={
              footerData.data.data.attributes.logo.data.attributes.width || 100
            }
            height={
              footerData.data.data.attributes.logo.data.attributes.height || 100
            }
            className="w-48"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div>
            <p className="text-sm text-[#CDDBDE]/50">
              {footerData.data.data.attributes.title || "null"}
            </p>
            <nav>
              <ul className="flex items-center gap-4">
                {footerData.data.data.attributes.footerLinks.map((link) => (
                  <li key={link.id || Math.random()}>
                    <Link
                      href={link.url || ""}
                      title={link.title || ""}
                      target={link.externalLink ? "_blank" : "_self"}
                      className="text-[#CDDBDE] text-sm hover:underline transition">
                      {link.label || "null"}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="lg:flex items-center gap-4 mt-8">
            <nav>
              <ul className="lg:flex items-center gap-4 mb-4 lg:mb-0">
                {footerData.data.data.attributes.legalLinks.map((link) => (
                  <li key={link.id || Math.random()}>
                    <Link
                      href={`/${locale}/${link.url}` || ""}
                      title={link.title || ""}
                      target={link.externalLink ? "_blank" : "_self"}
                      className="text-[#CDDBDE]/50 text-sm hover:underline transition">
                      {link.label || "null"}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <span className="text-sm text-[#CDDBDE]/50">
              {footerData.data.data.attributes.copyright || "null"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
