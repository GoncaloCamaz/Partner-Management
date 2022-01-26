import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Grid from '@material-ui/core/Grid';
import PaymentPageMenu from '../components/menus/PaymentPageMenu'
import UserPaymentsTable from '../components/tables/UserPaymentsTable';
import PaymentMethodAccordion from '../components/accordions/PaymentMethodsAccordion'
import * as PaymentMethodsAPI from '../api/PaymentMethodsAPI'

class PaymentsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paymentMethods: [],
            associatePayments: [],
            isLoaded: true,
            hasErrors: false,
            errorMessage: '',
            displayedMenu: 0
        }
    }

    componentDidMount() {
        if(this.state.displayedMenu === 0 && this.state.paymentMethods.length === 0)
        {

        }
    }

    handleUpdateSelectedMenu = (value) => {
        this.setState({displayedMenu: value})
    }

    render() 
    {        
        if(!this.state.isLoaded)
        {
            <h1>loading</h1>
        }
        else 
        {
            return (
                <div style={{flexGrow: 1, maxWidth: '100%'}}>
                    <Grid container spacing={3} style={{textAlign: 'center'}}>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <PaymentPageMenu updateSelected={this.handleUpdateSelectedMenu} />
                        </Grid>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            {this.state.displayedMenu === 0 ? 
                                <PaymentMethodAccordion paymentMethods={this.state.paymentMethods}/>
                            :
                                <UserPaymentsTable rows={this.state.associatePayments}/>
                            }
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}

const PaymentsPageContext = (props) => 
    <AppContext.Consumer>
        {
            context => <PaymentsPage {...props} context={context}/>
        }
    </AppContext.Consumer>

export default withRouter(PaymentsPageContext)
