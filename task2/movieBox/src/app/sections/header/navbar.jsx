"use client"
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [burger, setBurger] = useState(false);
    return (
        <header className="md-[650px]:px-16 flex justify-between items-center absolute w-full z-20 max-md-[650px]:p-2 ">
            <div>
                <img src="logo.svg" alt="logo" />
            </div>
            <section className="gap-8 flex w-[70%] justify-between max-md-[650px]:justify-end">
                <div className={`flex w-[100%] max-md-[650px]:bg-black opacity-90 max-md-[650px]:absolute max-md-[650px]:left-0 max-md-[650px]:flex-col max-md-[650px]:h-[90vh] max-md-[650px]:p-4 max-md-[650px]:min-w-[40%] ${!burger ? 'max-md-[650px]:hidden' : ''}`}>
                    <div className=" text-white md-[650px]:hidden">
                        <p className="float-right mb-4" onClick={() => {
                            setBurger(!burger)
                        }}><FaTimes/></p>
                    </div>
                    <div className=" w-[100%] max-md-[650px]:mt-2">
                        <div className="bg-red-500 flex border bg-transparent rounded-[6px] py-[6px] px-[10px]">
                            <input className="bg-transparent border-none outline-none w-[100%]" type="search" placeholder="What do you want to watch?" />
                            <img src="Search.svg" alt="searchIcon" />
                        </div>
                    </div>
                    <nav className="text-white max-md-[650px]:mt-4 flex items-center justify-end w-[60%]">
                        <p>Sign in</p>
                    </nav>
                </div>
                <img src="Menu.svg" alt="menuBtn" onClick={() => {
                    setBurger(!burger)
                }} />
            </section>
        </header>
    )
}