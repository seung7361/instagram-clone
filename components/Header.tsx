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
            </div>
        </div>
    );
}

export default Header;