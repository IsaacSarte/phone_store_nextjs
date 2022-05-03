import React, { useState, useEffect } from 'react';

/* axios */
import axios from "axios";
import { baseURL } from '../../userapi/UserApi';

/* Icons */
import { HiOutlineViewGridAdd } from 'react-icons/hi';

/* Components */
import ProductList from '../subComponents/productList/ProductList';
import AddProduct from '../subComponents/addProduct/AddProduct';

const Products = () => {

    /* State Management */
    const [getProducts, setGetProducts] = useState([]);

    /* useEffect */
    useEffect(() => {
        axios.get(`${baseURL}/products`)
            .then(res => {
                console.log(res.data.data);
                setGetProducts(res.data.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // Modal for Add Channel State Management
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <>
            <AddProduct
                onclick={openModal}
                showModal={showModal}
                setShowModal={setShowModal}
            />
            {/* Add Product Open Modal */}
            <div className="flex justify-end text-right max-w-[90rem] ml-10 w-full mt-20 mb-8 custom:w-[90%] custom:ml-0 sm:w-[90%] md:w-[90%]">
                <div className="flex gap-2 items-center justify-center cursor-pointer">
                    <HiOutlineViewGridAdd fontSize={30} onClick={openModal} />
                    <h1 className="text-xl font-semibold cursor-pointer" onClick={openModal}>Add More Products</h1>
                </div>
            </div>
            <div className="product__table relative max-w-7xl overflow-x-auto shadow-md custom:w-[90%] sm:w-[90%] md:w-[90%]">
                <ProductList
                    getProducts={getProducts}
                />
            </div>
            <br /><br /><br /><br />
        </>
    )
}

export default Products;
