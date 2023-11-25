import { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useModalAtom } from '../../../jotai/modal';
import { useUserAtom } from '../../../jotai/user';
import toast from 'react-hot-toast';

const PaymentContainer = ({ orderData, setOrderData }) => {

    const { openModal } = useModalAtom();
    const { userState } = useUserAtom();
    const [totalPrice, setTotalPrice] = useState(0);

    const backToDesign = async () => {
        await setOrderData(null)
    }

    const paymentModalOpen = async () => {
        if (userState.id !== "") {
            openModal('payment-modal', {
                ...orderData,
                Price: totalPrice
            });
        } else {
            toast.error("Ödemeye Devam Etmek İçin Lütfen Giriş Yapınız");
            openModal('login-modal', false);
        }
    }

    useEffect(() => {
        setTotalPrice(orderData.Price + 1390 + 250)
    }, [orderData, setTotalPrice]);

    return (
        <div className={`py-16 flex-1 overflow-auto bg-white`}>
            <div className={`flex flex-col space-y-6 m-auto max-w-screen-xl h-auto px-4 select-none`}>

                <div onClick={() => backToDesign()} className='w-max h-max py-2 px-4 flex flex-row space-x-2 items-center justify-center hover:bg-gray-100 rounded-lg cursor-pointer'>
                    <FaArrowLeft size={16} />
                    <span className='text-md text-black'>
                        Tasarımı Düzenle
                    </span>
                </div>

                <img
                    className='w-full'
                    alt={orderData.ModelName}
                    src={orderData.ImageUrl} />

                <div className='w-full flex flex-col space-y-1 items-center justify-center'>
                    <p className='text-black font-semibold text-2xl'>
                        {orderData.ModelName} Aracınız
                    </p>
                    <p className='text-gray-500 text-md'>
                        {orderData.EstimatedDelivery}
                    </p>
                </div>

                <div className='w-full md:w-96 m-auto flex flex-col space-y-1'>
                    <div className='w-full text-lg text-gray-500'>
                        {orderData.ModelName}
                    </div>

                    <div className='w-full text-lg text-gray-500'>
                        {orderData.OuterColour} Renk
                    </div>

                    <div className='w-full text-lg text-gray-500'>
                        {orderData.Wheel.name}
                    </div>

                    <div className='w-full text-lg text-gray-500'>
                        {orderData.SeatingLayout} Koltuklu İç Mekan
                    </div>

                    <div className='w-full text-lg text-gray-500'>
                        Otopilot
                    </div>

                    <div className='w-full text-lg text-gray-500'>
                        {orderData.InteriorColour} İç Mekan
                    </div>

                    {orderData.TowHitch &&
                        <div className='w-full text-lg text-gray-500'>
                            Çeki Demiri
                        </div>}

                    {orderData.EnhancedAutoPilot &&
                        <div className='w-full text-lg text-gray-500'>
                            Geliştirilmiş Otopilot
                        </div>}

                    {orderData.FullSelfDrivingCapability &&
                        <div className='w-full text-lg text-gray-500'>
                            Full Self-Driving Kabiliyeti
                        </div>}

                    <div className='w-full text-lg text-gray-500 underline'>
                        30 Günlük Premium Bağlantı Denemesi
                    </div>
                </div>

                <div className='w-full md:w-96 m-auto flex flex-col space-y-1 border-y border-gray-300 py-2'>
                    <div className='text-black text-lg flex flex-row'>
                        <span className='flex flex-1'>
                            Araç Fiyatı
                        </span>

                        <span>
                            {orderData.Price}$
                        </span>
                    </div>

                    <div className='text-black text-lg flex flex-row'>
                        <span className='flex flex-1'>
                            Destinasyon ücreti
                        </span>

                        <span>
                            1390$
                        </span>
                    </div>

                    <div className='text-black text-lg flex flex-row'>
                        <span className='flex flex-1'>
                            Sipariş Ücreti
                        </span>

                        <span>
                            250$
                        </span>
                    </div>

                    <div className='text-black text-lg flex flex-row'>
                        <span className='flex flex-1'>
                            Toplam Fiyat
                        </span>

                        <span>
                            {totalPrice}$
                        </span>
                    </div>
                </div>

                <button onClick={() => paymentModalOpen()} className='w-full md:w-96 m-auto py-2 border-2 border-black text-black font-semibold hover:bg-black hover:text-white rounded-lg'>
                    Kart ile Sipariş Verin
                </button>
            </div>
        </div>
    )
}

export default PaymentContainer