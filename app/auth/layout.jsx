import Image from "next/image";
import authimg from "@/public/authimg.png";
import ImagesWrapper from "../component/imagewrapper";


const layout = ({ children }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 h-screen`}>
      <section className={`bg-slate-400 md:flex items-center justify-center p-10 hidden`}>
        <ImagesWrapper
          alt={"authimg"}
          src={authimg}
          width={"100%"}
          height={"100%"}
          objectFit={"contain"}
        />
      </section>
      {/* column 2 */}
      <section>
        {/* insert children here */}
        {children}
        </section>
    </div>
  );
};

export default layout;
