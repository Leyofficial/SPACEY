import {Navigate, Outlet} from "react-router-dom";

interface IPrivateRoute {
    isAuth : boolean,
    to : string
}
function PrivateRoute({isAuth , to} : IPrivateRoute) {
    return (
        isAuth ? <Outlet/> : <Navigate to={to}/>
    )
}
export default PrivateRoute