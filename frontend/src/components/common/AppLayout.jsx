'use client'
import React from "react";
import Navbar, { MobileNavbar } from "./Navbar";
import Header from "./Header";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const AppLayout = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="px-8">
                <Header />
                <div className="flex mt-5 w-full justify-around gap-5">
                    <Navbar />
                    <MobileNavbar />
                    <div className="w-full">{children}</div>
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default AppLayout;
