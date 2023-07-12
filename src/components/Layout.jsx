import { Outlet } from "react-router-dom";
import NavBar from "./navigation";

function Layout () {
    return (
        <div>
            <NavBar />
            <Outlet />    
        </div>
    )
}

export default Layout;