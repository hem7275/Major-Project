"use client";
import React from "react";
import Navbar, { MobileNavbar } from "./Navbar";
import Header from "./Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import VerifyUser from "./VerifyUser";

const queryClient = new QueryClient();

const AppLayout = ({ children }) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <div className="px-8">
                    <Header />
                    <VerifyUser />
                    <div className="flex mt-5 w-full justify-around gap-5">
                        <Navbar />
                        <MobileNavbar />
                        <div className="w-full">{children}</div>
                    </div>
                </div>
            </QueryClientProvider>
        </Provider>
    );
};

export default AppLayout;
