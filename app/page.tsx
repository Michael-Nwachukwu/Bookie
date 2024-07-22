import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { ArrowDownIcon, Bars2Icon } from '@heroicons/react/24/outline';
import { About } from '../components/chunk/About';
import { Features } from "@/components/chunk/Features";
import GridSmallBackgroundDemo  from "@/components/ui/gridSmallBackground";
import Availability from "@/components/chunk/Availability";
import { Cta } from "@/components/chunk/Cta";
import { Testimonial } from "@/components/chunk/Testimonial";
import { FaqAccordion } from "@/components/chunk/Faq";
import Footer from "@/components/chunk/Footer";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import HeroText from "@/components/chunk/HeroText";

const Playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {

  return (
    <main>
      <section className="w-screen h-screen">
        <video id="background-video" autoPlay loop muted playsInline preload="none">
          <source src="/LandingVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="h-full w-full bg-black bg-opacity-30 px-4 sm:px-12">

          <div className="flex flex-col justify-between items-start h-full">
            <header className="flex justify-between items-center py-2 sm:py-4 w-full text-xs text-white">
              <Image 
                src="/logoCut.png"
                alt="Bookie Logo"
                width={120}
                height={24}
                priority
              />

              <nav>
                <Bars2Icon className="sm:hidden size-7 text-white" />
                <ul className="hidden sm:inline-flex items-center gap-3">
                  <li className="cursor-pointer px-5 py-1 hover:bg-slate-50/20 hover:text-slate-900 rounded-3xl">Home</li>
                  <li className="cursor-pointer px-5 py-1 hover:bg-slate-50/20 hover:text-slate-900 rounded-3xl">About</li>
                  <li className="cursor-pointer px-5 py-1 hover:bg-slate-50/20 hover:text-slate-900 rounded-3xl">Pricing</li>
                  <li className="cursor-pointer px-5 py-1 hover:bg-slate-50/20 hover:text-slate-900 rounded-3xl">Contact</li>
                </ul>
              </nav>

              <div className="sm:inline-flex items-center gap-4 text-sm hidden">
                <button className="px-4 py-1 rounded-2xl border bg-transparent">Meet</button>
                <button className="px-4 py-1 rounded-2xl bg-indigo-800">Book now</button>
              </div>

            </header>

            <div className="pb-32 sm:pb-24 flex justify-between w-full items-end">

              <div className="flex flex-col items-start gap-6">
                
                
                <HeroText />


                <div className="w-full max-w-md relative flex items-center">
                  <Input type="email" placeholder="Enter Your Email" className="bg-transparent py-4 pl-4 placeholder:text-white/50 rounded-3xl h-12 flex-grow focus:ring-indigo-800 focus:border-white text-white" />
                  <Button type="submit" className="ml-1 sm:ml-3 bg-indigo-800 text-white rounded-3xl h-12 flex items-center justify-center">Make reservation</Button>
                </div>

                  {/* <div className="w-full max-w-md relative pl-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-transparent py-4 placeholder:text-white rounded-3xl h-12 pr-16" // Added padding-right to avoid overlap
                    />
                    <Button
                      type="submit"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-indigo-800 text-white rounded-3xl h-9 flex items-center justify-center"
                    >
                      Subscribe
                    </Button>
                  </div> */} 


              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-200/15 hidden sm:flex justify-center items-center hover:bg-black hover:scale-125 duration-300">
                <ArrowDownIcon className="size-5 text-white" />
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="bg-black min-h-screen space-y-28 pb-16">

        <About />
        
        <Features font={Playfair.className} />
        
      </section>
      <section>
        <GridSmallBackgroundDemo Component={Availability} />
      </section>

      <section className="bg-black pb-20 sm:px-48 space-y-32">
        <Testimonial />
        <FaqAccordion />
      </section>

      <section className="bg-black">
        <Cta />
      </section>

      <Footer />

    </main>
  );
}
