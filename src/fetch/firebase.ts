// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { orderBy, QuerySnapshot } from "firebase/firestore";
import { firebaseConfig } from "./keys";
import { NannyResponse } from "../redux/operatioms";


const app = initializeApp(firebaseConfig);

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Инициализация аутентификации
const auth = getAuth(app);

// Регистрация нового пользователя
export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Успешная регистрация
    const user = userCredential.user;
    console.log('User registered:', user);
  } catch (error) {
    const errorCode = (error as { code: string }).code; // Приведение типа для получения свойства code
    const errorMessage = (error as { message: string }).message; // Приведение типа для получения свойства message
    console.error('Error during registration:', errorCode, errorMessage);
  }
};

// Логин пользователя
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Успешный логин
    const user = userCredential.user;
    return user
    
  } catch (error) {
    const errorCode = (error as { code: string }).code; // Приведение типа для получения свойства code
    const errorMessage = (error as { message: string }).message; // Приведение типа для получения свойства message
    console.error('Error during login:', errorCode, errorMessage);
  }
};

// Логаут пользователя
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('User logged out');
  } catch (error) {
    console.error('Error during logout:', error);
  }
};



import { getFirestore, collection, getDocs, query } from "firebase/firestore";

const db = getFirestore(app);

export const getDataFromCollection = async (sortBy: string, sortOrder: 'asc'|'desc' = 'asc') => {
  try {

    const nanniesQuery = query(
      collection(db, "nannys"),
      orderBy(sortBy, sortOrder)
    );

    const querySnapshot = await getDocs(nanniesQuery);
    const processNannyDocs = (querySnapshot: QuerySnapshot): NannyResponse[] => {
      return querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
      })) as NannyResponse[];
  };
    const nannies = processNannyDocs(querySnapshot);
    return nannies
  } catch (error) {
    console.error('Error fetching data from collection:', error);
  }
};

