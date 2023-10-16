"use client";
import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import cookie from "react-cookies";
const CreatePostPage = () => {

    const [postForm, setPostForm] = useState({
        title: "",
        content: "",
    });

    const URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/`;

    const createPostMutation = useMutation({
        mutationFn: async (url, data) => await axios.post(url, data),
        onSuccess: ({ data }) => {
            console.log("data", data);
        },
        onError: (error) => {
            console.log("Error", error);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("cookie", cookie.load("jwt"));

        createPostMutation.mutate(URL, postForm);
    };

    const handleChange = (e) => {
        setPostForm({ ...postForm, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full flex justify-center items-center p-10">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 text-black"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title...."
                    onChange={handleChange}
                    value={postForm.title}
                />
                <textarea
                    name="content"
                    cols="30"
                    rows="10"
                    placeholder="Post content...."
                    onChange={handleChange}
                    value={postForm.content}
                ></textarea>
                <input
                    type="submit"
                    value="Post"
                    className="bg-gray-500 cursor-pointer active:opacity-60 py-2"
                />
            </form>
        </div>
    );
};

export default CreatePostPage;
