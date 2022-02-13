import Image from "next/image";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { useSession } from "next-auth/react";

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
                        <AiOutlineSearch className="text-gray-300" />
                    </div>
                    <input className="bg-gray-50 justify-between block w-full pl-10 sm:text-sm border-gray-300
                                        focus:ring-black focus:border-black rounded-md
                    " type="text" placeholder="Search..."/>
                </div>

                {/* Right */}
                <div className="flex items-center space-x-4">
                    {/* Home */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="navBtn" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>

                    {/* paper airplane icon */}
                    <div className="relative navBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="navBtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <div className="absolute -top-2 -right-2 text-xs w-5 h-5
                        bg-red-500 rounded-full flex items-center justify-center
                        text-white animate-bounce">3</div>
                    </div>

                    {/* Plus */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="navBtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>

                    {/* fire icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="navBtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>

                    {/* Heart icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="navBtn fill-white hover:fill-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>

                    {/* User Image */}
                    <img src={session?.user?.image} alt="profile pic" className="hover:scale-125 transition-all duration-150 h-10 rounded-full cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default Header;