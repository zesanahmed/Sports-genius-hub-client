import { Fade, Bounce, Flip, JackInTheBox, Roll, Slide, Hinge, Zoom } from "react-awesome-reveal";
import useInstructor from "../../hooks/useInstructor";
import { BsDot } from "react-icons/bs";


const Instructor = () => {
    const [instructors, loading] = useInstructor();
    return (
        <div className="md:mx-10 pt-20">
            <Zoom><p className="text-center text-6xl font-bold my-5">Popular Instructors</p></Zoom>
            {
                instructors.map(instructor => <div
                    key={instructor.name}
                    className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse lg:gap-80">
                        <img className="h-96" src={instructor.img} alt="Shoes" />
                        <div className="">
                            <h1 className="text-5xl font-bold">{instructor.name}</h1>
                            <p className="text-gray-400 mt-2">Email: {instructor.email}</p>
                            <div className="mt-6">
                                <p className="text-xl text-lime-600 font-bold">Classes:</p>
                                <ul className="text-lg font-bold">
                                    {instructor.classesTaken.map((sportClass, index) => (
                                        <li className="flex items-center" key={index}><BsDot></BsDot>{sportClass}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className="btn btn-outline mt-3">See Classes</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Instructor;






{/* <div className="grid md:grid-cols-3 md:gap-6 px-4 gap-4">
    {
        instructors.map(instructor => <div
            key={instructor.name} className="card md:w-96  bg-base-100 shadow-xl">
            <figure></figure>
            <div className="card-body justify-end bg-lime-100">
                <Bounce>
                    <h2 className="card-title">{instructor.name}</h2>
                </Bounce>
            </div>
        </div>)
    }
</div> */}

