import chance from "chance";
import { useEffect, useState } from "react";

function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            
        }));

        console.log(suggestions);
    }, []);
    

    return (
        <div></div>
    );
}

export default Stories;