import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Grid from '@material-ui/core/Grid';
import PaymentPageMenu from '../components/menus/PaymentPageMenu'
import UserPaymentsTable from '../components/tables/UserPaymentsTable';
import PaymentMethodAccordion from '../components/accordions/PaymentMethodsAccordion'
import * as PaymentMethodsAPI from '../api/PaymentMethodsAPI'
import * as PaymentsAPI from '../api/PaymentsAPI'

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
            this.setState({isLoaded: false}, () => {
                this.fetchPaymentMethods()
            })
        }
    }

    fetchPaymentMethods = async () => {
        const result = await PaymentMethodsAPI.getPaymentMethods().then((result) => {
            return result;
        }, (error) => {
            return error;
        })

        if(result.hasErrors)
        {
            this.setState({errorMessage: result.errorMessage, errorHasOccured: true},
                this.setState({
                    isLoaded: true
                }))
        }
        else
        {
            this.setState({
                paymentMethods: result.data, 
            }, () => {
                this.setState({ isLoaded: true})
            })
        }
    }

    fetchAssociatePayments = async () => {
        const associateNumber = this.props.context.state.associate.associateNumber
        const result = await PaymentsAPI.getAssociatePayments(associateNumber).then((result) => {
            return result;
        }, (error) => {
            return error;
        })

        if(result.hasErrors)
        {
            this.setState({errorMessage: result.errorMessage, errorHasOccured: true},
                this.setState({
                    isLoaded: true
                }))
        }
        else
        {
            this.setState({
                associatePayments: result.data, 
            }, () => {
                this.setState({ isLoaded: true})
            })
        }
    }

    handleUpdateSelectedMenu = (value) => {
        if(value === 0 && this.state.paymentMethods.length === 0)
        {
            this.fetchPaymentMethods()
        }
        else if(value === 1 && this.state.associatePayments.length === 0)
        {
            this.fetchAssociatePayments()
        }
        this.setState({displayedMenu: value})
    }

    render() 
    {        
        if(!this.state.isLoaded)
        {
            return (
                <h1>loading</h1>
            )
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
