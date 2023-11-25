import { atom, useAtom } from 'jotai';

const orderAtom = atom({
    orders: []
});

export const useOrderAtom = () => {
    const [orderState, setOrderState] = useAtom(orderAtom);

    const setOrderData = (data) => {
        setOrderState(data);
    };

    return { orderState, setOrderData };
};