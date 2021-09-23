import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import { useTranslation } from 'react-i18next';
import RightButton from "./RightButton"
import SearchBox from "./SearchBox";
import MultiMenus from "./MultiMenus";
import { SidebarData } from './SlidebarData'

export default function Navbar({ setTheme, setsearchText, theme }) {
  const { t } = useTranslation()
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  // const renderMenu = (items) => {
  //   return items.map((item, index) => {
  //     return (
  //       <ul key={index} className="nav-item">
  //         <li>
  //           <Link to={item.link}>
  //             {item.icon}
  //             <span>{item.title}</span>
  //           </Link>
  //           {item.menu && renderMenu(item.menu)}
  //         </li>
  //       </ul>
  //     );
  //   })
  // }

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <div className="nav-itemleft">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <SearchBox setsearchText={setsearchText} />
          </div>
          <RightButton theme={theme} setTheme={setTheme} />
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" >
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} className="nav-item" />
              </Link>
              <div style={{ fontSize: 20, color: "white", marginLeft: 10, textDecoration: "none" }}>{t('content.HOME_ADMIN')}</div>
            </li>
            {/* {renderMenu(SidebarData.menu)} */}
            <div className="multi-menu">
              <MultiMenus menus={SidebarData} />
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
