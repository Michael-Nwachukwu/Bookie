"use client"

import React from 'react'
import { Calendar } from '../ui/calendar'
import { CheckInForm } from './CheckInForm'

const Availability = () => {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className='flex flex-col items-center gap-32'>
            <h1 className="text-4xl sm:text-5xl absolute top-0 font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-14 hidden sm:block">
                Check Tent Availability
            </h1>
            <div className="grid sm:grid-cols-2 items-center h-full w-full gap-5 sm:gap-16 pb-6 sm:pb-0">
                <div className="flex justify-center sm:justify-end items-center h-full w-full">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border text-white"
                    />
                </div>
                <div className="flex justify-center sm:justify-start items-center h-full pb-8 sm:pb-0">
                    <CheckInForm />
                </div>
            </div>
        </div>
    )
}

export default Availability