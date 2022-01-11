import axios from "axios";
import { backendURL } from "../../constants";

const AuthenticationActionType = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT: 'LOGOUT'
}

const LoginAuthenticationAction = (userState, history, setAuthenticationHandler) => {
    return (dispatch) => {
            const URL = backendURL + "login"
            const response = axios.post(URL,userState).then(res => {
                if(res.status === 200) 
                    return res.data
                else
                    return {result: "Something went wrong"}
            }).catch(error => {console.error(error); return Promise.reject(error); })
            console.log(response)
            const data = response;
            const isAdmin = data.userRole === "ADMIN" ? true : false
            dispatch({type: AuthenticationActionType.LOGIN_SUCCESS, payload: {email: userState.email, isAdmin: isAdmin, ...data}})
        } 
}

const LogoutAuthenticationAction = (history) => {
    return (dispatch) => {
        dispatch({
          type: AuthenticationActionType.LOGOUT,
          payload: {},
        })
        history.push("/");
    }
}

export { LoginAuthenticationAction, LogoutAuthenticationAction ,AuthenticationActionType }