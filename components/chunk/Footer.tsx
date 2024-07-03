import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='bg-black w-full px-20 pb-20 text-white font-light'>
            <div className="grid grid-cols-2 h-[22em] gap-48">
                <div className="flex flex-col justify-between items-start h-full">
                    <div className="flex w-full justify-between items-center">
                        <ul className="text-2xl space-y-2">
                            <li>Linkedin</li>
                            <li>Instagram</li>
                            <li>X</li>
                            <li>Youtube</li>
                            <li>Facebook</li>
                        </ul>
                        <ul className="text-2xl space-y-2">
                            <li>Home</li>
                            <li>About</li>
                            <li>Gallery</li>
                            <li>Get in touch</li>
                            <li>Book</li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center w-full">
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
                <div className="flex flex-col justify-between h-full">
                    <p className="text-2xl">
                        2 Hoxton Street,
                        <br />
                        London N1 6NG
                    </p>

                    <p className="text-2xl">
                        The Chubb Buildings, Fryer Street,
                        <br />
                        Wolverhampton WV1 1HT
                    </p>

                    <p className="text-2xl">
                        +44 (0) 207 613 5100
                        <br />
                        hello@steve-edge.com
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer