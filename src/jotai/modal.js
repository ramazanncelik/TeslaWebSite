import { atom, useAtom } from 'jotai';

// Atomu oluşturun
const modalAtom = atom({
    open: false,
    data: false,
});

// Atomu kullanmak için bir özel hook oluşturun
export const useModalAtom = () => {
    const [modalState, setModalState] = useAtom(modalAtom);

    const openModal = (name, data) => {
        setModalState({
            open: name,
            data: data || false,
        });
    };

    const closeModal = () => {
        setModalState({
            open: false,
            data: false,
        });
    };

    return { modalState, openModal, closeModal };
};