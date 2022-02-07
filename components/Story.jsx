function Story({ img, username }) {
    return (
        <div>
            <img src={img} alt="profile pic" />
            <p>{username}</p>
        </div>
    );
}

export default Story;