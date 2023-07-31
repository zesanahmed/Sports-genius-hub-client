import useInstructor from "../../hooks/useInstructor";


const Instructor = () => {
    const [instructors, loading] = useInstructor();
    console.log(instructors);
    return (
        <div className="pt-20">
            <h2>Instructors</h2>
            {
                instructors.map(instructor => <h2
                    key={instructor.name}
                >{instructor.name}</h2>)
            }
        </div>
    );
};

export default Instructor;