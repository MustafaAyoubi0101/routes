import { Outlet } from "react-router-dom";

export const InnerContainer = () => {
    return(
        <div className="inner-container">
            <Outlet />
        </div>
    );
}