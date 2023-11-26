import { NavLink } from 'react-router-dom'

const TeslaModel = ({ teslaModel }) => {
  if (teslaModel.id === 1) {
    return (
      <div className='relative w-full h-auto'>
        <video autoPlay loop className="w-full z-10">
          <source src={teslaModel.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className='absolute inset-0 flex flex-col items-center justify-center'>

          <div className={"px-4 py-2 rounded-lg text-white text-3xl font-semibold absolute top-0 mt-[5%] select-none"}>
            {teslaModel.name}
          </div>

          <div className='w-full flex flex-row items-center justify-center space-x-4 absolute bottom-0 mb-4 select-none'>
            <NavLink to={`/design/${teslaModel.id}`} className={"px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-gray-200"}>
              Sipariş Ver
            </NavLink>

            <div className={"px-4 py-2 rounded-lg bg-gray-700 text-white backdrop-blur-0 cursor-pointer"}>
              Test Sürüşü
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='relative w-full h-auto'>
        <img className='w-full z-10' src={teslaModel.thumbnail} alt={teslaModel.id} />

        <div className='absolute inset-0 flex flex-col items-center justify-center'>

          <div className={"px-4 py-2 rounded-lg text-black text-3xl font-semibold absolute top-0 mt-[2%] select-none"}>
            {teslaModel.name}
          </div>

          <div className='w-full flex flex-row items-center justify-center space-x-4 absolute bottom-0 mb-4 select-none'>
            <div className={"px-4 py-2 rounded-lg bg-gray-700 text-white backdrop-blur-0 cursor-pointer"}>
              Test Sürüşü
            </div>

            <div className={"px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-gray-200 cursor-pointer"}>
              Ek Bilgi
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeslaModel