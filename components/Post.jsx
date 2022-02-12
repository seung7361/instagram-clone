import DotsHorizontal from "@heroicons/react/outline/DotsHorizontalIcon";
import HeartIcon from "@heroicons/react/outline/HeartIcon";
import HeartIconFilled from "@heroicons/react/solid/HeartIcon";
import Comment from "@heroicons/react/outline/ChatIcon";
import PaperAirplane from "@heroicons/react/outline/PaperAirplaneIcon";
import BookmarkIcon from "@heroicons/react/outline/BookmarkIcon";
import EmojiHappyIcon from "@heroicons/react/outline/EmojiHappyIcon";

function Post({ id, username, userimg, img, caption }) {
    console.log(username, userimg);
    return (
        <div className="">
            {/* Header */}
            <div className="flex items-center p-5 bg-white mt-7 border rounded-sm">
                <img src={userimg}
                className="rounded-full h-12 w-12 object-contain p-1 border mr-3"
                alt="profile pic" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontal className="h-5 cursor-pointer" />
            </div>

            {/* Image */}
            <img src={img} alt="source image" className="object-cover w-full" />

            {/* buttons */}
            <div className="border rounded-sm bg-white">
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4 flex-1">
                        <HeartIcon className="btn" />
                        <Comment className="btn" />
                        <PaperAirplane className="btn" />
                    </div>

                    <BookmarkIcon className="btn" />
                </div>

                {/* caption */}
                <p className="p-5 truncate">
                    <span className="font-bold mr-1">{username}</span>
                    {caption}
                </p>

                {/* comments */}

                {/* input box */}
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7" />
                    <input type="text"
                    placeholder="Add a comment..."
                    className="border-none flex-1 focus:ring-0 outline-none" />
                    <button className="font-semibold text-blue-400">Post</button>
                </form>
            </div>
        </div>
    );
}

export default Post;