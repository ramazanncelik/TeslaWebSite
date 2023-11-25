import { MdClose } from 'react-icons/md'
import SelectCar from './SelectCar'

const CompareCarModal = ({ close }) => {
    return (
        <div className="w-full h-auto p-2 bg-white rounded-lg flex flex-col space-y-2 select-none">
            <div className={`w-full flex flex-row items-center pb-1 px-1 border-b border-gray-300`}>
                <div className={`flex flex-1 items-center text-black`}>
                    Araç Karşılaştır
                </div>

                <button type="button" onClick={() => close()} className={`p-2 rounded-lg hover:bg-gray-200`}>
                    <MdClose size={20} color="black" />
                </button>
            </div>

            <div className='w-full flex flex-row space-x-2'>
                <SelectCar />
                <SelectCar />
            </div>
        </div>
    )
}

export default CompareCarModal