// gen imports
import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// components import
import Header from "./components/Hedaer/Hedaer";

// lazy
const MainPage = lazy(() => import('./pages/mainPage/MainPage'))
const NanniesPage = lazy(() => import('./pages/NanniesPage/NanniesPage'))


// component
const App: FC = () => {

  return (
    <>
    <Header></Header>
    <Suspense>
    <Routes>
      <Route path="/" element={<MainPage></MainPage>} ></Route>
      <Route path="/nannies" element={<NanniesPage></NanniesPage>} ></Route>
    </Routes>
    </Suspense>
    </>
  )
}

export default App