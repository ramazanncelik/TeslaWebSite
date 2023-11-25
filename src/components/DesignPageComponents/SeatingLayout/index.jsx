import React from 'react'

const SeatingLayout = ({ modelData, setModelData }) => {
    return (
        <div className='w-full h-auto flex flex-col space-y-4 items-center justify-center'>
            <p className='text-black text-2xl font-semibold'>
                Oturma Düzeni
            </p>

            <div className='w-16 h-16 p-1 border-2 border-blue-500 rounded-full flex items-center justify-center'>
                <p className='w-12 h-12 p-2 rounded-full bg-gray-200 text-black text-xl font-bold flex items-center justify-center'>
                    {modelData.seatingLayout.seat}
                </p>
            </div>

            <div className='flex flex-row space-x-2 items-center justify-center'>
                <span className='text-black text-md font-semibold'>
                    {modelData.seatingLayout.seat} Koltuklu İç Mekan
                </span>

                <span className='text-gray-500 text-sm'>
                    {modelData.seatingLayout.price !== 0 ?
                        "$" + modelData.seatingLayout.price
                        :
                        "Fiyata Dahil"}
                </span>
            </div>

            <ol className='flex flex-col space-y-2'>
                {modelData.seatingLayout.features.map(feature => {
                    return (
                        <li key={feature.id} className='flex flex-row items-center space-x-2'>
                            <span className='w-1 h-1 bg-black rounded-full' />
                            <span>
                                {feature.description}
                            </span>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default SeatingLayout