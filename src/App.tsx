// gen imports
import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components import
import Header from "./components/Hedaer/Hedaer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// lazy
const MainPage = lazy(() => import('./pages/mainPage/MainPage'))
const NanniesPage = lazy(() => import('./pages/NanniesPage/NanniesPage'))
const FavouritePage = lazy(() => import('./pages/FavouritePage/FavouritePage'))


// component
const App: FC = () => {

  return (
    <>
    <ToastContainer />
    <Header></Header>
    <Suspense>
    <Routes>
      <Route path="/" element={<MainPage></MainPage>} ></Route>
      <Route path="/nannies" element={<PrivateRoute Component={NanniesPage}></PrivateRoute>} ></Route>
      <Route path="/favorites" element={<PrivateRoute Component={FavouritePage} ></PrivateRoute>} ></Route>
    </Routes>
    </Suspense>
    </>
  )
}

export default App