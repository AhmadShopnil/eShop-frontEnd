import Image from "next/image";
import React from "react";

export default function NewArrival() {
  return (
    <div className="container mx-auto px-4 ">
      {/* heading */}
      <div className="  mb-4">
        <div className="flex gap-2 items-center mb-2 ">
          <div className="bg-red-500 w-3 h-7 rounded"></div>

          <h2 className="text-red-500  font-semibold text-xs">Featured</h2>
        </div>

        <h3 className="text-2xl font-bold ">New Arrival</h3>
      </div>

      {/* gallery */}
      <div className="grid grid-cols-2 gap-6 w-full h-[450px] ">
        {/* left */}
        <div className=" relative group overflow-hidden rounded-lg ">
          <div className="absolute inset-0 bg-black">
            <Image
              src="/images/gallery/5.jpg"
              alt="PlayStation 5"
              fill
              className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-semibold mb-2">PlayStation 5</h3>
            <p className="text-gray-300 mb-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <div>
              <button className="text-white hover:underline inline-block">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        {/* right */}

        <div className="flex flex-col gap-6 ">
          {/* top */}
          <div className=" relative group overflow-hidden rounded-lg h-1/2">
            <div className="absolute inset-0 bg-black">
              <Image
                src="/images/gallery/6.jpg"
                alt="Women's Collections"
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Womens Collections</h3>
              <p className="text-gray-300 mb-4">
                Featured woman collections that give you another vibe.
              </p>
              <div>
                <button className="text-white hover:underline inline-block">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="flex gap-6 h-1/2">
            {/* img-1 */}
            <div className=" relative group overflow-hidden rounded-lg w-1/2">
              <div className="absolute inset-0 bg-black">
                <Image
                  src="/images/gallery/7.jpg"
                  alt="Speakers"
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Speakers</h3>
                <p className="text-gray-300 mb-4">Amazon wireless speakers</p>
                <div>
                  <button className="text-white hover:underline inline-block">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            {/* img-2 */}
            <div className=" relative group overflow-hidden rounded-lg w-1/2">
              <div className="absolute inset-0 bg-black">
                <Image
                  src="/images/gallery/8.jpg"
                  alt="Perfume"
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Perfume</h3>
                <p className="text-gray-300 mb-4">GUCCI INTENSE OUD EDP</p>
                <div>
                  <button className="text-white hover:underline inline-block">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
