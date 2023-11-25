import React from 'react'

const TowHitch = ({ modelData, setModelData }) => {

    const changeTowHitch = async () => {
        if (modelData.towHitch) {
            const newModelData = {
                ...modelData,
                price: modelData.price - 1000,
                towHitch: false
            }
            await setModelData(newModelData);
        } else {
            const newModelData = {
                ...modelData,
                price: modelData.price + 1000,
                towHitch: true
            }
            await setModelData(newModelData);
        }
    }

    return (
        <div className='w-full h-max flex flex-col items-center justify-center space-y-2'>
            <p className='text-2xl text-black font-semibold'>
                Çeki Demiri
            </p>
            <p className='text-md text-black'>
                $1000
            </p>

            <p className='text-gray-500 text-md text-center'>
                1.600 kg'a kadar çekme kapasitesine sahip, yüksek mukavemetli, Sınıf II çelik çeki demiri
            </p>

            <button onClick={() => changeTowHitch()} className={`w-full md:w-96 py-2 rounded-lg ${modelData.towHitch ? "bg-gray-100 text-black hover:bg-gray-200" : "bg-blue-500 text-white hover:bg-blue-600"}`}>
                {modelData.towHitch ? "Çıkar" : "Ekle"}
            </button>
        </div>
    )
}

export default TowHitch