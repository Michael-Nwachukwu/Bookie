import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { About } from '../components/chunk/About';
import { Features } from "@/components/chunk/Features";
import GridSmallBackgroundDemo  from "@/components/ui/gridSmallBackground";
import Availability from "@/components/chunk/Availability";
import Testimonial from "@/components/chunk/Testimonial";

const Playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="w-full h-screen">
        <video id="background-video" autoPlay loop muted playsInline preload="none">
          <source src="/LandingVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="h-full w-full bg-black bg-opacity-30 px-12">

          <div className="flex flex-col justify-between items-start h-full">
            <header className="flex justify-between items-center py-4 w-full text-xs text-white">
              <Image 
                src="/logoCut.png"
                alt="Bookie Logo"
                width={120}
                height={24}
                priority
              />
              <nav>
                <ul className="inline-flex items-center gap-3">
                  <li className="cursor-pointer px-5 py-1 hover:bg-slate-50/20 hover:text-slate-900 rounded-3xl">Home</li>
                  <li className="cursor-pointer px-5 py-1 hover:bg-slate-50/20 hover:text-slate-900 rounded-3xl">About</li>
                  <li className="cursor-pointer px-5 py-1 hover:bg-slate-50/20 hover:text-slate-900 rounded-3xl">Pricing</li>
                  <li className="cursor-pointer px-5 py-1 hover:bg-slate-50/20 hover:text-slate-900 rounded-3xl">Contact</li>
                </ul>
              </nav>
              <div className="inline-flex items-center gap-4 text-sm">
                <button className="px-4 py-1 rounded-2xl border bg-transparent">Meet</button>
                <button className="px-4 py-1 rounded-2xl bg-black">Book now</button>
              </div>
            </header>

            <div className="pb-24 flex justify-between w-full items-end">
              <h1 className={`${Playfair.className} text-7xl text-white tracking-wide font-semibol`}>
                Making <br />
                Businesses Grow.
              </h1>

              <div className="w-10 h-10 rounded-full bg-slate-50/15 flex justify-center items-center hover:bg-black hover:scale-125 duration-300">
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

      <section className="bg-black">
        <Testimonial />
      </section>
    </main>
  );
}
