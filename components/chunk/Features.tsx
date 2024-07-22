import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const features = [
  {
    src: "/gallery/pexels-quark-studio-1159039-2507016 (2).jpg",
    title: "clean up zone",
    description: "Restroom facilities",
  },
  {
    src: "/gallery/parkinglot.jpg",
    title: "Parking Space",
    description: "Comfortable Parking",
  },
  {
    src: "/gallery/pexels-pixabay-236092.jpg",
    title: "Beautiful Decor",
    description: "Elegant Lighting",
  },
  {
    src: "/gallery/lockerroom.jpg",
    title: "Modern Facilities",
    description: "Storage spaces",
  },
];

export function Features({font} : any) {
  return (
    <div className="space-y-14">

      <div className="flex flex-col sm:flex-row justify-between items-start text-white py-5 sm:py-16 px-4 sm:px-10 gap-5 sm:gap-0">
        <div className="sm:w-2/4">
          <h2 className={`text-4xl sm:text-5xl tracking-wide ${font}`}>Features of Our Premier Event Tent</h2>
        </div>
        <div className="sm:w-2/4 flex justify-end items-end">
          <p className={`text-md ${font}`}>Experience Excellence</p>
        </div>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml1">
          {features.map((feature, index) => (
            <CarouselItem key={index} className="pl-0 md:basis-1/2 lg:basis-1.5/3">
              <div className="h-[35em] relative">

                <img src={feature.src} className="w-full h-full object-cover feature-img" alt="" />

                <div className="absolute bg-black/5 top-0 left-0 w-full h-full p-7 sm:p-14">
                  <div className="flex flex-col justify-between items-start h-full text-white">
                    <div className="flex flex-col items-start justify-start uppercase gap-2">
                      <span className="text-xs">{feature.title}</span>
                      <h3 className={`text-5xl ${font}`}>{feature.description}</h3>
                    </div>
                    <button className="bg-white text-black px-5 py-1.5 shadow-sm rounded-3xl text-sm uppercase">Learn more</button>
                  </div>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="px-4 sm:px-20">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-400">Specifications, Facilities and Services</h3>
        </div>
        <div className="mt-6 border-t-[0.5px] border-gray-500">
          <dl className="divide-y-[0.5px] divide-gray-500 div">
            <div className="px-2 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Size</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">60 feet x 120 feet (7200 square feet)</dd>
            </div>
            <div className="px-2 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Capacity</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">Up to 300 guests</dd>
            </div>
            <div className="px-2 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Height</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">Peak height at 30 feet</dd>
            </div>
            <div className="px-2 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Accessibility</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">Wheelchair accessible, ADA-compliant</dd>
            </div>
            <div className="px-2 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Parking</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">On-site parking available for 100+ vehicles</dd>
            </div>
            <div className="px-2 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Restrooms</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">Modern, clean restroom facilities</dd>
            </div>

            <div className="px-2 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Security</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">On-site security personnel during events</dd>
            </div>

            <div className="px-2 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Power supply</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">Reliable power supply with backup generators</dd>
            </div>

            <div className="px-2 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Setup and Cleanup</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">Included in rental fee</dd>
            </div>
            
          </dl>
        </div>
      </div>

    </div>
  )
}
