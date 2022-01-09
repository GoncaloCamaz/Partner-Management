import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'
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
import { useSelector } from 'react-redux'

function CustomRoute({ isPrivate, mustBeAdmin, ...rest }) {
  try{
    const stateInStore = useSelector(state => {
      return state;
    })

    if(stateInStore.authState.authenticated === false)
    {
      return <LoginPage/>
    }
    else
    {
      if(mustBeAdmin === true && isPrivate)
      {
        const result = adminHasAutorization(stateInStore)
        if(result === true)
          return <Route {...rest} />;
      }
      else if(mustBeAdmin === false && isPrivate)
      {
        const result = userHasAuthorization(stateInStore)
        if(result === true)
          return <Route {...rest} />;
      }
    }
  } catch (error) {
    return (
      <LoginPage/>
    )
  }
}

function adminHasAutorization(state)
{
  const authenticationResult = state.authState
  if(authenticationResult.authenticated && authenticationResult.isAdmin === true)
  {
    return true;
  }

  return false;
}

function userHasAuthorization(state)
{
  const authenticationResult = state.authState
  if(authenticationResult.authenticated)
  {
    return true;
  }

  return false;
}

/**
 * 
 * @returns Route definitions and its components
 */
export default function Routes() {
  return (
        <Switch>
          <CustomRoute exact path="/" component={LoginPage} />
          <CustomRoute isPrivate mustBeAdmin={false} exact path="/home" component={HomePage} />
          <CustomRoute isPrivate mustBeAdmin={false} exact path="/profile" component={ProfilePage} />
          <CustomRoute isPrivate mustBeAdmin={false} exact path="/payments" component={PaymentsPage} />
          <CustomRoute isPrivate mustBeAdmin={true} exact path="/admin/payments" component={PaymentsAdminPage} />
          <CustomRoute isPrivate mustBeAdmin={true} exact path="/admin/payments/list" component={PaymentsListAllPage} />
          <CustomRoute isPrivate mustBeAdmin={true} exact path="/admin/payments/methods" component={PaymentMethodsPage} />
          <CustomRoute isPrivate mustBeAdmin={true} exact path="/admin/payments/methods/steps" component={PaymentMethodStepsPage} />
          <CustomRoute isPrivate mustBeAdmin={false} exact path="/partnerships" component={PartnershipsPage} />
          <CustomRoute isPrivate mustBeAdmin={true} exact path="/admin/partnerships" component={PartnershipsAdminPage} />
          <CustomRoute isPrivate mustBeAdmin={true} exact path="/admin/partnerships/advantages" component={PartnershipAdvantagesPage}/>
          <CustomRoute isPrivate mustBeAdmin={true} exact path="/admin/partnerships/addresses" component={PartnershipAddressesPage} />
          <CustomRoute isPrivate mustBeAdmin={true} exact path="/associates" component={AssociatesPage} />
          <CustomRoute isPrivate mustBeAdmin={true} exact path="/groups" component={GroupsPage} />
          <CustomRoute isPrivate mustBeAdmin={true} exact path="/settings" component={SettingsPage} />
      </Switch>
  );
}