import { AiFillHome } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { MdExplore } from "react-icons/md";
import { DiAptana } from "react-icons/di";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

export const navData = [
    {
        id: 1,
        name: "Home",
        icon: <AiFillHome />,
        url: "/",
    },
    {
        id: 2,
        name: "Explore",
        icon: <MdExplore />,
        url: "/explore",
    },
    {
        id: 3,
        name: "Friends",
        icon: <GoPeople />,
        url: "/friends",
    },
    {
        id: 4,
        name: "Messages",
        icon: <BiSolidMessageSquareDetail />,
        url: "/messages",
    },
    {
        id: 5,
        name: "Settings",
        icon: <DiAptana />,
        url: "/settings",
    },
];

export const postData = [
    {
        id: 1,
        author: "John Doe",
        caption: "This is john doe's post",
        imageUrl: "",
        likes: [1, 2, 3, 4, 5],
        comments: ["abc", "lkds", "lkd"],
        date: "",
    },
    {
        id: 2,
        author: "John Doe 2",
        caption: "This is john doe's post",
        imageUrl: "",
        likes: [1, 2, 3, 4, 5],
        comments: ["abc", "lkds", "lkd"],
        date: "",
    },
    {
        id: 3,
        author: "John Doe 3",
        caption: "This is john doe's post",
        imageUrl: "",
        likes: [1, 2, 3, 4, 5],
        comments: ["abc", "lkds", "lkd"],
        date: "",
    },
    {
        id: 4,
        author: "John Doe 4",
        caption: "This is john doe's post",
        imageUrl: "",
        likes: [1, 2, 3, 4, 5],
        comments: ["abc", "lkds", "lkd"],
        date: "",
    },
    {
        id: 5,
        author: "John Doe 5",
        caption: "This is john doe's post",
        imageUrl: "",
        likes: [1, 2, 3, 4, 5],
        comments: ["abc", "lkds", "lkd"],
        date: "",
    },
];
