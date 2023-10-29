import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Properties",
      path: "/properties",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact us",
      path: "/contact",
    },
  ];

  const handleOpenClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className="navbar">
        <p className="logo">Props</p>
        <div className="menu" onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <ul id="pages">
            {linkItems.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  <li>{item.label}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
