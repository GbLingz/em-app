"use client";

import Image from "next/image";
import { Button } from "rsuite";
import ImageWrapper from "./ImageWrapper";
import Img101 from "@/public/IMG_9935.png";
import { Icon } from "@iconify/react";
import { fn } from "@/utils/utilityfunctions";

const PostCard = ({ post }) => {
    return (
        <article className={`bg-white rounded-lg p-5`}>
            <section className={`flex items-center justify-between`}>
                <div className={`flex items-center gap-2`}>
                    <div style={{ width: `fit-content` }} className={`relative rounded-full overflow-hidden`}>
                        <Image
                            width={66}
                            height={66}
                            src={post.img1}
                            alt={`avatar-img`}
                        />
                    </div>
                    <div>
                        <p className={`font-semibold text-h5`}>Yuji Itadori</p>
                        <p>8 mins ago</p>
                    </div>
                </div>
                <section>
                    <Button style={{ border: `1px solid #83979B` }} className={`rounded-full px-8 py-2 bg-transparent hover:text-emBlue hover:border-emBlue`}>
                        Following
                    </Button>
                    {/* <Button
                        style={{ border: `1px solid #83979B` }}
                        className={`flex items-center gap-2 rounded-full px-8 py-2 bg-transparent hover:text-emBlue hover:border-emBlue`}
                    >
                        <p>Follow</p> <Icon fontSize={fn.rem(20)} icon='ic:baseline-plus' />
                    </Button> */}
                </section>
            </section>
            <article className={`my-5`}>
                <p>{post.description}</p>
            </article>
            <article style={{ height: fn.rem(545) }} className={`my-5 w-full rounded-lg overflow-hidden`}>
                <ImageWrapper alt={`auth-img`} src={post.img2} width={`100%`} height={`100%`} objectFit={`cover`} />
            </article>
            <section className={`flex justify-between items-center`}>
                <div className={`flex gap-5`}>
                    <Icon className={`text-emRed`} fontSize={fn.rem(41)} icon='icon-park-solid:like' />
                    <Icon fontSize={fn.rem(41)} icon='mingcute:comment-2-line' />
                </div>
                <div>
                    <Icon fontSize={fn.rem(41)} icon='mingcute:send-fill' />
                </div>
            </section>
        </article>
    );
};
export default PostCard;