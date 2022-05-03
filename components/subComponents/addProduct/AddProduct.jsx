import React, { useState, useEffect, useCallback, useRef } from "react";

/* axios */
import axios from "axios";
import { createURL } from "../../../userapi/UserApi";

/* Icons */
import { IoIosClose } from "react-icons/io";

const AddProduct = ({ showModal, setShowModal }) => {

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    // useCallback
    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);

    /* State Management */
    const [products, setProducts] = useState("");
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productStatus, setProductStatus] = useState("");

    // Error Messages
    const [error, setError] = useState("");

    // Add Product using axios
    const handleAddProduct = async (e) => {
        e.preventDefault();

        return axios.post(
            createURL,
            { product_name: productName, product_description: productDesc, quantity: productQuantity, price: productPrice, status: productStatus }
        )
            .then((res) => {
                setProducts(res);
                window.location.reload();
            })
            .catch((err) => {
                setError(err.response.data.data.error);
            })
    }
e
    return (
        <div>
            {showModal ? (
                <div className="add__product__container w-screen h-screen bg-gray-800 fixed z-[99]" onClick={closeModal} ref={modalRef}>

                    {/* Main Modal */}
                    <div className="add__product--modal -mt-[15rem] bg-white rounded-xl max-w-full w-[35%] h-[425px] custom:w-[95%] custom:h-[375px]">
                        <div className="flex items-center justify-center px-4 h-[350px] custom:h-[250px] sm:px-6 lg:px-8">
                            <div className="max-w-md w-full space-y-8 mt-10 custom:mt-[7.5rem]">
                                <div className="flex gap-4 flex-row-reverse">
                                    <h2 className="cursor-pointer"><IoIosClose fontSize={30} color="#57110c" onClick={() => setShowModal((prev) => !prev)} /></h2>
                                    <h2 className="mt-6 text-center text-3xl font-bold text-black custom:text-xl">Enter Product Details Below</h2>
                                </div>
                                <form className="mt-8 space-y-6 custom:mt-2">
                                    <div className="rounded-md shadow-sm -space-y-px">

                                        <div className="flex justify-center items-center text-center mb-4">
                                            {error ? (
                                                <span className="text-red-800 font-semibold text-xl">{error}</span>
                                            ) : null}
                                        </div>

                                        {/* First group */}
                                        <div className="flex gap-2 justify-center items-center">
                                            <div>
                                                <label htmlFor="product-name" className="sr-only">
                                                    Product Name
                                                </label>
                                                <input
                                                    value={productName}
                                                    onChange={(e) => setProductName(e.target.value)}
                                                    id="product-name"
                                                    name="product-name"
                                                    type="text"
                                                    autoComplete="product-name"
                                                    required
                                                    className="add__product--input appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 custom:w-[85%] custom:text-base custom:py-1 sm:text-sm"
                                                    placeholder="Name *"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="status" className="sr-only">
                                                    Status
                                                </label>
                                                <input
                                                    value={productStatus}
                                                    onChange={(e) => setProductStatus(e.target.value)}
                                                    id="status"
                                                    name="status"
                                                    type="text"
                                                    autoComplete="status"
                                                    required
                                                    className="add__product--input appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 custom:text-base custom:py-1 sm:text-sm"
                                                    placeholder="Status *"
                                                />
                                            </div>

                                        </div>

                                        <br />

                                        {/* Second group */}
                                        <div className="flex gap-2 justify-center items-center">
                                            <div>
                                                <label htmlFor="quantity" className="sr-only">
                                                    Quantity
                                                </label>
                                                <input
                                                    value={productQuantity}
                                                    onChange={(e) => setProductQuantity(e.target.value)}
                                                    id="quantity"
                                                    name="quantity"
                                                    type="number"
                                                    autoComplete="quantity"
                                                    min={0}
                                                    required
                                                    className="add__product--input appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 custom:w-[85%] custom:text-base custom:py-1 sm:text-sm"
                                                    placeholder="Quantity *"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="price" className="sr-only">
                                                    Price
                                                </label>
                                                <input
                                                    value={productPrice}
                                                    onChange={(e) => setProductPrice(e.target.value)}
                                                    id="price"
                                                    name="price"
                                                    type="text"
                                                    autoComplete="price"
                                                    required
                                                    className="add__product--input appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 custom:w-[85%] custom:text-base custom:py-1 sm:text-sm"
                                                    placeholder="Price *"
                                                />
                                            </div>
                                        </div>

                                        <br />

                                        {/* Third group */}
                                        <div className="">
                                            <div>
                                                <label htmlFor="product-desc" className="sr-only">
                                                    Product Description
                                                </label>
                                                <input
                                                    value={productDesc}
                                                    onChange={(e) => setProductDesc(e.target.value)}
                                                    id="product-desc"
                                                    name="product-desc"
                                                    type="text"
                                                    autoComplete="product-desc"
                                                    required
                                                    className="add__product--input appearance-none relative block w-[95%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 custom:w-[85%] custom:text-base custom:py-1 sm:text-sm"
                                                    placeholder="Description *"
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex justify-center items-center gap-2">
                                        <button
                                            type="submit"
                                            onClick={(e) => handleAddProduct(e)}
                                            className="group relative w-full flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-[#101927] hover:bg-[#1F252E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 custom:mb-4"
                                        >
                                            Add Product
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div >
            ) : null}
        </div >
    )
}

export default AddProduct;
