import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdInsertPhoto, MdEmojiEmotions } from "react-icons/md";
import PostItem from "./PostItem";
import { postData } from "@/data";
import userData from "@/UserData";

const PostList = () => {
    return (
        <div className="flex flex-col gap-5 max-w-[500px] mx-auto">
            {postData.map((item) => (
                <PostItem key={item.id} post={item} />
            ))}
        </div>
    );
};

export default PostList;
