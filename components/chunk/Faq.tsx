import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Playfair_Display } from "next/font/google";

const Playfair = Playfair_Display({ subsets: ["latin"] });
  
export function FaqAccordion () {

    return (
        <div className="space-y-12 px-2 sm:px-0">
            <h1 className={`${Playfair.className} text-4xl sm:text-5xl font-medium uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500`}>Nice to knows</h1>
            <Accordion type="single" collapsible className="w-full text-white">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
  