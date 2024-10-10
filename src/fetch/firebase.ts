// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./keys";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Initialize Firebase
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
    console.log('User logged in:', user);
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



import { getFirestore, collection, getDocs } from "firebase/firestore";

// Инициализация Firestore
const db = getFirestore(app);

// Получение данных из коллекции
export const getDataFromCollection = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "nannys"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  } catch (error) {
    console.error('Error fetching data from collection:', error);
  }
};

