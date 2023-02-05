import { Link } from "react-router-dom";

export const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul className="items">
                <li className="item">
                    <Link className="link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="item">
                    <Link className="link" to="/tabs">Tabs</Link>
                </li>
                <li className="item">
                    <Link className="link" to="/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
}