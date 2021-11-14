import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from './context/AuthContext';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import HomePageTest from './pages/HomePageTest';
import ProfilePage from './pages/ProfilePage'
import PaymentsPage from './pages/PaymentsPage'
import PartnershipsPage from './pages/PartnershipsPage';
import PartnershipAdvantagesPage from './pages/PartnershipAdvantagesPage';
import PartnershipAddressesPage from './pages/PartnershipAddressesPage';
import AssociatesPage from './pages/AssociatesPage';
import './index.css'
import GroupsPage from './pages/GroupsPage';
import PaymentMethodsPage from './pages/PaymentMethodsPage';
import PaymentsListAllPage from './pages/PaymentsListAllPage';
import PaymentMethodStepsPage from './pages/PaymentMethodStepsPage';
import PaymentsAdminPage from './pages/PaymentsAdminPage';
import PartnershipsAdminPage from './pages/PartnershipsAdminPage';
import SettingsPage from './pages/SettingsPage';

function CustomRoute({ isPrivate, mustBeAdmin,...rest }) {
  const { loading, authenticated, authenticationObject } = useContext(Context);

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
  if ((isPrivate && !authenticated) || (CheckAdminAuthorization(isPrivate, mustBeAdmin, authenticationObject.isAdmin) && !authenticated)) {
    return <Redirect to="/" />
  }

  return <Route {...rest} />;
}

function CheckAdminAuthorization(isPrivate, mustBeAdmin, authenticationObjectResult) {
  if(isPrivate && mustBeAdmin && authenticationObjectResult === true)
  {
    return true
  }

  return false
}

/**
 * 
 * @returns Route definitions and its components
 */
export default function Routes() {
  return (
        <Switch>
          <CustomRoute exact path="/" component={LoginPage} />
          <CustomRoute isPrivate exact path="/home" component={HomePage} />
          <CustomRoute isPrivate exact path="/profile" component={ProfilePage} />
          <CustomRoute isPrivate exact path="/payments" component={PaymentsPage} />
          <CustomRoute isPrivate mustBeAdmin exact path="/admin/payments" component={PaymentsAdminPage} />
          <CustomRoute isPrivate mustBeAdmin exact path="/admin/payments/list" component={PaymentsListAllPage} />
          <CustomRoute isPrivate mustBeAdmin exact path="/admin/payments/methods" component={PaymentMethodsPage} />
          <CustomRoute isPrivate mustBeAdmin exact path="/admin/payments/methods/steps" component={PaymentMethodStepsPage} />
          <CustomRoute isPrivate exact path="/partnerships" component={PartnershipsPage} />
          <CustomRoute isPrivate mustBeAdmin exact path="/admin/partnerships" component={PartnershipsAdminPage} />
          <CustomRoute isPrivate mustBeAdmin exact path="/admin/partnerships/advantages" component={PartnershipAdvantagesPage}/>
          <CustomRoute isPrivate mustBeAdmin exact path="/admin/partnerships/addresses" component={PartnershipAddressesPage} />
          <CustomRoute isPrivate mustBeAdmin exact path="/associates" component={AssociatesPage} />
          <CustomRoute isPrivate mustBeAdmin exact path="/groups" component={GroupsPage} />
          <CustomRoute isPrivate mustBeAdmin exact path="/settings" component={SettingsPage} />
      </Switch>
  );
}