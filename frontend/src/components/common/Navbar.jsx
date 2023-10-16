"use client";
import React, { useState } from "react";
import { navData } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [active, setActive] = useState(0);
    const user = useSelector((state) => state.user);

    return (
        <div className="hidden md:flex flex-col w-fit max-w-[25%] z-50 sticky top-16 h-fit">
            <div className=" w-full bg-card py-2 flex justify-start items-center rounded-lg">
                <div className=" ">
                    <Image
                        className=" rounded-full mx-3 border border-black"
                        // fill={true}
                        width={40}
                        height={40}
                        src="/assets/images/avatar_default.jpg"
                        alt=""
                    />
                </div>
                <div className="">
                    <Link href={"/profile"} className="text-md">
                        {user?.username}
                    </Link>
                    <div className="text-sm">@johndoe</div>
                </div>
            </div>
            {/* <div className="w-full bg-card flex justify-around">
                <Image src="/assets/images/avatar_default.jpg" width={20} height={20} alt="icon" />
                <div className="flex flex-col">
                    <span>Jayant</span>
                    <span>@jayant2k1</span>
                </div>
            </div> */}
            <nav className="flex flex-col mt-3 items-start justify-start rounded-lg shadow-lg gap-3 text-lg  bg-card ">
                {navData.map((item, id) => (
                    <Link
                        href={item.url}
                        key={id}
                        onClick={() => setActive(id)}
                        className={` ${
                            id === active ? "bg-[#218dfa] text-white" : ""
                        } flex justify-start items-center p-2 px-10 gap-2 w-full hover:bg-[#4b9beb] cursor-pointer rounded `}
                    >
                        {item.icon} <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
            <Link
                href="/create-post"
                className="mt-5 bg-[#218dfa] text-center py-2 text-lg rounded-xl hover:bg-[#4b9beb]"
            >
                Create Post
            </Link>
        </div>
    );
};

export const MobileNavbar = () => {
    const [active, setActive] = useState(0);

    return (
        <nav className=" md:hidden fixed bottom-0 left-0 right-0 shadow-2xl  shadow-[#eeeeee] rounded-lg z-50 bg-card">
            <div className="flex w-full justify-evenly text-2xl gap-1">
                {navData.map((item, id) => (
                    <Link
                        href={item.url}
                        onClick={() => setActive(id)}
                        key={id}
                        className={` ${
                            id === active ? "bg-[#218dfa] text-white" : ""
                        } hover:bg-[#4b9beb] cursor-pointer rounded shadow-inner  w-full flex justify-center items-center py-2`}
                    >
                        {item.icon}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
