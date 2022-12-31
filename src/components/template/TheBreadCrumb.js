import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";



const featuredProducts = [
    "https://cdn.mos.cms.futurecdn.net/UEEkgUpRTeWcwpGaYpPJES.jpg",
    "https://c.s-microsoft.com/en-us/CMSImages/1920_Panel01_PriorityFeature_Laptops.jpg?version=2e5e9c24-27f2-0032-2f8f-468ed0d561d8",
    "https://media.wired.com/photos/629e50bebcb306bfa4e198ce/191:100/w_2400,h_1256,c_limit/Macbook-Air-2022-Gear.jpg",
];

let count = 0;
let slideInterval;

const TheBreadCrumb = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 3000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };

    return (
        <div ref={slideRef} className="select-none relative mx-4 my-8  ">
            <div >
                <img src={featuredProducts[currentIndex]} alt="" className="w-11/12 pr-28 h-[500px] opacity-90 rounded-md" />
            </div>

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnPrevClick}
                >
                    <AiOutlineVerticalLeft size={30} />
                </button>
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnNextClick}
                >
                    <AiOutlineVerticalRight size={30} />
                </button>
            </div>
        </div>
    );
}

export default TheBreadCrumb;