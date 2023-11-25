import { useEffect, useState } from "react";

const InteriorColor = ({ modelData, setModelData }) => {

    const [currentInteriorColorIndex, setCurrentInteriorColorIndex] = useState(0);

    const changeInteriorColor = async (index) => {
        const newModelData = {
            ...modelData,
            price: modelData.price - modelData.interiorColours[currentInteriorColorIndex].price,
            interiorColour: modelData.interiorColours[index].colorName
        }
        await setModelData({
            ...newModelData,
            price: newModelData.price + modelData.interiorColours[index].price
        });
        await setCurrentInteriorColorIndex(index)
    }

    useEffect(() => {
        const getCurrentInteriorColorIndex = async () => {
            const colorIndex = modelData.interiorColours.findIndex(color => color.colorName === modelData.interiorColour);
            setCurrentInteriorColorIndex(colorIndex);
        };

        getCurrentInteriorColorIndex();
    }, [modelData.interiorColours, modelData.interiorColour, setCurrentInteriorColorIndex]);

    return (
        <div className='w-full h-auto flex flex-col space-y-4'>
            <img
                className='w-full'
                alt="interiorDesignImage"
                src={modelData.interiorDesignImages[currentInteriorColorIndex]} />

            <p className='w-full text-center text-2xl font-semibold'>
                İç Mekan
            </p>

            <div className='w-full h-max flex flex-row space-x-5 items-center justify-center'>
                {modelData.interiorColours.map((interiorColour, index) => {
                    return (
                        <img
                            key={index}
                            onClick={() => changeInteriorColor(index)}
                            className={`w-12 h-12 p-1 rounded-full cursor-pointer ${index === currentInteriorColorIndex && "border-2 border-blue-500"}`}
                            alt="image2"
                            src={interiorColour.imageUrl} />
                    )
                })}
            </div>

            <div className='w-full flex flex-row space-x-4 items-center justify-center'>
                <span className='text-black font-semibold'>
                    {modelData.interiorColours[currentInteriorColorIndex].colorName}
                </span>

                <span className='text-gray-500'>
                    {modelData.outerColours[currentInteriorColorIndex].price !== 0 ?
                        "$" + modelData.interiorColours[currentInteriorColorIndex].price
                        :
                        "Fiyata Dahil"}
                </span>
            </div>
        </div>
    )
}

export default InteriorColor