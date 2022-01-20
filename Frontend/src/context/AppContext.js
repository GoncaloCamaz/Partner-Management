import React, { Component } from 'react';

export const AppContext = React.createContext({});

class AppContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authentication: {
                loading: false,
                isAuthenticated: false,
                isAdmin: false,
                token: '',
                email: '',
                authenticationTimestamp: new Date()
            },
            associate: {},
            groups:[],
            partnerships: [],
            paymentMethods: [],
            payments: [],
            updateAuthentication: (authenticationResult, callback) => this.setState({
                authentication: authenticationResult
            }, callback),
            updateAssociate: (associate, callback) => this.setState({
                associate: associate
            }, callback),
            updateGroups: (groups, callback) => this.setState({
                groups: groups
            }, callback),
            updatePartnerships: (partnerships, callback) => this.setState({
                partnerships: partnerships
            }, callback),
            updatePaymentMethods: (paymentMethods, callback) => this.setState({
                paymentMethods: paymentMethods
            }, callback),
            updatePayments: (payments, callback) => this.setState({
                payments: payments
            }, callback)
        }
    }

    render() {
        return (
            <AppContext.Provider value={{state: this.state, props: this.props}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider;