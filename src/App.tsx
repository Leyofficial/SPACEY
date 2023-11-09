import './App.scss'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout.tsx";

function App() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
            </Route>
        </Routes>
    </>
  )
}

export default App
