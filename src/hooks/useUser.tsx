import { useEffect, useState } from "react";


const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://sports-genius-hub-server-zesanahmed.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
    }, [])

    return [users, loading];
};

export default useUsers;