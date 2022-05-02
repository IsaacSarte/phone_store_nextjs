import React from 'react';

/* Images */
import Image from 'next/image';
import sb from '../../assets/images/sb.png';
import ab from '../../assets/images/ab.png';
import mb from '../../assets/images/mb.png';
import vb from '../../assets/images/vb.png';
import ob from '../../assets/images/ob.png';
import syb from '../../assets/images/syb.png';

const Brands = () => {
    return (
        <div id="brands">
            <h1 className="text-center text-white text-[3rem] font-semibold tracking-wider custom:text-4xl sm:text-4xl">Be a retailer of our partner brands</h1>
            <br /><br />
            <div className="flex gap-10 justify-center items-center custom:p-5">
                <Image
                    src={sb}
                    alt="samsung_brand"
                />
                <Image
                    src={ab}
                    alt="apple_brand"
                />
                <Image
                    src={mb}
                    alt="xiaomi_brand"
                />
            </div>
            <br />
            <div className="flex gap-10 justify-center items-center custom:p-5">
                <Image
                    src={vb}
                    alt="vivo_brand"
                />
                <Image
                    src={syb}
                    alt="sony_brand"
                />
                <Image
                    src={ob}
                    alt="oppo_brand"
                />
            </div>
        </div>
    )
}

export default Brands;
