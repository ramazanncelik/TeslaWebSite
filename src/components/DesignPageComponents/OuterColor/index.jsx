import { useEffect } from "react";

const OuterColor = ({ modelData, setModelData, currentOuterColorIndex, setCurrentOuterColorIndex }) => {

    const changeOuterColor = async (index) => {
        const newModelData = {
            ...modelData,
            price: modelData.price - modelData.outerColours[currentOuterColorIndex].price,
            outerColour: modelData.outerColours[index].colorName
        }
        await setModelData({
            ...newModelData,
            price: newModelData.price + modelData.outerColours[index].price
        });
        await setCurrentOuterColorIndex(index)
    }

    useEffect(() => {
        const getCurrentOuterColorIndex = async () => {
            const colorIndex = modelData.outerColours.findIndex(color => color.colorName === modelData.outerColour);
            setCurrentOuterColorIndex(colorIndex);
        };

        getCurrentOuterColorIndex();
    }, [modelData.outerColours, modelData.outerColour, setCurrentOuterColorIndex]);

    return (
        <div className='w-full h-auto flex flex-col space-y-4'>
            <img
                className='w-full'
                alt="outerDesignImage"
                src={modelData.outerDesignImages[currentOuterColorIndex]} />

            <p className='w-full text-center text-2xl font-semibold'>
                Renk
            </p>

            <div className='w-full h-max flex flex-row space-x-5 items-center justify-center'>
                {modelData.outerColours.map((outerColour, index) => {
                    return (
                        <img
                            key={index}
                            onClick={() => changeOuterColor(index)}
                            className={`w-12 h-12 p-1 rounded-full cursor-pointer ${index === currentOuterColorIndex && "border-2 border-blue-500"}`}
                            alt="image2"
                            src={outerColour.imageUrl} />
                    )
                })}
            </div>

            <div className='w-full flex flex-row space-x-4 items-center justify-center'>
                <span className='text-black font-semibold'>
                    {modelData.outerColours[currentOuterColorIndex].colorName}
                </span>

                <span className='text-gray-500'>
                    {modelData.outerColours[currentOuterColorIndex].price !== 0 ?
                        "$" + modelData.outerColours[currentOuterColorIndex].price
                        :
                        "Fiyata Dahil"}
                </span>
            </div>
        </div>
    )
}

export default OuterColor