
import GridLayout from "./component/GridLayout";
import Navbar from "./component/Navbar";
import PostCreationTemplate from "./component/PostTemplate";
import SideBar from "./component/SideBar";


const page = () => {
    return (
        <main>
            <nav>
                <Navbar />
            </nav>
            <GridLayout sideBar={<SideBar />} postView={<PostCreationTemplate />} />
        </main>
    );
};
export default page;