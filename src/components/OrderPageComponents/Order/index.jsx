import { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Order = ({ orderData }) => {

    const [isDetailsVisible, setIsDetailsVisible] = useState(false)

    const changeDetailVisible = async () => {
        await setIsDetailsVisible(!isDetailsVisible);
    }

    return (
        <div className='w-full h-auto rounded-lg py-2 px-4 flex flex-col space-y-8 border border-gray-200'>
            <div className='w-full flex flex-row space-x-2 items-center'>
                <img
                    src={orderData.ImageUrl}
                    alt="smallImage"
                    className='w-24 h-12 rounded-lg'
                />

                <div className='flex flex-1 flex-col'>
                    <div className='text-black font-semibold'>
                        {orderData.ModelName}
                    </div><div className='text-gray-500'>
                        {orderData.Date}
                    </div>
                </div>

                <div className='text-green-500 font-semibold'>
                    {orderData.Price}$
                </div>

                {isDetailsVisible ?
                    <FaArrowUp onClick={() => changeDetailVisible()} size={28} className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer' /> :
                    <FaArrowDown onClick={() => changeDetailVisible()} size={28} className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer' />}
            </div>

            {isDetailsVisible &&
                <div className='w-full h-auto flex flex-row space-x-1'>
                    <div className='flex flex-1 items-center justify-center'>
                        <img
                            src={orderData.ImageUrl}
                            alt="bigImage"
                            className='w-full rounded-lg'
                        />
                    </div>

                    <div className='flex flex-1 flex-col space-y-1'>
                        <div className='w-full text-lg text-gray-500'>
                            {orderData.OuterColour} Renk
                        </div>

                        <div className='w-full text-lg text-gray-500'>
                            {orderData.Wheel.name}
                        </div>

                        <div className='w-full text-lg text-gray-500'>
                            {orderData.SeatingLayout} Koltuklu İç Mekan
                        </div>

                        <div className='w-full text-lg text-gray-500'>
                            Otopilot
                        </div>

                        <div className='w-full text-lg text-gray-500'>
                            {orderData.InteriorColour} İç Mekan
                        </div>

                        {orderData.TowHitch &&
                            <div className='w-full text-lg text-gray-500'>
                                Çeki Demiri
                            </div>}

                        {orderData.EnhancedAutoPilot &&
                            <div className='w-full text-lg text-gray-500'>
                                Geliştirilmiş Otopilot
                            </div>}

                        {orderData.FullSelfDrivingCapability &&
                            <div className='w-full text-lg text-gray-500'>
                                Full Self-Driving Kabiliyeti
                            </div>}
                    </div>
                </div>}
        </div>
    )
}

export default Order