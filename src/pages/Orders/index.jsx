import Order from '../../components/OrderPageComponents/Order';
import { useOrderAtom } from '../../jotai/order'
import { useUserAtom } from '../../jotai/user'

const Orders = () => {

    const { orderState } = useOrderAtom();
    const { userState } = useUserAtom();
    if (userState.id !== "") {
        if (orderState) {
            if (orderState.orders) {
                return (
                    <div className={`py-16 flex-1 overflow-auto bg-white`}>
                        <div className={`flex flex-col space-y-8 m-auto max-w-screen-xl h-auto px-4 select-none`}>
                            {orderState.orders.length !== 0 ?
                                orderState.orders.map(order => {
                                    return (
                                        <Order
                                            key={order.id}
                                            orderData={order}
                                        />
                                    )
                                })
                                :
                                <div className='w-full p-3 rounded-lg bg-blue-100 text-blue-700'>
                                    Size Ait Bir Sipariş Bulunmamaktadır.
                                </div>}
                        </div>
                    </div>
                );
            }
        }
    } else {
        return (
            <div className={`pt-4 flex-1 overflow-auto bg-white text-black`}>
                <div className={`flex flex-col space-y-2 m-auto max-w-screen-xl h-full px-4 items-center justify-center`}>
                    <div className={`p-3 flex flex-col space-y-2 rounded-lg bg-gray-100`}>
                        <p className='font-semibold'>
                            Sayfa Bulunamadı
                        </p>

                        <p>
                            Girmiş olduğunuz sayfa mevcut değil
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Orders