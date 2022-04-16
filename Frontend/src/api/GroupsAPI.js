import axios from "axios";
import { groupsServerURL } from "../constants";

export async function createNewGroup(data) {
    let path = groupsServerURL + "groups/create"

    const group = data
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

	const result = await axios.post(path, group, requestparams)
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

export async function updateGroup(data) {
    let path = groupsServerURL + "groups/update"

    const group = data
    const requestparams = {
        headers: {
            Authorization: localStorage.getItem('token')
        }       
    }

	const result = await axios.post(path, group, requestparams)
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

export async function getGroups() {
    let path = groupsServerURL 
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