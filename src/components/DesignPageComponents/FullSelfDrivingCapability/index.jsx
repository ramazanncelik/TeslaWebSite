const FullSelfDrivingCapability = ({ modelData, setModelData, fullSelfDrivingCapabilityInfo, enhancedAutoPilotInfo }) => {

    const changefullSelfDrivingCapability = async () => {
        if (modelData.fullSelfDrivingCapability) {
            const newModelData = {
                ...modelData,
                price: modelData.price - fullSelfDrivingCapabilityInfo.price,
                fullSelfDrivingCapability: false,
                enhancedAutoPilot: false
            }
            await setModelData(newModelData);
        } else {
            if (modelData.enhancedAutoPilot) {
                const newModelData = {
                    ...modelData,
                    price: modelData.price + fullSelfDrivingCapabilityInfo.price - enhancedAutoPilotInfo.price,
                    fullSelfDrivingCapability: true,
                    enhancedAutoPilot: false
                }
                await setModelData(newModelData);
            } else {
                const newModelData = {
                    ...modelData,
                    price: modelData.price + fullSelfDrivingCapabilityInfo.price,
                    fullSelfDrivingCapability: true,
                }
                await setModelData(newModelData);
            }
        }
    }

    return (
        <div className='w-full h-max flex flex-col items-center justify-center space-y-2'>
            <p className='text-2xl text-black font-semibold'>
                Full Self-Driving Kabiliyeti
            </p>
            <p className='text-md text-black'>
                ${fullSelfDrivingCapabilityInfo.price}
            </p>

            <ol className='w-full md:w-96 flex flex-col space-y-2'>
                {fullSelfDrivingCapabilityInfo.features.map(feature => {
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

            <button onClick={() => changefullSelfDrivingCapability()} className={`w-full md:w-96 py-2 rounded-lg ${modelData.fullSelfDrivingCapability ? "bg-gray-100 text-black hover:bg-gray-200" : "bg-blue-500 text-white hover:bg-blue-600"}`}>
                {modelData.fullSelfDrivingCapability ? "Çıkar" : "Ekle"}
            </button>
        </div>
    )
}

export default FullSelfDrivingCapability