import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
function Navbar() {
const [sidebar, setSidebar] = useState(false);
const showSidebar = () => setSidebar(!sidebar);
return (
<>
<IconContext.Provider value={{color:'white'}}>
<div className='navbar'>
    <FaIcons.FaBars onClick={showSidebar} />
</div>

<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
<ul className='nav-menu-items' onClick={showSidebar}>
<li className='navbar-toggle'>
    <AiIcons.AiOutlineClose />
</li>
<div className="heading">
    Components:
</div>
{SidebarData.map((item, index) => {
return (
    <li key={index} className={item.cName}>
    {item.icon}
    <span>{item.title}</span>
    </li>
    );
})}
</ul>
</nav>
</IconContext.Provider>
</>
);
}
export default Navbar;