import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { AppContext } from '../../context/AppContext';
import history from '../../history';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const { state } = useContext(AppContext);
  const isAdmin = state.authentication.isAdmin  ? true : false

  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("admin")
    state.updateAuthentication({
      isAuthenticated: false,
      isAdmin: false,
      token: '',
      loading: false
    }, () => {
      history.push("/")
    })
  }

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
                {SidebarData.filter(item => { 
                    if(isAdmin)
                    {
                      if(item.visibleForAdmin === true)
                        return item
                    }
                    else
                    {
                      if(item.visibleForUser === true)
                        return item
                    }
                    return null
                  }).map((item, index) => {
                  if(item.title === "Logout")
                  {
                    return (
                      <li key={index} className={item.cName}>
                        <Link to="/" onClick={handleClick}>
                          {item.icon}
                          <span className='navbar-span'>{item.title}</span>
                        </Link>
                      </li>
                    );
                  }
                  else
                  {
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={{pathname: item.path}}>
                          {item.icon}
                          <span className='navbar-span'>{item.title}</span>
                        </Link>
                      </li>
                    );
                  }
                  })
                }
            </ul>
          </nav>
    </IconContext.Provider>
  </>
  );
}

export default Navbar;