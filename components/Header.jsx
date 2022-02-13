import Image from "next/image";
import SearchIcon from "@heroicons/react/outline/SearchIcon";
import HomeIcon from "@heroicons/react/outline/HomeIcon";
import PaperAirplaneIcon from "@heroicons/react/outline/PaperAirplaneIcon";
import PlusIcon from "@heroicons/react/outline/PlusIcon";
import FireIcon from "@heroicons/react/outline/FireIcon";
import HeartIcon from "@heroicons/react/solid/HeartIcon";
import { useSession, signOut, signIn } from "next-auth/react";

function Header() {

    const { data: session } = useSession();
    console.log(session);

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl px-5 mx-auto">
                {/* instagram logo */}
                <div className="relative inline-grid w-24 cursor-pointer">
                    <Image src={"/instagram logo.png"} layout='fill' objectFit="contain"/>
                </div>

                {/* Middle */}
                <div className="relative w-0 opacity-0 sm:opacity-100 sm:w-auto inline-flex mt-1 p-3 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="text-gray-300" />
                    </div>
                    <input className="bg-gray-50 justify-between block w-full pl-10 sm:text-sm border-gray-300
                                        focus:ring-black focus:border-black rounded-md
                    " type="text" placeholder="Search..."/>
                </div>

                {/* Right */}
                <div className="flex items-center space-x-4">
                    <HomeIcon className="navBtn" />

                    { session ? (
                        <>
                            <PaperAirplaneIcon className="relative navBtn" />
                            <PlusIcon className="navBtn" />
                            <FireIcon className="navBtn" />
                            <HeartIcon className="navBtn fill-white hover:fill-red-500" />
                            <img src={session?.user?.image}
                            alt="profile pic"
                            className="hover:scale-125 transition-all duration-150
                            h-10 rounded-full cursor-pointer"
                            onClick={signOut}  />
                        </>
                    ) : (
                        <button onClick={signIn}
                        className="font-bold text-blue-700">Sign In</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;