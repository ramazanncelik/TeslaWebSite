import { useEffect, useState } from 'react'
import teslaModels from '../../../../utils/teslaModels';
import { MdArrowBack } from 'react-icons/md';

const SelectCar = () => {

    const [selectionModel, setSelectionModel] = useState(null);
    const [modelData, setModelData] = useState(null);

    const models = [
        { id: 999, name: "Araç Seçiniz" },
        { id: 1, name: "Model Y" },
        { id: 2, name: "Model 3" },
        { id: 3, name: "Model S" },
        { id: 4, name: "Model X" },
    ]

    useEffect(() => {
        if (selectionModel) {
            const model = teslaModels.find(model => { return model.id === parseInt(selectionModel) });
            console.log(model)
            setModelData(model);
        } else {
            setModelData(null)
        }
    }, [selectionModel]);

    if (!modelData) {
        return (
            <div className='flex flex-1 flex-col'>
                <select
                    className='w-full p-3 rounded-lg border border-gray-400'
                    onChange={(e) => e.target.value !== 999 && setSelectionModel(e.target.value)}
                    defaultValue={models[0]}
                    value={selectionModel}>
                    {models.map(model => {
                        return (
                            <option key={model.id} value={model.id} selected={model.id !== 999}>
                                {model.name}
                            </option>
                        )
                    })}
                </select>
            </div>
        )
    } else {
        return (
            <div className='flex flex-1 flex-col space-y-2'>
                <div className='w-full'>
                    <MdArrowBack onClick={() => setSelectionModel(null)} size={32} className='p-1 rounded-full hover:bg-gray-200 cursor-pointer' />
                </div>

                <div className='w-full flex items-center justify-center'>
                    <img
                        className='w-full rounded-lg'
                        src={modelData.mainImages[0]}
                        alt={modelData.id} />
                </div>

                <div className='w-full text-black flex flex-row space-x-2'>
                    <span>
                        Name:
                    </span>

                    <span>
                        {modelData.name}
                    </span>
                </div>

                <div className='w-full text-black flex flex-row space-x-2'>
                    <span>
                        Menzil:
                    </span>

                    <span>
                        {modelData.range}
                    </span>
                </div>

                <div className='w-full text-black flex flex-row space-x-2'>
                    <span>
                        Azami Hız:
                    </span>

                    <span>
                        {modelData.topSpeed}
                    </span>
                </div>

                <div className='w-full text-black flex flex-row space-x-2'>
                    <span>
                        0-60 mil/saat:
                    </span>

                    <span>
                        {modelData.milS}
                    </span>
                </div>

                <div className='w-full text-black flex flex-row space-x-2'>
                    <span>
                        Fiyat:
                    </span>

                    <span>
                        {modelData.price} Dolar
                    </span>
                </div>
            </div>
        )
    }
}

export default SelectCar