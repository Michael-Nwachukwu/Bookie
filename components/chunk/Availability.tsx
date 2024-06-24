"use client"

import React from 'react'
import { Calendar } from '../ui/calendar'
import { CheckInForm } from './CheckInForm'

const Availability = () => {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <>
            <h1 className="text-4xl sm:text-5xl absolute top-0 font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-14">
                Check Tent Availability
            </h1>
            <div className="grid grid-cols-2 items-center h-full w-full gap-16 mt4">
                <div className="flex justify-end items-center h-full w-full">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border text-white"
                    />
                </div>
                <div className="flex justify-start items-center h-full">
                    <CheckInForm />
                </div>
            </div>
        </>
    )
}

export default Availability