import Stories from "./Stories.jsx";
import Posts from "./Posts.jsx";

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
        xl:grid-cols-3 xl:max-w-6xl mx-auto">

            {/* top */}
            <section className="col-span-2">
                <Stories />
                <Posts />
            </section>

        </main>
    );
}

export default Feed;