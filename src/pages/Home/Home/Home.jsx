import { Helmet } from "react-helmet-async";
import TopSlider from "../TopSlider/TopSlider";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import InfoSection from "../InfoSection/InfoSection";
import Club from "../Club/Club";
import PopularClasses from "../PopularClasses/PopularClasses";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sports | Home</title>
            </Helmet>
            <TopSlider />
            <PopularClasses />
            <PopularInstructors />
            <InfoSection />
            <Club />
        </div>
    );
};

export default Home;