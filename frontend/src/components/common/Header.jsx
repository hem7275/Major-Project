import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="sticky border top-0 w-full py-2 flex justify-around items-center bg-card z-50 px-2">
            <p>Logo</p>
            <input type="text" placeholder="Search bar" />
            <Link
                href="/auth/login"
                className="hover:underline hover:text-gray-400"
            >
                Login
            </Link>
        </div>
    );
};

export default Header;
