"use client";

import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <>
            <div className='navbar-container bg-black px-5 py-4 text-white flex justify-between items-center'>
                <div className='flex-1 flex justify-center md:justify-between'>
                    <div className='logo text-2xl'>
                        <Link href='/'>
                            Tic Tac Toe
                        </Link>
                    </div>
                </div>
                <div className='links hidden md:block'>
                    <ol className='flex gap-8 '>
                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href='/privacy-policy'>
                                Privacy Policy
                            </Link>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default NavBar;
