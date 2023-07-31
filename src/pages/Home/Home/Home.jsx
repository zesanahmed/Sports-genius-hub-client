import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sports | Home</title>
            </Helmet>
            <TopSlider></TopSlider>
        </div>
    );
};

export default Home;