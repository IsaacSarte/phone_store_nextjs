import React, { useState } from 'react';

import Link from "next/link";

/* Icons */
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from "react-icons/io";
import { RiShoppingBagFill } from "react-icons/ri";
import { HiOutlineTruck } from "react-icons/hi";

const Header = () => {

    /* State Management */
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="bg-[#1F252E] w-full">
            <nav className="app__navbar w-full flex justify-between items-center max-w-[100rem] custom:max-w-full">
                <div className="app__navbar-logo text-white flex justify-start items-center">
                    <a href="/" className="text-2xl font-bold tracking-wide">
                        Phone Store
                    </a>
                </div>
                <ul className="app__navbar-links text-white text-xl font-semibold flex justify-center items-center list-none custom:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
                    <li className="p__opensans"><a href="/">Collections</a></li>
                    <li className="p__opensans"><a href="#brand">Brand</a></li>
                    <li className="p__opensans"><a href="#new">New</a></li>
                    <li className="p__opensans"><a href="#sales">Sales</a></li>
                </ul>
                <div className="app__navbar-login flex justify-end items-center gap-4">
                    <Link href="/post/order" className="p__opensans"><RiShoppingBagFill color="#fff" fontSize={27} /></Link>
                    <Link href="/post/faq" className="p__opensans"><HiOutlineTruck stroke="#fff" fontSize={27} /></Link>
                </div>
                <div className="app__navbar-smallscreen hidden custom:flex sm:flex md:flex lg:hidden xl:hidden 2xl:hidden">
                    <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                    {toggleMenu && (
                        <div className="app__navbar-smallscreen_overlay duration-500 z-[5] fixed top-0 left-0 w-full h-[100vh] bg-[#1F252E] flex flex-col flex__center slide-bottom">
                            <IoIosClose fontSize={45} className="overlay__close text-white cursor-pointer absolute top-5 right-5" onClick={() => setToggleMenu(false)} />
                            <ul className="app__navbar-smallscreen_links list-none text-white text-2xl mt-20">
                                <li><a href="/" onClick={() => setToggleMenu(false)}>Collections</a></li>
                                <li><a href="#brand" onClick={() => setToggleMenu(false)}>Brand</a></li>
                                <li><a href="#new" onClick={() => setToggleMenu(false)}>New</a></li>
                                <li><a href="#sales" onClick={() => setToggleMenu(false)}>Sales</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>

    )
}

export default Header;
