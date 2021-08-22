import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData, SidebarDataAdmin } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Context } from '../../context/AuthContext';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const { handleLogout } = useContext(Context);
  const isAdmin = props.isAdmin

  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = () => {
    handleLogout() 
  }

  if(isAdmin)
  {
    return (
        <>
          <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarDataAdmin.map((item, index) => {
                    if(item.title === "Logout")
                    {
                        return (
                            <li key={index} className={item.cName}>
                              <Link to="/" onClick={handleClick}>
                                {item.icon}
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          );
                    }
                    else
                    {
                        return (
                            <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          );
                    }
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </>
      );
  }
  else
  {
    return (
        <>
          <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                    if(item.title === "Logout")
                    {
                        return (
                            <li key={index} className={item.cName}>
                              <Link to="/" onClick={handleClick}>
                                {item.icon}
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          );
                    }
                    else
                    {
                        return (
                            <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          );
                    }
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </>
      );
  }
}

export default Navbar;