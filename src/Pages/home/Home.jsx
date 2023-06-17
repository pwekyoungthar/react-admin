import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        Home Container
      </div>
    </div>
  );
};
export default Home;
