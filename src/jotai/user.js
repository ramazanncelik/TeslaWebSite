import { atom, useAtom } from 'jotai';

const userAtom = atom({
    id: "",
    email: ""
});

export const useUserAtom = () => {
    const [userState, setUserState] = useAtom(userAtom);

    const setUserData = (data) => {
        setUserState((prev) => ({
            ...prev,
            ...data,
        }));
    };

    return {userState, setUserData};
};