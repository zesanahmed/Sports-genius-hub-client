import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sports | Home</title>
            </Helmet>
            <TopSlider />
            <PopularInstructors />
        </div>
    );
};

export default Home;