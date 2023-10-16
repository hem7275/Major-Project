"use client";
import { setUser } from "@/redux/features/user/userSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const isBrowser = () => {
    return typeof window !== "undefined";
};

const getFromLocalStorage = () => {
    if (isBrowser()) {
        const user = JSON.parse(localStorage.getItem("user"));
        return user;
    }
};

const VerifyUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const user = getFromLocalStorage();
        if (user) {
            dispatch(setUser(user));
        }
    }, []);

    return <div />;
};

export default VerifyUser;
