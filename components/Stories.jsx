import faker from "@faker-js/faker";
import Story from "./Story";
import { useEffect, useState } from "react";

function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }));

        setSuggestions(suggestions);
    }, []);
    

    return (
        <div className="flex space-x-5 p-6 bg-white mt-8
        border-gray-200 border rounded-sm overflow-x-scroll">
            {suggestions.map((profile) => (
                <Story key={profile.id} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    );
}

export default Stories;