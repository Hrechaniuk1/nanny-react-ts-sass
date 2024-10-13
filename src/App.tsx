import { FC, lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import('./pages/mainPage/MainPage'))

const App: FC = () => {
  return (
    <Suspense>
    <Routes>
      <Route path="/" element={<MainPage></MainPage>} ></Route>
      <Route path="/nannies" element={<div></div>} ></Route>
    </Routes>
    </Suspense>
  )
}

export default App