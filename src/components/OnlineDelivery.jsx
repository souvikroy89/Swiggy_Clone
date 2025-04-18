import { useEffect, useState } from "react";
import Card from "./Card";
const OnlineDelivery = () => {
    const [AllSlider, setAllSlider] = useState([]);

    useEffect(() => {
        fetch("restaurantChains.json")
            .then(res => res.json())
            .then(data => setAllSlider(data))
    }, [])
    return (
        <div className="pb-[40px]">
            <div>
                <div className="flex justify-between items-center my-3 px-[150px]">
                    <div>
                        <h1 className="font-bold text-xl">Restaurants with online food delivery in Kolkata</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-3 px-[150px]">
                {
                    AllSlider.map(singleData => <Card
                        key={singleData.key}
                        singleData={singleData}


                    ></Card>)

                }



            </div>
        </div>
    )
}

export default OnlineDelivery