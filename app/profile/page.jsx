import GridLayout from "../component/GridLayout";
import Modal from "../component/Modal";
import Navbar from "../component/Navbar";
import PostCreationTemplate from "../component/PostTemplate";
import SideBar from "../component/SideBar";


const Home = () => {
    return (
        <main>
            <nav>
                <Navbar />
            </nav>
            <GridLayout Modal={<Modal/>} sideBar={<SideBar />} postView={<PostCreationTemplate />} />
        </main>
    );
};
export default Home; 