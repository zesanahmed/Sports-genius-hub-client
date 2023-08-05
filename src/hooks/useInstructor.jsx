import { useEffect, useState } from "react";


const useInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://sports-genius-hub-server-zesanahmed.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
                setLoading(false);
            })
    }, [])

    return [instructors, loading];
};

export default useInstructor;