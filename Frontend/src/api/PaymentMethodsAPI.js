import axios from "axios";
import { backendURL } from "../constants";

export async function getPaymentMethods() {
    let path = backendURL + "paymentmethods"
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
