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
import PaymentMethodsPage from './pages/PaymentMethodsPage';
import PaymentsListAllPage from './pages/PaymentsListAllPage';
import PaymentMethodStepsPage from './pages/PaymentMethodStepsPage';

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
          <CustomRoute isPrivate exact path="/home" component={HomePage} />
          <CustomRoute isPrivate exact path="/profile" component={ProfilePage} />
          <CustomRoute isPrivate exact path="/payments" component={PaymentsPage} />
          <CustomRoute isPrivate exact path="/payments/all" component={PaymentsListAllPage} />
          <CustomRoute isPrivate exact path="/payments/methods" component={PaymentMethodsPage} />
          <CustomRoute isPrivate exact path="/payments/methods/steps" component={PaymentMethodStepsPage} />
          <CustomRoute isPrivate exact path="/partnerships" component={PartnershipsPage} />
          <CustomRoute isPrivate exact path="/partnerships/advantages" component={PartnershipAdvantagesPage}/>
          <CustomRoute isPrivate exact path="/partnerships/addresses" component={PartnershipAddressesPage} />
          <CustomRoute isPrivate exact path="/associates" component={AssociatesPage} />
          <CustomRoute isPrivate exact path="/groups" component={GroupsPage} />
          <CustomRoute isPrivate exact path="/settings" component={PartnershipsPage} />
      </Switch>
  );
}