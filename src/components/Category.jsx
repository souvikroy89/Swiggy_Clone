import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Category = () => {
    const [slide, setSlide] = useState(0);
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch("category.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    const prevSlide = () => {
        if (slide == 0) return false;
        setSlide(slide - 4);
    }
    const nextSlide = () => {
        console.log(category.length)
        if (category.length - 8 == slide) return false;
        setSlide(slide + 4);
    }
    return (
        <>
            <div>

                <div className="flex justify-between items-center my-3 px-[150px]">
                    <div>
                        <h1 className="font-bold text-xl">What's on your mind?</h1>
                    </div>
                    <div className="flex">
                        <div onClick={prevSlide} className="w-[30px] h-[30px] rounded-full bg-[#D8D9DA] mx-2 flex justify-center items-center cursor-pointer"><FaArrowLeft /></div>
                        <div onClick={nextSlide} className="w-[30px] h-[30px] rounded-full bg-[#D8D9DA] mx-2 flex justify-center items-center cursor-pointer"><FaArrowRight /></div>
                    </div>
                </div>
                <div className="px-[150px]">
                    <div className="flex overflow-hidden">
                        {
                            category.map(
                                (cat, index) => {
                                    return (
                                        <div style={{
                                            transform: `translateX(-${slide * 100}%)`
                                        }} key={index} className="w-[150px] shrink-0 duration-500">
                                            <img src={"http://localhost:5173/images/" + cat.image} alt="" />
                                        </div>
                                    )
                                })
                        }

                    </div>
                    <hr className="my-9 px-[150px]" />
                </div>

            </div>



        </>
    )
}

export default Category