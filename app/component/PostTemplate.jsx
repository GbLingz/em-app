"use client";

import { usePathname } from "next/navigation";
import PostCard from "./PostCard";
import PostsubmissionTemplate from "./PostsubmissionTemplate";
import { useEffect, useState } from "react";
import pic1 from '@/public/pic1.png';
import pic2 from '@/public/pic2.png';
import pic3 from '@/public/pic3.png';
import pic4 from '@/public/pic4.png';
import profilepic1 from '@/public/Ellipse3.png';
import profilepic2 from '@/public/Ellipse4.png';
import profilepic3 from '@/public/Ellipse6.png';
import profilepic4 from '@/public/Ellipse5.png';


export const anArrayOfposts = [
    {
        id: 1,
        img1: profilepic1,
        name: "Yuji Itadori",
        description: "My money grows like grass dont try me ",
        img2: pic4,
    },

    {
        id: 2,
        img1: profilepic2,
        name: "Naogami Shinya Itadori",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
        img2: pic3,
    },

    {
        id: 3,
        img1: profilepic3,
        name: "Gama Oyabin",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
        img2: pic2,
    },

    {
        id: 4,
        img1: profilepic4,
        name: "Senju Hashirama",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
        img2: pic1,
    },
];

const PostCreationTemplate = () => {
    const [isPostCreationTemplateVisble, setPostCreationTemplateVisibility] = useState(false);

    // // next method
    const pathname = usePathname();
    console.log(pathname);

    // if pathname is equals to "profile" hide the post creatino component

    useEffect(() => {
        if (pathname === `/profile`) {
            setPostCreationTemplateVisibility(true);
        } else {
            setPostCreationTemplateVisibility(false);
        }
    }, [pathname]);

    const postCardList = anArrayOfposts.map((post) => {
        return <PostCard post={post} key={post.id} />;
    });

    return (
        <main>
            <section className={`mb-4`} hidden={isPostCreationTemplateVisble}>
                <PostsubmissionTemplate />
            </section>
            <section className={`mb-4 flex flex-col gap-4`}>{postCardList}</section>
        </main>
    );
};
export default PostCreationTemplate;