import { MdOutlineSportsVolleyball } from "react-icons/md";
import { FaArrowRight, FaHome } from 'react-icons/fa';
import { GiThreeBurningBalls } from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";


const iconMap = {
    MdOutlineSportsVolleyball,
    FaHome,
    GiThreeBurningBalls,
    BiSolidContact,
};


const InfoSection = () => {
    const elementsData = [
        {
            icon: 'MdOutlineSportsVolleyball',
            name: 'OUR CLUB',
            title: "Champion's Club: Where Excellence Meets Passion",
        },
        {
            icon: 'FaHome',
            name: 'COACHING',
            title: "Unlock Your Athletic Potential: Join Our Coaching Program Today!",
        },
        {
            icon: 'GiThreeBurningBalls',
            name: 'OUR STORE',
            title: "Discover the Ultimate Shopping Experience: Welcome to Our Store!",
        },
        {
            icon: 'BiSolidContact',
            name: 'CONTACT US',
            title: "Get in Touch: Contact Us Today for Any Inquiries or Assistance",
        },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 py-16 my-6 bg-green-50 ">
            {elementsData.map((element, index) => {
                const IconComponent = iconMap[element.icon];
                return (
                    <div key={index} className="bg-white rounded-md shadow-md p-10">
                        {IconComponent && <IconComponent className="text-5xl mb-6 text-green-600 " />}
                        <h3 className="text-2xl font-semibold mb-4">{element.name}</h3>
                        <p className="text-gray-600 mb-4">{element.title}</p>

                        <Slide>
                            <Link className="flex gap-2 items-center">Read more <FaArrowRight /></Link>
                        </Slide>

                    </div>
                );
            })}
        </div>
    );
};

export default InfoSection;




