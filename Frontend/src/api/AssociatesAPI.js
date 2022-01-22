import axios from "axios";
import { backendURL } from "../constants";

export async function getInitialInformation(email) {
    let path = backendURL + "all/"+email
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

export async function createNewAssociate(data) {
    let path = backendURL + "associates/create"

    const associate = data
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    const result = await axios.post(path, associate, requestparams)
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
                message: error.message
            }
        })
    return result;
}

export async function updateAssociate(data) {
    let path = backendURL + "associates/update"

    const associate = data
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    const result = await axios.post(path, associate, requestparams)
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
                message: error.message
            }
        })
    return result
}

export async function deleteAssociate(associateNumber)
{
    let path = backendURL + "associates/delete/" + associateNumber
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    const result = await axios.delete(path, requestparams)
        .then((response) => 
        {
            return {
                hasErrors: false,
                statusCode: response.status,
                data: response.data
            }        
        })
        .catch((error) => {
            return {
                hasErrors: true,
                message: error.message
            }         
        })

    return result;
}

export async function updateAssociateCredentials(associateNumber, oldPassword, newPassword) {
    let path = backendURL + "associates/update/credentials"

    const data = {
        associateNumber: associateNumber, 
        oldPassword: oldPassword, 
        newPassword: newPassword
    }
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    const result = await axios.post(path, data, requestparams)
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
                message: error.message
            }             
        })
    
    return result;
}

export async function getAssociates() {
    let path = backendURL + "associates"
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    const result = axios.get(path, requestparams)
         .then((response) => 
         {
            return {
                hasErrors: false,
                statusCode: response.status,
                data: response.data
            }             
        })
        .catch((error) => {
            return {
                hasErrors: true,
                message: error.message
            }               
        })
    
    return result;
}

export async function getAssociateInformation(associateNumber) {
    let path = backendURL + "associates/number/" + associateNumber
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    const result = await axios.get(path, requestparams)
        .then((response) => 
        {
            return {
                hasErrors: false,
                statusCode: response.status,
                data: response.data
            }      
        })
        .catch((error) => {
            return {
                hasErrors: true,
                message: error.message
            }          
        })
    
    return result
}

export async function resetPassword(associateNumber) {
    let path = backendURL + "associates/password/reset/" + associateNumber
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    const result = await axios.get(path, requestparams)
        .then((response) => 
        {
            return {
                hasErrors: false,
                statusCode: response.status,
                data: response.data
            }   
        })
        .catch((error) => {
            return {
                hasErrors: true,
                message: error.message
            }  
        })
    
    return result;
}