import './App.scss'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import HomePage from "./Routers/Home/HomePage.tsx";
import NotFound from "./Routers/NotFound/NotFound.tsx";

function App() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
