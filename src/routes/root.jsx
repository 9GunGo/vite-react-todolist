import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <Link to="/normal">Normal</Link>
        <span style={{marginLeft:'20px'}}></span>
        <Link to="/antd">Antd</Link>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }