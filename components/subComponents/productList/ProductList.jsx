import React from 'react';

const ProductList = ({ getProducts = [] }) => {
    return (
        <div className="">
            <table className="w-full text-left">
                <thead className="text-lg bg-gray-300 rounded text-black font-semibold capitalize">
                    <tr className="text-md whitespace-nowrap">
                        <th scope="col" className="px-6 py-3">
                            Product Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {getProducts.length ? (
                        getProducts.map((value, index) => (
                            <tr key={index} className="bg-white border-b dark:border-gray-700 dark:hover:bg-gray-100">
                                <td className="px-6 py-4">
                                    <strong>{value.product_name}</strong>
                                </td>
                                <td className="px-6 py-4">
                                    <strong>{value.product_description}</strong>
                                </td>
                                <td className="px-6 py-4">
                                    <strong>{value.quantity}</strong>
                                </td>
                                <td className="px-6 py-4">
                                    <strong>{value.price}</strong>
                                </td>
                                <td className="px-6 py-4">
                                    <strong>{value.status}</strong>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <>
                            <td className="text-center font-bold text-lg p-8" colSpan="5">
                                No Product Record Found!
                            </td>
                        </>
                    )}
                </tbody>
            </table>
        </div>

    )
}

export default ProductList
