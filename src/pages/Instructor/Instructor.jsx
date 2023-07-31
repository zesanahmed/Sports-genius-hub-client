import useInstructor from "../../hooks/useInstructor";


const Instructor = () => {
    const [instructors, loading] = useInstructor();
    console.log(instructors);
    return (
        <div className="pt-20">
            <h2>Instructors</h2>
            {
                instructors.map(instructor => <div
                    key={instructor.name}
                ><p>{instructor.name}</p>
                    <img src={instructor.img}></img>
                </div>)
            }
        </div>
    );
};

export default Instructor;