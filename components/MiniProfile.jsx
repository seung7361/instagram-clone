function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src={"/avatar.png"} alt="profile pic"
            className="rounded-full border p-1 w-16 h-16"/>

            <div className="flex-1 mx-4">
                <h2 className="font-bold`">seung7361</h2>
                <h3 className="text-sm text-gray-400">최승빈</h3>
            </div>

            <button className="text-sm text-blue-400 text-semibold">Sign out</button>
        </div>
    );
}

export default MiniProfile;