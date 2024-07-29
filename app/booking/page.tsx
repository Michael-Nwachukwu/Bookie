"use client"

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const formSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string().datetime(),
    eventDate: z.date({
        required_error: "A date of event is required.",
    }),
    firstname: z.string().min(3, {
      message: "First name must be at least 3 characters.",
    }),
    lastname: z.string().min(3, {
        message: "Last name must be at least 3 characters.",
    }),
    email: z.string().email(),
    phone: z.string().min(11, {
        message: "Phone number must be at least 11 characters.",
    }),
})

const Booking = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            // eventDate: new Date(),
            amount: 0,

        },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const [verf, setVerf] = useState('');

    return (
        <section className='max-w-xl mx-auto space-y-14 py-4'>

            <div className="flex justify-between items-center">

                <Image 
                    src="/logoCut.png"
                    alt="Bookie Logo"
                    width={120}
                    height={24}
                    priority
                />

                <button className="px-4 py-1 rounded-2xl border bg-transparent text-white">Meet</button>

            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid gap-10">
                        <div className="grid grid-cols-2 items-center gap-5">
                            <div className="grid w-full items-center gap-1.5">
                                <FormField
                                    control={form.control}
                                    name="firstname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-gray-300 font-light'>First name</FormLabel>
                                            <FormControl>
                                                <Input {...field} className='bg-transparent border-[#2d2d32] text-white' type="text" id="firstName" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <FormField
                                    control={form.control}
                                    name="firstname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-gray-300 font-light'>Last name</FormLabel>
                                            <FormControl>
                                                <Input {...field} className='bg-transparent border-[#2d2d32] text-white' id="lastName" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="grid w-ful items-center gap-1.5 w-3/4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-gray-300 font-light'>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} className='bg-transparent border-[#2d2d32] text-white' id="email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="eventDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="text-gray-300 font-light">Date of event</FormLabel>

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] pl-3 text-left font-normal bg-transparent border-[#2d2d32] text-white hover:bg-neutral-950 hover:text-white",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Select event date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={(date) => {
                                                    field.onChange(date);
                                                    setVerf('Check out is 10k');
                                                }}
                                                disabled={(date) =>
                                                    date < new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>

                                    <FormDescription>
                                        {verf}
                                    </FormDescription>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid w-ful items-center gap-1.5 w-2/4">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-gray-300 font-light'>Phone</FormLabel>
                                        <FormControl>
                                            <Input {...field} className='bg-transparent border-[#2d2d32] text-white' id="phone" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="mt-10 flex items-center justify-start gap-x-6">
                        <Button type="submit" className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Submit</Button>
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-200">Cancel</button>
                    </div>
                </form>
            </Form>
        </section>
    )
}

export default Booking