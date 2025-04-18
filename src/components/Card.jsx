
const Card = ({ singleData }) => {
    return (

        <div className=" w-[273px] shrink-0 overflow-hidden rounded-xl cursor-pointer   ">
            <div className="flex h-[182px] rounded-[15px] relative">
                <img className="w-full h-full object-cover" src={"http://localhost:5173/images/" + singleData.image} alt="" />
                <div className="image-overlay absolute w-full h-full flex items-end p-2 text-xl font-bold text-[#ffff]">
                    {singleData.offer}
                </div>
            </div>
            <div className="text-xl font-bold">
                {singleData.title}
            </div>
            <div className="text-x font-bold">
                {singleData.rating} . {singleData.minTime}-{singleData.maxTime} mins
            </div>
            <div>
                {singleData.name} <br /> {singleData.place}
            </div>
        </div>
    )
}

export default Card