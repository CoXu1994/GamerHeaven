import { Outlet } from "react-router-dom";
import NavBar from "./Navigation";

function Layout () {
    return (
        <div>
            <NavBar />
            <Outlet />    
        </div>
    )
}

export default Layout;