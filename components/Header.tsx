import Image from "next/image";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";

function Header() {
    return (
        <div>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="navBtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>

                    {/* Plus */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="navBtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Header;