import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

const ResturantList = () => {
    const [ChainSlider, setChainSlider] = useState([]);

    useEffect(() => {
        fetch("restaurantChains.json")
            .then(res => res.json())
            .then(data => setChainSlider(data))
    }, [])
    return (
        <>
            <div>
                <div className="flex justify-between items-center my-3 px-[150px]">
                    <div>
                        <h1 className="font-bold text-xl">Top restaurant chains in Kolkata</h1>
                    </div>
                    <div className='flex'>
                        <div className="w-[30px] h-[30px] rounded-full bg-[#D8D9DA] mx-2 flex justify-center items-center cursor-pointer"><FaArrowLeft /></div>
                        <div className="w-[30px] h-[30px] rounded-full bg-[#D8D9DA] mx-2 flex justify-center items-center cursor-pointer"><FaArrowRight /></div>

                    </div>

                </div>
                <div className="px-[150px]">
                    <div className="flex gap-4 overflow-hidden">
                        {
                            ChainSlider.map(singleData => <Card
                                key={singleData.key}
                                singleData={singleData}


                            ></Card>)

                        }


                    </div>
                    <hr className="my-9 px-[150px]" />
                </div>
            </div>
        </>
    )
}

export default ResturantList