import React from 'react';
import logo from "../../assets/images/logo_outline.png";
import chat from "../../assets/images/ico_conversation_png.png";
import profile from "../../assets/images/ico_profile_png.png";
import settings from "../../assets/images/cog.png";
import logout from "../../assets/images/logout.png";
import "./SideMenu.scss";

const menuItems = [{isActive:false, src: logo}, {isActive:true, src: chat}, {isActive:false, src: profile}, {isActive:false, src: settings}, {isActive:false, src: logout}];

const SideMenu = () => {
  return ( 
    <nav className="sidemenu">
      {menuItems.map(item => (
        <a href="/" key={item.src} className={`sidemenu__item ${item.isActive ? 'active' : ''}`}>
          <img src={item.src} alt="" />
        </a>
      ))}
    </nav>
  );
}
 
export default SideMenu;
