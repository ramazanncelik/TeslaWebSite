import React, { useState } from 'react'

const Wheel = ({ modelData, setModelData }) => {

    const [currentWheelIndex, setCurrentWheelIndex] = useState(0);

    const changeWheel = async (index) => {
        const newModelData = {
            ...modelData,
            price: modelData.price - modelData.wheels[currentWheelIndex].price,
            wheel: { name: modelData.wheels[index].wheelName, price: modelData.wheels[index].price }
        }
        await setModelData({
            ...newModelData,
            price: newModelData.price + modelData.wheels[index].price,
            range: index === 0 ? 260 : 242
        });
        await setCurrentWheelIndex(index)
    }

    return (
        <div className='w-full h-auto flex flex-col space-y-4'>
            <img
                className='w-full'
                alt="image2"
                src={modelData.wheelDesignImages[currentWheelIndex]} />

            <p className='w-full text-center text-2xl font-semibold'>
                Jant
            </p>

            <div className='w-full h-max flex flex-row space-x-5 items-center justify-center'>
                {modelData.wheels.map((wheel, index) => {
                    return (
                        <img
                            key={index}
                            onClick={() => changeWheel(index)}
                            className={`w-12 h-12 p-1 rounded-full cursor-pointer ${wheel.wheelName === modelData.wheel.name && "border-2 border-blue-500"}`}
                            alt="image2"
                            src={wheel.imageUrl} />
                    )
                })}
            </div>

            <div className='w-full h-max flex flex-col space-y-2 items-center justify-center'>
                <div className='w-full flex flex-row space-x-4 items-center justify-center'>
                    <span className='text-black font-semibold'>
                        {modelData.wheel.name}
                    </span>

                    <span className='text-gray-500'>
                        {modelData.wheel.price !== 0 ? `$${modelData.wheel.price}` : "Fiyata Dahil"}
                    </span>
                </div>

                <p className='text-sm text-gray-500 w-full text-center'>
                    Dört Mevsim Lastikleri
                </p>

                <p className='text-sm text-gray-500 w-full text-center'>
                    Menzil (tahmini): {modelData.range} mil
                </p>
            </div>
        </div>
    )
}

export default Wheel