import React from 'react';

import Link from "next/link";

/* Images */
import Image from 'next/image'
import home from '../assets/images/home.png';

/* Icons */
import { RiShoppingBagFill } from "react-icons/ri";

/* Components */
import Collections from './subComponents/Collections';

const Main = () => {

    return (
        <>
            <div className="bg-[#1F252E]">
                <br /><br />
                <div className="flex justify-center items-center bg-[#1F252E] custom:flex-col-reverse">
                    {/* left side */}
                    <div className="flex flex-col text-white">
                        <h1 className="text-4xl font-semibold mb-8">Trendy Collection</h1>
                        <p className="text-lg font-semibold">Organize orders now with us.</p>
                        <p className="text-lg font-semibold mb-8">Track your customers.</p>
                        <a href="#" className="px-2 py-3 w-[200px] bg-white tracking-wide text-black text-center font-semibold text-lg mb-8">Get Started</a>
                        <div className="flex gap-8 text-center">
                            <div>
                                <h2 className="text-4xl font-semibold mb-2">1000</h2>
                                <p className="font-semibold">Partner Companies</p>
                            </div>
                            <div>
                                <h2 className="text-4xl font-semibold mb-2">1.5M</h2>
                                <p className="font-semibold">Customers</p>
                            </div>
                        </div>
                    </div>
                    {/* middle */}
                    <div>
                        <Image
                            src={home}
                            alt="samsung_image"
                        />
                    </div>
                    {/* right side */}
                    <div className="flex flex-col text-white gap-4">
                        <div className="w-[200px] py-8 bg-gray-200 text-center rounded-[1.5rem] mb-4">
                            <h2 className="text-4xl font-bold mb-4 text-black">12M +</h2>
                            <p className="text-base font-semibold text-gray-800">Worldwide Product <br /> sale per year</p>
                        </div>
                        <div className="">
                            <h2 className="uppercase tracking-wide text-5xl mb-4">Special Offer</h2>
                            <h1 className="text-[4rem] text-yellow-500 font-semibold">Smart Phone</h1>
                            <h1 className="text-[4rem] text-yellow-500 font-semibold">Sale</h1>
                        </div>
                        <div className="ml-10 mb-4 flex items-center gap-8">
                            <div className="bg-gray-200 w-[80px] py-[12px] rounded-[50%] flex justify-center">
                                <div className="bg-white w-[50px] py-[8px] rounded-[50%] flex justify-center order__btn">
                                    <Link href="/post/order"><RiShoppingBagFill fontSize={24} color="#5a5a5a" /></Link>
                                </div>
                            </div>
                            <div>
                                <a href="#" className="px-10 py-4 w-[200px] bg-gray-200 rounded-2xl text-black font-semibold text-lg tracking-wider">Best offers →</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />

                {/* Collections */}
                <Collections />

            </div>
        </>
    )
}

export default Main;
