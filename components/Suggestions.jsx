import { useEffect, useState } from "react";
import faker from "@faker-js/faker";

function Suggestions() {
    const [suggestions, setSuggestions] = useState();

    useEffect(() => {
        const suggestions = [...Array(5)].map(_, i => (
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        ));
    }, []);

    return (
        <div></div>
    );
}

export default Suggestions;