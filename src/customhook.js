import React, {useCallback} from "react";

export const useUserCollection = () => {
    const [filter, setFilter] = React.useState("");
    const [userCollection, setUserCollection] = React.useState([]);

    const loadUsers = useCallback(()=> {
        {
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
                .then(response => response.json())
                .then(json => setUserCollection(json));
        }
    }, [filter]);

    return({userCollection, loadUsers, filter, setFilter});
}