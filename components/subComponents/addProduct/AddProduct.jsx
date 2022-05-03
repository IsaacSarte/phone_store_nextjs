import React, { useState, useEffect, useCallback, useRef } from "react";

const AddProduct = (props) => {

    // Modal Props
    const { showModal, setShowModal } = props;

    const modalRef = useRef();

    console.log(showModal);

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

    return (
        <div>
            {showModal ? (
                <div className="add__product__container w-screen h-screen bg-gray-800 fixed z-[99]" onClick={closeModal} ref={modalRef}>

                    {/* Main Modal */}
                    <div className="add__product--modal -mt-[15rem] bg-white rounded-xl max-w-full w-[35%] h-[350px] custom:w-[90%] custom:h-[250px]">

                    </div>

                </div>
            ) : null}
        </div>
    )
}

export default AddProduct;
