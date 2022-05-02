import React from 'react'

const Reviews = () => {
    return (
        <div>
            <p className="text-white uppercase font-semibold text-center tracking-widest text-lg">Reviews</p>
            <h1 className="text-white capitalize font-semibold text-center trakding-widest text-[3rem] mt-2 custom:text-4xl sm:text-4xl">What our clients say</h1>
            <br /><br />

            <div className="slider__container">
                <div className="slider__track text-black">

                    {/* Data */}
                    <div className="slider__track--data w-[375px] h-[350px] bg-gray-100 rounded-2xl">
                        Test 1
                    </div>
                    <div className="slider__track--data w-[375px] h-[350px] bg-gray-100 rounded-2xl">
                        Test 2
                    </div>
                    <div className="slider__track--data w-[375px] h-[350px] bg-gray-100 rounded-2xl">
                        Test 3
                    </div>
                    <div className="slider__track--data w-[375px] h-[350px] bg-gray-100 rounded-2xl">
                        Test 4
                    </div>
                    <div className="slider__track--data w-[375px] h-[350px] bg-gray-100 rounded-2xl">
                        Test 5
                    </div>

                    {/* Duplicate */}
                    <div className="slider__track--data w-[375px] h-[350px] bg-gray-100 rounded-2xl">
                        Test 1
                    </div>
                    <div className="slider__track--data w-[375px] h-[350px] bg-gray-100 rounded-2xl">
                        Test 2
                    </div>
                    <div className="slider__track--data w-[375px] h-[350px] bg-gray-100 rounded-2xl">
                        Test 3
                    </div>
                    <div className="slider__track--data w-[375px] h-[350px] bg-gray-100 rounded-2xl">
                        Test 4
                    </div>
                    <div className="slider__track--data w-[375px] h-[350px] bg-gray-100 rounded-2xl">
                        Test 5
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reviews
