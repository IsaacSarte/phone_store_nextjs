import React from 'react';

/* Images */
import Image from 'next/image';
import samsung from '../../assets/images/samsung.png';
import iphone from '../../assets/images/iphone.png';

const Collections = () => {
    return (
        <div id="collections">

            {/* PC View */}
            <div className="flex justify-center items-center gap-12 text-white custom:hidden sm:hidden">
                {/* left side */}
                <div>
                    <Image
                        src={samsung}
                        alt="samsung_phone"
                    />
                </div>
                {/* middle */}
                <div className="mt-16">
                    <h1 className="text-[5.75rem] tracking-widest font-semibold ml-10">Featured</h1>
                    <div className="mt-4 iphone__img">
                        <Image
                            src={iphone}
                            alt="apple_phone"
                        />
                    </div>
                </div>
                {/* right side */}
                <div className="-ml-[10rem]">
                    <h1 className="text-[5.75rem] tracking-widest font-semibold">collection</h1>
                    <span className="font-semibold">
                        Our collection is vast with smartphones and accessories<br />
                        galore. Browse our website and you will be<br />
                        impressed by the selection and prices we offer to each retailers.
                    </span>
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex flex-col justify-center text-center items-center text-white custom:flex sm:flex lg:hidden xl:hidden 2xl:hidden">
                <div>
                    <h1 className="uppercase font-semibold text-center text-4xl tracking-widest mb-2">Featured</h1>
                    <h1 className="uppercase font-semibold text-center text-4xl tracking-widest">Collection</h1>
                </div>
                <div className="mt-8">
                    <Image
                        src={samsung}
                        alt="samsung_phone"
                        className="w-[100px]"
                    />
                </div>
                <div className="my-4 p-4">
                    <span className="font-semibold">
                        Our collection is vast with smartphones and accessories<br />
                        galore. Browse our website and you will be<br />
                        impressed by the selection and prices we offer to each retailers.
                    </span>
                </div>
                <div>
                    <Image
                        src={iphone}
                        alt="apple_phone"
                        className="w-[100px]"
                    />
                </div>
            </div>

            <br /><br />

        </div>

    )
}

export default Collections;
