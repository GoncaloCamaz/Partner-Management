import axios from "axios";
import { backendURL } from "./ApiConstants";

export function createNewGroup(data) {
    let path = backendURL + "/groups/create"

    const associate = data
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    axios.post(path, associate, requestparams)
         .then((response) => {
            return response.data
         })
         .catch(error => {
             return error
         })
}

export function updateGroup(data) {
    let path = backendURL + "/groups/update"

    const group = data
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

    axios.post(path, group, requestparams)
         .then((response) => {
            return response.data
         })
         .catch(error => {
             return error
         })
}

export function getGroups() {
    let path = backendURL + "/groups"
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