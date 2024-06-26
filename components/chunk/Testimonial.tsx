"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

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
            <div className="grid grid-cols-3 gap-y-4 gap-x-2">
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
                                <CarouselItem key={index} className="rounded-2xl">
                                    <img src={testimony} className="object-cover h-full rounded-2xl" alt="" />
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
                                <CarouselItem key={index} className="rounded-2xl">
                                    <img src={testimony} className="object-cover h-full rounded-2xl" alt="" />
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
                                <CarouselItem key={index} className="rounded-2xl">
                                    <img src={testimony} className="object-cover h-full rounded-2xl" alt="" />
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
                                <CarouselItem key={index} className="rounded-2xl">
                                    <img src={testimony} className="object-cover h-full rounded-2xl" alt="" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
            
        </>
    )
}
