import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { TbPokeball } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { ImCross } from "react-icons/im";

import { useState } from "react";






const Header = () => {
    const [toggle, setToggle] = useState(false)

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    return (
        <>
            <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden",




            }}></div>
            <div className="w-[600px] bg-white h-full absolute duration-500 " style={{
                left: toggle ? '0%' : '-100%',
                zIndex: 9999
            }}></div>
            <div className="flex  items-center px-[150px] border shadow-xl sticky top-0 bg-white z-[99999]">
                <div className="w-[80px] cursor-pointer group">
                    <img className="w-full transition-transform duration-200 group-hover:scale-110" src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png" alt="" />
                </div>
                <div className="flex">
                    <ul className="flex gap-7 font-semibold space-x-2">
                        <li onClick={showSideMenu} className="gap-2 cursor-pointer">
                            <span className="border-b-2 border-black hover:text-[#FF5200] mx-2">Other</span> <span className="text-gray-600">Action Area IID, Newtown, New Tow...</span> <IoIosArrowDown onClick={showSideMenu} className="inline text-[#FF5200] cursor-pointer" /></li>
                        <li className="flex items-center gap-2 cursor-pointer hover:text-[#FF5200]"><HiOutlineShoppingBag className="inline " />
                            Swiggy Corporate</li>
                        <li className="gap-2 flex items-center hover:text-[#FF5200] cursor-pointer"><IoSearch className="inline" />Search</li>
                        <li className="gap-2 flex items-center hover:text-[#FF5200] cursor-pointer"><BiSolidOffer className="inline" />Offers <sup>New</sup></li>
                        <li className="gap-2 flex items-center hover:text-[#FF5200] cursor-pointer"><TbPokeball className="inline" />Help</li>
                        <li className="gap-2 flex items-center hover:text-[#FF5200] cursor-pointer"> <FiUser className="inline" />Sign In</li>
                        <li className="gap-2 flex items-center hover:text-[#FF5200] cursor-pointer"><PiShoppingCartSimpleDuotone className="inline" />
                            Cart</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header