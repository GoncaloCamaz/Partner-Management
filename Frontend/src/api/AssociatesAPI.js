import axios from "axios";
import { backendURL } from "../constants";

export async function createNewAssociate(data) {
    let path = backendURL + "associates/create"

    const associate = data
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    await axios.post(path, associate, requestparams)
         .then((response) => {
            return response
         })
         .catch(error => {
             return error
         })
}

export async function updateAssociate(data) {
    let path = backendURL + "associates/update"

    const associate = data
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    await axios.post(path, associate, requestparams)
         .then((response) => {
            return response.data
         })
         .catch(error => {
             return error
         })
}

export function deleteAssociate(associateNumber)
{
    let path = backendURL + "associates/delete/" + associateNumber
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    axios.delete(path, requestparams)
         .then((response) => 
         {
            return response.data
         })
         .catch((error) => {
             return error
         })
}

export function updateAssociateCredentials(associateNumber, oldPassword, newPassword) {
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

    axios.post(path, data, requestparams)
         .then((response) => {
            return response.data
         })
         .catch(error => {
             return error
         })
}

export function getAssociates() {
    let path = backendURL + "associates"
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    axios.get(path, requestparams)
         .then((response) => 
         {
            return response.data
         })
         .catch((error) => {
             return error
         })
}

export function getAssociateInformation(associateNumber) {
    let path = backendURL + "associates/number/" + associateNumber
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    axios.get(path, requestparams)
         .then((response) => 
         {
            return response.data
         })
         .catch((error) => {
             return error
         })
}

export function resetPassword(associateNumber) {
    let path = backendURL + "associates/password/reset/" + associateNumber
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    axios.get(path, requestparams)
         .then((response) => 
         {
            return response.data
         })
         .catch((error) => {
             return error
         })
}