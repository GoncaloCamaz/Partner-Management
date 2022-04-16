import axios from "axios";
import { backendURL } from "../constants";

export async function createPayment(data) {
    let path = backendURL + "payments/create"
	
	const payment = data;
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }
    const result = await axios.post(path, payment, requestparams)
         .then((response) => {
            return {
                hasErrors: false,
                statusCode: response.status,
                data: response.data
            }
         })
         .catch(error => {
            return {
                hasErrors: true,
                message: error.message,
            }         
        })
    return result
}

export async function getAssociatePayments(associateNumber) {
    let path = backendURL + "payments/" + associateNumber
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }
    const result = await axios.get(path, requestparams)
         .then((response) => {
            return {
                hasErrors: false,
                statusCode: response.status,
                data: response.data
            }
         })
         .catch(error => {
            return {
                hasErrors: true,
                message: error.message,
            }         
        })
    return result
}
