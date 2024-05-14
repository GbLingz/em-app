import Image from "next/image";
import image from "@/public/IMG_9935.png";
import { Icon } from "@iconify/react";
import { fn } from "@/utils/utilityfunctions";
import Link from "next/link";
import Modal from "./Modal";

const AvatarComponent = () => {
  return (
    <div className={`flex items-center gap-2`}>
      <div
        style={{ width: `fit-content` }}
        className={`relative rounded-full overflow-hidden`}
      >
        <Image width={50} height={50} src={image} alt={`avatar-img`} />
      </div>
      <div>
        <p className={`font-semibold text-h5`}>Gbolahan GbLingz</p>
        <p>0 Friends</p>
      </div>
      <div>
        <Modal />
      </div>
    </div>
  );
};
export default AvatarComponent;
