import React, {useEffect} from "react";
import {useUserCollection} from "./customhook";


export default function App () {

    const {userCollection, loadUsers, filter, setFilter} = useUserCollection();

    useEffect(()=>{
        loadUsers();
    }, [loadUsers]);

    return (
        <div>
            <input value={filter} onChange={e => setFilter(e.target.value)} />
            <ul>
                {userCollection.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};