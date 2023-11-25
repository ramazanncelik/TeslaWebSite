import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Design from '../pages/Design'
import Orders from '../pages/Orders'

const RoutesProvider = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/design/:id' element={<Design />} />
            <Route path='/orders' element={<Orders />} />
        </Routes>
    )
}

export default RoutesProvider