import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import PaymentsPage from './pages/PaymentsPage'
import PartnershipsPage from './pages/PartnershipsPage';
import PartnershipAdvantagesPage from './pages/PartnershipAdvantagesPage';
import PartnershipAddressesPage from './pages/PartnershipAddressesPage';
import AssociatesPage from './pages/AssociatesPage';
import GroupsPage from './pages/GroupsPage';
import PaymentMethodsPage from './pages/PaymentMethodsPage';
import PaymentsListAllPage from './pages/PaymentsListAllPage';
import PaymentMethodStepsPage from './pages/PaymentMethodStepsPage';
import PaymentsAdminPage from './pages/PaymentsAdminPage';
import PartnershipsAdminPage from './pages/PartnershipsAdminPage';
import SettingsPage from './pages/SettingsPage';
import UserProfilePage from './pages/UserProfilePage';
import Navbar from './components/navbar/Navbar';
import './index.css'
import './pages/Pages.css'

function CustomRoute({ isPrivate, loginPage ,mustBeAdmin,...rest }) {
  const { state } = useContext(AppContext);
  const authenticationState = state.authentication
  if (authenticationState.loading === true) {
    return (
      <div className='page_wrapper'>
          <h4 className='blinkText'>Loading..</h4>
      </div>
    )
  }
  else
  {
    if(loginPage===true)
    {
      return <Route {...rest} />;
    }
    else if(isPrivate && mustBeAdmin===false && authenticationState.isAuthenticated && authenticationState.isAdmin===false)
    {
      return <Route {...rest} />;
    }
    else if(isPrivate && mustBeAdmin===true && authenticationState.isAuthenticated && authenticationState.isAdmin===true)
    {
      return <Route {...rest} />;
    }
  }

  return <Redirect to="/login" />
}

/**
 * 
 * @returns Route definitions and its components
 */
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route component={DefaultLayout}/>
    </Switch>
  );
}

const DefaultLayout = () => {
  return(
  <div className="home">
    <Navbar />
    <div className="page-container">
      <Switch>
        <CustomRoute isPrivate={true} mustBeAdmin={false} exact path="/home" component={HomePage} />
        <CustomRoute isPrivate={true} mustBeAdmin={false} exact path="/profile" component={UserProfilePage} />
        <CustomRoute isPrivate={true} mustBeAdmin={false} exact path="/payments" component={PaymentsPage} />
        <CustomRoute isPrivate={true} mustBeAdmin={true} exact path="/admin/payments" component={PaymentsAdminPage} />
        <CustomRoute isPrivate={true} mustBeAdmin={true} exact path="/admin/payments/list" component={PaymentsListAllPage} />
        <CustomRoute isPrivate={true} mustBeAdmin={true} exact path="/admin/payments/methods" component={PaymentMethodsPage} />
        <CustomRoute isPrivate={true} mustBeAdmin={true} exact path="/admin/payments/methods/steps" component={PaymentMethodStepsPage} />
        <CustomRoute isPrivate={true} mustBeAdmin={false} exact path="/partnerships" component={PartnershipsPage} />
        <CustomRoute isPrivate={true} mustBeAdmin={true} exact path="/admin/partnerships" component={PartnershipsAdminPage} />
        <CustomRoute isPrivate={true} mustBeAdmin={true} exact path="/admin/partnerships/advantages" component={PartnershipAdvantagesPage}/>
        <CustomRoute isPrivate={true} mustBeAdmin={true} exact path="/admin/partnerships/addresses" component={PartnershipAddressesPage} />
        <CustomRoute isPrivate={true} mustBeAdmin={true} exact path="/associates" component={AssociatesPage} />
        <CustomRoute isPrivate={true} mustBeAdmin={true} exact path="/groups" component={GroupsPage} />
        <CustomRoute isPrivate={true} mustBeAdmin={true} exact path="/settings" component={SettingsPage} />
      </Switch>
    </div>
  </div>
  )
}