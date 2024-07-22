import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='bg-black w-full px-4 sm:px-20 pt-12 sm:pt-0 pb-12 sm:pb-20 text-white font-light space-y-8'>
            <div className="grid sm:grid-cols-2 min-h-[22em] gap-14 sm:gap-48">

                <div className="flex flex-col justify-between items-start h-full">

                    <div className="flex w-full gap-28 sm:gap-56 items-center">
                        <ul className="text-lg sm:text-2xl space-y-2">
                            <li>Linkedin</li>
                            <li>Instagram</li>
                            <li>X</li>
                            <li>Youtube</li>
                            <li>Facebook</li>
                        </ul>
                        <ul className="text-lg sm:text-2xl space-y-2">
                            <li>Home</li>
                            <li>About</li>
                            <li>Gallery</li>
                            <li>Get in touch</li>
                            <li>Book</li>
                        </ul>
                    </div>

                    <div className="hidden sm:flex justify-between items-center w-full">
                        <Image 
                            src="/logoCut.png"
                            alt="Bookie Logo"
                            width={120}
                            height={24}
                            priority
                        />
                        <div className="inline-flex gap-4 items-center divide-x">
                            <span>
                                © Bldn.Inc 2024
                            </span>
                            <span className='pl-4'>
                                Privacy
                            </span>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col justify-between h-full gap-5 sm:gap-0">
                    <p className="text-lg sm:text-2xl">
                        2 Hoxton Street,
                        <br />
                        London N1 6NG
                    </p>

                    <p className="text-lg sm:text-2xl">
                        The Chubb Buildings, Fryer Street,
                        <br />
                        Wolverhampton WV1 1HT
                    </p>

                    <p className="text-lg sm:text-2xl">
                        +44 (0) 207 613 5100
                        <br />
                        hello@steve-edge.com
                    </p>
                </div>

            </div>

            <div className="sm:hidden flex justify-center items-center w-full text-xs">
                <div className="inline-flex gap-4 items-center divide-x">
                    <span>
                        © Bldn.Inc 2024
                    </span>
                    <span className='pl-4'>
                        Privacy
                    </span>
                </div>
            </div>

        </footer>
    )
}

export default Footer