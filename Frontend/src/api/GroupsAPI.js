import axios from "axios";
import { groupsServerURL } from "../constants";

export function createNewGroup(data) {
    let path = groupsServerURL + "groups/create"

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
    let path = groupsServerURL + "groups/update"

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
    let path = groupsServerURL + "groups"
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