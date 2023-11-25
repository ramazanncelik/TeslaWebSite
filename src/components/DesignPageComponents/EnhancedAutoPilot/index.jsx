import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ReactPlayer from 'react-player'

const EnhancedAutoPilot = ({ modelData, setModelData, enhancedAutoPilotInfo, fullSelfDrivingCapabilityInfo }) => {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const changeVideoIndex = async (type) => {
        if (type === "+") {
            if ((currentVideoIndex + 1) === enhancedAutoPilotInfo.videos.length) {
                const newIndex = 0;
                await setCurrentVideoIndex(newIndex);
            } else {
                const newIndex = currentVideoIndex + 1;
                console.log(newIndex)
                await setCurrentVideoIndex(newIndex);
            }
        } else {
            if (currentVideoIndex === 0) {
                const newIndex = enhancedAutoPilotInfo.videos.length - 1;
                await setCurrentVideoIndex(newIndex);
            } else {
                const newIndex = currentVideoIndex - 1;
                await setCurrentVideoIndex(newIndex);
            }
        }
    }

    const changeEnhancedAutoPilot = async () => {
        if (modelData.enhancedAutoPilot) {
            const newModelData = {
                ...modelData,
                price: modelData.price - enhancedAutoPilotInfo.price,
                enhancedAutoPilot: false,
                fullSelfDrivingCapability: false
            }
            await setModelData(newModelData);
        } else {
            if (modelData.fullSelfDrivingCapability) {
                const newModelData = {
                    ...modelData,
                    price: modelData.price + enhancedAutoPilotInfo.price - fullSelfDrivingCapabilityInfo.price,
                    enhancedAutoPilot: true,
                    fullSelfDrivingCapability: false
                }
                await setModelData(newModelData);
            } else {
                const newModelData = {
                    ...modelData,
                    price: modelData.price + enhancedAutoPilotInfo.price,
                    enhancedAutoPilot: true,
                }
                await setModelData(newModelData);
            }
        }
    }

    return (
        <div className='w-full h-max flex flex-col items-center justify-center space-y-2'>
            <div className="w-full h-max flex flex-col items-center justify-center space-y-2 mb-12 relative">
                <div className="w-max h-full absolute left-0 flex items-center">
                    <FaArrowLeft onClick={() => changeVideoIndex("-")} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer z-10" size={24} />
                </div>

                <ReactPlayer onEnded={() => changeVideoIndex("+")} style={{ maxWidth: '100%' }} playing url={enhancedAutoPilotInfo.videos[currentVideoIndex].videoUrl} />

                <p className="text-md text-black font-semibold">
                    {enhancedAutoPilotInfo.videos[currentVideoIndex].featureName}
                </p>

                <div className="w-max h-full absolute right-0 flex items-center">
                    <FaArrowRight onClick={() => changeVideoIndex("+")} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer z-10" size={24} />
                </div>
            </div>

            <p className='text-2xl text-black font-semibold'>
                Geliştirilmiş Otopilot
            </p>
            <p className='text-md text-black'>
                ${enhancedAutoPilotInfo.price}
            </p>

            <ol className='w-full md:w-96 flex flex-col space-y-2'>
                {enhancedAutoPilotInfo.features.map(feature => {
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

            <button onClick={() => changeEnhancedAutoPilot()} className={`w-full md:w-96 py-2 rounded-lg ${modelData.enhancedAutoPilot ? "bg-gray-100 text-black hover:bg-gray-200" : "bg-blue-500 text-white hover:bg-blue-600"}`}>
                {modelData.enhancedAutoPilot ? "Çıkar" : "Ekle"}
            </button>
        </div>
    )
}

export default EnhancedAutoPilot