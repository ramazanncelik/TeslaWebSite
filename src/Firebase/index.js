// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import toast from 'react-hot-toast'

const firebaseConfig = {
  apiKey: "AIzaSyC4C47HCEQi3C4JT6NQLWlEu8Vhh_ygxnI",
  authDomain: "tesla-1d1fd.firebaseapp.com",
  projectId: "tesla-1d1fd",
  storageBucket: "tesla-1d1fd.appspot.com",
  messagingSenderId: "156625064580",
  appId: "1:156625064580:web:bf0bf877654c828c99a8d1",
  measurementId: "G-DMD8HCSTEC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestoreDatabase = getFirestore(app);

export async function register(email, password) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    toast.success("Başarılı bir şekilde kayıt oldunuz");
    return user;
  } catch (error) {
    toast.error(error.message)
  }
}

export async function login(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function logout() {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message)
  }
}

export const completePayment = async (data) => {
  try {
    const result = await addDoc(collection(firestoreDatabase, 'orders'), data);

    if (result.id) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    toast.error(error.message);
    return false;
  }
}