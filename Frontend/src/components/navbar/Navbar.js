import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { LogoutAuthenticationAction } from '../../redux/actions/AuthenticationAction';
import {connect} from 'react-redux'

function Navbar(props) {
  const { authState, logout } = props;
  const isAdmin = authState.isAdmin
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const history = useHistory();

  const handleClick = () => {
    logout(history);
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

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => {
      dispatch(LogoutAuthenticationAction(history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)