import teslaModels from '../../utils/teslaModels'
import TeslaModel from '../../components/HomePageComponents/TeslaModel'

const Home = () => {
  return (
    <div className={`w-screen h-full flex-1 flex-col overflow-auto`}>
      {teslaModels.map(teslaModel => {
        return (
          <TeslaModel
            key={teslaModel.id}
            teslaModel={teslaModel}
          />
        )
      })}
    </div>
  )
}

export default Home