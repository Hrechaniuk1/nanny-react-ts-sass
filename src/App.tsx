// gen imports
import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// lazy

const MainPage = lazy(() => import('./pages/mainPage/MainPage'))


// component

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