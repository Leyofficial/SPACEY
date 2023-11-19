import './App.scss'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout.tsx";
import HomePage from "./Routers/Home/HomePage.tsx";
import NotFound from "./Routers/NotFound/NotFound.tsx";
import ShopGrid from "./Routers/ShopGrid/ShopGrid.tsx";

function App() {
  return (
    <>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'shop-grid'} element={<ShopGrid/>}>
                    {/*<Route path={'shop-grid/:i'}/>*/}
                    {/*<Route path={'shop-grid/:category/:model'}/>*/}
                    {/*<Route path={'shop-grid/:category/:model'}/>*/}
                </Route>
                <Route path={'*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
