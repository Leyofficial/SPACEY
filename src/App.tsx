import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import {Suspense} from "react";

function App() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Suspense><Layout/></Suspense>}>
            </Route>
        </Routes>
    </>
  )
}

export default App
