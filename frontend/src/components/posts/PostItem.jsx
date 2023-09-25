import Image from "next/image";
import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import {
    HiOutlineHeart,
    HiOutlineShare,
    HiOutlineBookmark,
} from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { AiFillLike } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsArrow90DegRight } from "react-icons/bs";

const PostItem = ({ post }) => {
    return (
        <div className="rounded shadow-lg bg-card flex flex-col  pt-2">
            <div className="flex justify-between items-center px-3">
                <div className="flex items-center gap-3 ">
                    <Image
                        className=" rounded-full  border border-black"
                        // fill={true}
                        width={40}
                        height={40}
                        src="/assets/images/avatar_default.jpg"
                        alt=""
                    />
                    <div className="">
                        <p>{post.author}</p>
                        <p>ekdum abhi</p>
                    </div>
                </div>
                <div className="float-right cursor-pointer">
                    <FaEllipsisH />
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#ffffffc2] my-2" />
            <p className="px-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                iste voluptas in possimus molestiae tenetur quia eos repellendus
                id explicabo?
            </p>
            <div className="relative min-h-[500px] w-full my-2">
                <Image
                    src="/assets/images/post.jpg"
                    fill={true}
                    alt="Post image"
                />
            </div>
            <p className="pl-2">10 likes and 12 comments</p>
            <div className="w-full h-[1px] bg-[#ffffffc2] my-2" />
            <div className="text-xl flex justify-evenly items-center py-3">
                <div className="flex items-center justify-around gap-3 cursor-pointer hover:bg-[#4b9beb]">
                    <AiFillLike />
                    <span>12</span>
                </div>
                <div className="flex items-center justify-around gap-3 cursor-pointer hover:bg-[#4b9beb]">
                    <BiMessageSquareDetail />
                    <span>12</span>
                </div>
                <div className="flex items-center justify-around gap-3 cursor-pointer hover:bg-[#4b9beb]">
                    <BsArrow90DegRight />
                    <span>12</span>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
