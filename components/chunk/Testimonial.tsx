"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Testimonial() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            orientation="vertical"
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
        <CarouselContent className="-mt-1 h-[200px]">
            {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pt-1">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex items-center justify-center p-6">
                                <span className="text-3xl font-semibold">{index + 1}</span>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        </Carousel>
    )
}
