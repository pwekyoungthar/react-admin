import Widget from "../../components/widgets/Widget";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};
export default Home;
