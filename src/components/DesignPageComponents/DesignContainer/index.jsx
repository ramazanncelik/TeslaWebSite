import TowHitch from '../TowHitch';
import Wheel from '../Wheel';
import OuterColor from '../OuterColor';
import InteriorColor from '../InteriorColor';
import SeatingLayout from '../SeatingLayout';
import EnhancedAutoPilot from '../EnhancedAutoPilot';
import FullSelfDrivingCapability from '../FullSelfDrivingCapability';
import enhancedAutoPilotInfo from '../../../utils/enhancedAutoPilotInfo'
import fullSelfDrivingCapabilityInfo from '../../../utils/fullSelfDrivingCapabilityInfo'
import { useState } from 'react';

const DesignContainer = ({ modelData, setModelData, setOrderData }) => {

    const [currentOuterColorIndex, setCurrentOuterColorIndex] = useState(0);

    const keepPaying = async () => {
        await setOrderData({
            ModelName: modelData.name,
            Price: modelData.price,
            ImageUrl: modelData.mainImages[currentOuterColorIndex],
            Range: modelData.range,
            TopSpeed: modelData.topSpeed,
            MilS: modelData.milS,
            InteriorColour: modelData.interiorColour,
            SeatingLayout: modelData.seatingLayout.seat,
            OuterColour: modelData.outerColour,
            Wheel: modelData.wheel,
            EstimatedDelivery: modelData.estimatedDelivery,
            TowHitch: modelData.towHitch,
            EnhancedAutoPilot: modelData.enhancedAutoPilot,
            FullSelfDrivingCapability: modelData.fullSelfDrivingCapability,
        });
    }

    return (
        <div className={`py-16 flex-1 overflow-auto bg-white`}>
            <div className={`flex flex-col space-y-8 m-auto max-w-screen-xl h-auto px-4 select-none`}>
                <img
                    className='w-full'
                    alt="image1"
                    src={modelData.mainImages[currentOuterColorIndex]} />

                <div className='w-full h-max flex items-center justify-center text-black font-semibold text-3xl'>
                    {modelData.name}
                </div>

                <div className='w-full h-max flex flex-row space-x-12 items-center justify-center'>
                    <div className='flex flex-col space-y-2 items-center'>
                        <span className='text-xl font-semibold'>
                            {modelData.range} mil
                        </span>

                        <span className='text-sm text-gray-500'>
                            Menzil (tahmini)
                        </span>
                    </div>

                    <div className='flex flex-col space-y-2 items-center'>
                        <span className='text-xl font-semibold'>
                            {modelData.topSpeed} mil/saat
                        </span>

                        <span className='text-sm text-gray-500'>
                            Azami Hız
                        </span>
                    </div>

                    <div className='flex flex-col space-y-2 items-center'>
                        <span className='text-xl font-semibold'>
                            {modelData.milS} saniye
                        </span>

                        <span className='text-sm text-gray-500'>
                            0-60 mil/s
                        </span>
                    </div>
                </div>

                <div className='w-full-sm h-max flex flex-col space-y-2 select-none'>
                    <p className='text-lg font-semibold'>
                        Arkadan İtiş
                    </p>

                    <div className='w-full flex flex-row text-black text-lg p-3 rounded-md border-2 border-blue-600 cursor-pointer'>
                        <span className='flex flex-1'>
                            Model Y
                        </span>
                        <span>
                            32.890 Dolar
                        </span>
                    </div>

                    <p className='text-lg font-semibold'>
                        Arkadan İtiş
                    </p>

                    <div className='w-full flex flex-row text-gray-500 text-lg p-3 rounded-md border border-gray-500 cursor-pointer'>
                        <span className='flex flex-1'>
                            Model Y Long Range
                        </span>
                        <span>
                            37.890 Dolar
                        </span>
                    </div>

                    <div className='w-full flex flex-row text-gray-500 text-lg p-3 rounded-md border border-gray-500 cursor-pointer'>
                        <span className='flex flex-1'>
                            Model Y Performance
                        </span>
                        <span>
                            41.390 Dolar
                        </span>
                    </div>
                </div>

                <OuterColor
                    modelData={modelData}
                    setModelData={setModelData}
                    currentOuterColorIndex={currentOuterColorIndex}
                    setCurrentOuterColorIndex={setCurrentOuterColorIndex}
                />

                <Wheel
                    modelData={modelData}
                    setModelData={setModelData}
                />

                <TowHitch
                    modelData={modelData}
                    setModelData={setModelData}
                />

                <InteriorColor
                    modelData={modelData}
                    setModelData={setModelData}
                />

                <SeatingLayout
                    modelData={modelData}
                    setModelData={setModelData}
                />

                <EnhancedAutoPilot
                    modelData={modelData}
                    setModelData={setModelData}
                    enhancedAutoPilotInfo={enhancedAutoPilotInfo}
                    fullSelfDrivingCapabilityInfo={fullSelfDrivingCapabilityInfo}
                />

                <FullSelfDrivingCapability
                    modelData={modelData}
                    setModelData={setModelData}
                    enhancedAutoPilotInfo={enhancedAutoPilotInfo}
                    fullSelfDrivingCapabilityInfo={fullSelfDrivingCapabilityInfo}
                />

                <div className='w-full h-max flex flex-col space-y-4 items-center justify-center'>
                    <p className='text-3xl font-semibold text-center'>
                        {modelData.name} aracınızı sipariş edin
                    </p>
                    <p className='text-xl text-gray-500 text-center'>
                        {modelData.estimatedDelivery}
                    </p>

                    <p className='text-xl text-black text-center'>
                        {modelData.price} Dolar Tahmini Fiyatlara ÖTV ve KDV dahildir.
                    </p>

                    <button onClick={() => keepPaying()} className='w-full md:w-96 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600'>
                        Ödemeye Devam Edin
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DesignContainer