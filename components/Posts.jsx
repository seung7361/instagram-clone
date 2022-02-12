import Post from "./Post.jsx";

const posts = [
    {
        id: '123',
        username: 'seung7361',
        userimg: '/avatar.png',
        img: '/example image.jpeg',
        caption: 'This is dope!'
    },
    {
        id: '123',
        username: 'seung7361',
        userimg: '/avatar.png',
        img: '/example image.jpeg',
        caption: 'This is dope!'
    },
];

function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} id={post.id} username={post.username}
                userimg={post.userimg} img={post.img} caption={post.caption} />
            ))}
        </div>
    );
}

export default Posts;