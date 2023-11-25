import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import teslaModels from '../../utils/teslaModels';
import DesignContainer from '../../components/DesignPageComponents/DesignContainer';
import PaymentContainer from '../../components/DesignPageComponents/PaymentContainer';

const Design = () => {

    const { id } = useParams();
    const [modelData, setModelData] = useState(null);
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const getTeslaModelData = async () => {
            const model = await teslaModels.find(model => model.id === parseInt(id));
            setModelData(model);
        }

        if (id) {
            getTeslaModelData();
        }
    }, [id]);

    if (modelData) {
        if (!orderData) {
            return (
                <DesignContainer
                    modelData={modelData}
                    setModelData={setModelData}
                    setOrderData={setOrderData} />
            )
        } else {
            return (
                <PaymentContainer
                    orderData={orderData}
                    setOrderData={setOrderData} />
            )
        }
    } else {
        return (
            <div className='w-full h-full flex items-center justify-center bg-white'>
                Loading ...
            </div>
        )
    }
}

export default Design;