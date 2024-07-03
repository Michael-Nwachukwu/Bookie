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
    title: "Parking Space",
    description: "Discussion",
  },
  {
    src: "/gallery/parkinglot.jpg",
    title: "Spacious Area",
    description: "Comfortable Setup",
  },
  {
    src: "/gallery/pexels-pixabay-236092.jpg",
    title: "Beautiful Decor",
    description: "Elegant Atmosphere",
  },
  {
    src: "/gallery/lockerroom.jpg",
    title: "Modern Facilities",
    description: "Fully Equipped",
  },
];

export function Features({font} : any) {
  return (
    <div className="space-y-14">

      <div className="flex justify-between items-start text-white py-16 px-10">
        <div className="w-2/4">
          <h2 className={`text-5xl tracking-wide ${font}`}>We are Steve Edge Design. A global brand & digital design agency.</h2>
        </div>
        <div className="w-2/4 flex justify-end it">
          <p className={`text-md ${font}`}>More on Steve Edge Design</p>
        </div>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml1">
          {features.map((feature, index) => (
            <CarouselItem key={index} className="pl-0 md:basis-1/2 lg:basis-1.5/3">
              <div className="h-[35em] relative">

                <img src={feature.src} className="w-full h-full object-cover feature-img" alt="" />

                <div className="absolute bg-black/5 top-0 left-0 w-full h-full p-14">
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

      <div className="px-20">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-400">Applicant Information</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
        </div>
        <div className="mt-6 border-t-[0.5px] border-gray-500">
          <dl className="divide-y-[0.5px] divide-gray-500 div">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Full name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">Margot Foster</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Application for</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">Backend Developer</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Email address</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Salary expectation</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">$120,000</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">About</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-400">Attachments</dt>
              <dd className="mt-2 text-sm text-gray-400 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-500 rounded-md border border-gray-200">
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                        <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                      </svg>
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>

    </div>
  )
}
