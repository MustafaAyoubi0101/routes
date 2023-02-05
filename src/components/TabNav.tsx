import { Link, Outlet } from "react-router-dom";


export const TabNav = () => {
    return(
        <>
        <ul className="items">
            <li className="item">
                <Link className="link" to="/tabs/tab1">Tab1</Link>
            </li>
            <li className="item">
                <Link className="link" to="/tabs/tab2">Tab2</Link>
            </li>
            <li className="item">
                <Link className="link" to="/tabs/tab3">Tab3</Link>
            </li>
        </ul>
        <Outlet />
        </>
    );
}