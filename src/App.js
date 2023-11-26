import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import RoutesProvider from './RoutesProvider'
import { Toaster } from 'react-hot-toast'
import { auth, firestoreDatabase } from './Firebase'
import { useUserAtom } from './jotai/user'
import { useOrderAtom } from './jotai/order'
import { collection, getDocs, where } from 'firebase/firestore'

const App = () => {

  const { setUserData, userState } = useUserAtom();
  const { setOrderData } = useOrderAtom();

  const getOrders = async (uid) => {
    const querySnapshot = await getDocs(collection(firestoreDatabase, 'orders'), where('UserId', '==', uid));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    await setOrderData({
      orders: [...data]
    });
  }

  useEffect(() => {
    if (userState) {
      if (userState.id !== "") {
        getOrders();
      }
    }
  }, [userState]);

  useEffect(() => {
    if (auth) {
      if (auth.currentUser) {
        setUserData({
          id: auth.currentUser.uid,
          email: auth.currentUser.email
        });

        getOrders();
      }
    }
  }, [auth]);

  return (
    <div className='w-screen h-screen flex flex-col'>
      <Toaster />
      <div className='w-full h-full flex flex-col'>
        <Navbar />
        <RoutesProvider />
      </div>
    </div>
  )
}

export default App