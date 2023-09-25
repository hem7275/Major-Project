import React from "react";
import Navbar, { MobileNavbar } from "./Navbar";
import Header from "./Header";

const AppLayout = ({ children }) => {
    return (
        <div
            className="px-8"
        >
            <Header />
            <div className="flex mt-5 w-full justify-around gap-5">
                <Navbar />
                <MobileNavbar />
                <div className="w-full">{children}</div>
            </div>
        </div>
    );
};

export default AppLayout;
