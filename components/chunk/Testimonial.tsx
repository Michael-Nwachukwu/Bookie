"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Playfair_Display } from "next/font/google";

const Playfair = Playfair_Display({ subsets: ["latin"] });

export function Testimonial() {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, })
    )

    const pluginTwo = React.useRef(
        Autoplay({ delay: 3000, })
    )

    const pluginThree = React.useRef(
        Autoplay({ delay: 4000, })
    )

    const pluginFour = React.useRef(
        Autoplay({ delay: 5000, })
    )

    const testimonyOne = [
        "/gallery/pexels-bertellifotografia-2608517.jpg",
        "/gallery/2148825061.jpg",
        "/gallery/pexels-thatguycraig000-2306281.jpg",
        "/gallery/pexels-pixabay-265947.jpg"
    ]

    const testimonyTwo = [
        "/gallery/pexels-pixabay-265947.jpg",
        "/gallery/pexels-pixabay-50675.jpg",
        "/gallery/2148825061.jpg",
        "/gallery/2149485991.jpg",
    ]

    const testimonyThree = [
        "/gallery/2148825061.jpg",
        "/gallery/pexels-bertellifotografia-2608517.jpg",
        "/gallery/pexels-pixabay-265947.jpg",
        "/gallery/2149485991.jpg",
    ]

    const testimonyFour = [
        "/gallery/pexels-pixabay-265947.jpg",
        "/gallery/2149485991.jpg",
        "/gallery/2148825061.jpg",
    ]


    return (
        <>
            <h1 className={`${Playfair.className} text-4xl sm:text-5xl font-medium uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-16 sm:pt-0`}>Recent events at our venue</h1>

            <div className="grid grid-cols-3 gap-1 sm:gap-y-4 sm:gap-x-2">
                <div className="col-span-2">
                    <Carousel
                        opts={{
                            loop: true,
                        }}
                        orientation="vertical"
                        plugins={[plugin.current]}
                        className="w-full"
                    >
                        <CarouselContent className="h-[17em]">
                            {testimonyOne.map((testimony, index) => (
                                <CarouselItem key={index} className="">
                                    <img src={testimony} className="object-cover h-full " alt="" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="">
                    <Carousel
                        opts={{
                            loop: true,
                        }}
                        plugins={[pluginTwo.current]}
                        className="w-full"
                    >
                        <CarouselContent className="h-64">
                            {testimonyTwo.map((testimony, index) => (
                                <CarouselItem key={index} className="">
                                    <img src={testimony} className="object-cover h-full " alt="" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="">
                    <Carousel
                        opts={{
                            loop: true,
                        }}
                        plugins={[pluginThree.current]}
                        className="w-full"
                    >
                        <CarouselContent className="h-64">
                            {testimonyThree.map((testimony, index) => (
                                <CarouselItem key={index} className="">
                                    <img src={testimony} className="object-cover h-full " alt="" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="col-span-2">
                    <Carousel
                        opts={{
                            loop: true,
                        }}
                        orientation="vertical"
                        plugins={[pluginFour.current]}
                        className="w-full"
                    >
                        <CarouselContent className="h-[17em]">
                            {testimonyFour.map((testimony, index) => (
                                <CarouselItem key={index} className="">
                                    <img src={testimony} className="object-cover h-full " alt="" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
            
        </>
    )
}
