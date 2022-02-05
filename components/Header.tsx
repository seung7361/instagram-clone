import Image from "next/image";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { HiOutlinePaperAirplane } from "@react-icons/all-files/hi/HiOutlinePaperAirplane"

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* instagram logo */}
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image src={"/instagram logo.png"} layout='fill' objectFit="contain"/>
                </div>
                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <FiInstagram />
                </div>

                {/* Middle */}
                <div className="relative mt-1 p-3 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                        <AiOutlineSearch className="text-gray-300" />
                    </div>
                    <input className="bg-gray-50 justify-between block w-full pl-10 sm:text-sm border-gray-300
                                        focus:ring-black focus:border-black rounded-md
                    " type="text" placeholder="Search..."/>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <AiOutlineHome className="h-10 w-10 cursor-pointer" />
                    <AiOutlineMenu className="h-6 md:hidden cursor-pointer" />
                </div>                
            </div>
        </div>
    );
}

export default Header;