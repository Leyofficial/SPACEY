import './App.scss'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import HomePage from "./Routers/HomePage.tsx";

function App() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
