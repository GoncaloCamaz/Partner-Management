import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from './context/AuthContext';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import PaymentsPage from './pages/PaymentsPage'
import PartnershipsPage from './pages/PartnershipsPage';
import PartnershipAdvantagesPage from './pages/PartnershipAdvantagesPage';
import PartnershipAddressesPage from './pages/PartnershipAddressesPage';
import AssociatesPage from './pages/AssociatesPage';
import './index.css'
import GroupsPage from './pages/GroupsPage';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return (
      <div className='page_wrapper'>
          <h4 className='blinkText'>Loading..</h4>
      </div>
    )
  }

  /**
   * Redirect to initial login page if not able to authenticate
   */
  if (isPrivate && !authenticated) {
    return <Redirect to="/" />
  }

  return <Route {...rest} />;
}

/**
 * 
 * @returns Route definitions and its components
 */
export default function Routes() {
  return (
        <Switch>
          <CustomRoute exact path="/" component={LoginPage} />
          <CustomRoute exact path="/home" component={HomePage} />
          <CustomRoute exact path="/profile" component={ProfilePage} />
          <CustomRoute exact path="/payments" component={PaymentsPage} />
          <CustomRoute exact path="/partnerships" component={PartnershipsPage} />
          <CustomRoute exact path="/partnerships/advantages" component={PartnershipAdvantagesPage}/>
          <CustomRoute exact path="/partnerships/addresses" component={PartnershipAddressesPage} />
          <CustomRoute exact path="/associates" component={AssociatesPage} />
          <CustomRoute exact path="/groups" component={GroupsPage} />
          <CustomRoute exact path="/settings" component={PartnershipsPage} />
      </Switch>
  );
}