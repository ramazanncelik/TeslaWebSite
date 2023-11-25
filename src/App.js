import React from 'react'
import Navbar from './components/Navbar'
import RoutesProvider from './RoutesProvider'
import { Toaster } from 'react-hot-toast'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, firestoreDatabase } from './Firebase'
import { useUserAtom } from './jotai/user'
import { useOrderAtom } from './jotai/order'
import { collection, getDocs, where } from 'firebase/firestore'

const App = () => {

  const { setUserData } = useUserAtom();
  const { setOrderData } = useOrderAtom();

  const getOrders = async (uid) => {
    const querySnapshot = await getDocs(collection(firestoreDatabase, 'orders'), where('UserId', '==', uid));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setOrderData({
      orders: [...data]
    });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {

      setUserData({
        id: user.uid,
        email: user.email
      });

      getOrders(user.uid);

    } else {
      setUserData({
        id: "",
        email: ""
      });
    }
  });

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