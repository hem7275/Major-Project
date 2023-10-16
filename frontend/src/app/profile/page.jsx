"use client";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
    const user = useSelector((state) => state.user);
    
    if (!user) {
        return <h1>User not found</h1>;
    }

    return (
        <div>
            <p>
                User id <span>{user.userId}</span>
            </p>
            <p>
                User name <span>{user.username}</span>
            </p>
            {user.isAdmin ? <p>You are admin</p> : <p>You are not an admin</p>}
        </div>
    );
};

export default ProfilePage;
