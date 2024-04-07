import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightsideNav from "../Shared/RightsideNav/RightsideNav";
import BreakingNews from "./BreakingNews";
import News from "../News/News";

const Home = () => {
    const newsData = useLoaderData();
    console.log(newsData)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="  md:col-span-2">
                    {
                        newsData.map(news => <News key={news._id} news={news}></News>)
                    }
                </div>
                <div className="border">
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;