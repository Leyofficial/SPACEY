import './App.scss'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import HeaderPage from "./Pages/HeaderPage/HeaderPage.tsx";

function App() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HeaderPage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
