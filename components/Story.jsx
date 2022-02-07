function Story({ img, username }) {
    return (
        <div>
            <img className="h-16 w-16 rounded-full p-1 border-2
            object-contain cursor-pointer"
            style={{"background":"linear-gradient(90deg, rgba(241,244,35,1) 0%, rgba(0,212,255,1) 100%)"}}
            src={img} alt="profile pic" />
            <p className="text-xs w-16 text-center truncate">{username}</p>
        </div>
    );
}

export default Story;