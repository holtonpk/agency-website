"use client";

import Link from "next/link";
import {ArrowRight} from "lucide-react";

export const ContactUs = () => {
  return (
    <div className="container relative">
      <Link
        href="/contact"
        className="relative w-[90%] mx-auto rounded-full h-[400px] flex items-center justify-center text-8xl font1 mb-20 font-bold hover:bg-[#181818] bg-black/10 blurBack hover:text-background transition-colors duration-500 group"
      >
        Let&apos;s get Started
        <ArrowRight className="h-16 w-16 ml-4 group-hover:translate-x-[50px] transition-transform duration-500" />
      </Link>
    </div>
  );
};
