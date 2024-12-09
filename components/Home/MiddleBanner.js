import Image from "next/image";
import React from "react";

export default function MiddleBanner() {
  return (
    <div className="container mx-auto px-4   max-h-[460px]  overflow-hidden ">
      <Image
        src="/images/banner-2.png"
        alt="banner"
        width={1550}
        height={300}
      />
    </div>
  );
}
