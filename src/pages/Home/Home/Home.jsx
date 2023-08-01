import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import InfoSection from "../InfoSection/InfoSection";
import Club from "../Club/Club";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sports | Home</title>
            </Helmet>
            <TopSlider />
            <PopularInstructors />
            <InfoSection />
            <Club />
        </div>
    );
};

export default Home;