"use client"

import React, {useEffect, useState} from 'react'
import { FlipWords } from '../ui/flipwords'


const words = ["Weddings", "Meetings", "Carnivals", "Celebrations"];

const HeroText = () => {

    const words = ["Weddings", "Meetings", "Carnivals", "Celebrations"];
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulate component loading delay
        const timer = setTimeout(() => {
        setIsLoaded(true);
        }, 1000); // Adjust time as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h1 className="text-4xl md:text-7xl font-bold text-white dark:text-white">
                  The Perfect Venue
                  <br />
                  for <span>{isLoaded ? <FlipWords words={words} className="text-white" /> : 'Any Event'}</span>
                </h1>
        </div>
    )
}

export default HeroText