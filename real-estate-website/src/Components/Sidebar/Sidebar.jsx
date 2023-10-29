import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ open, menuItems, handleClick }) => {

  return (
    <div className={`sidebar ${open ? "" : "non-visible"}`}>
      <div className="sidebar-top">
        <h4 style={{color: '#1f6f8b'}}>Navigation</h4>
        <button className="close-btn" onClick={handleClick} />
      </div>
      <div className="sidebar-content">
        <ul>
          {menuItems.map((item, index) => {
            return (
              <Link to={item.path} key={index} onClick={handleClick}>
                <li>{item.label}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
