import Stories from "./Stories.jsx"

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
        xl:grid-cols-3 xl:max-w-6xl max-auto">

            {/* top */}
            <section className="col-span-2">
                <Stories />

                
            </section>

        </main>
    );
}

export default Feed;