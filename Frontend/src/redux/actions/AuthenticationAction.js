import axios from "axios";
import { backendURL } from "../../constants";

const AuthenticationActionType = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT: 'LOGOUT'
}

const LoginAuthenticationAction = (userState, history, setErrorHandler) => {
    return (dispatch) => {
        try{
            const URL = backendURL + "login"
            const response = {token: "manananana", userRole: "ADMIN"}//await axios.post(URL,userState)
            const isAdmin = response.userRole === "ADMIN" ? true : false
            const data = response;
            dispatch({type: AuthenticationActionType.LOGIN_SUCCESS, payload: {email: userState.email, isAdmin: isAdmin, ...podata}})
            history.push("/home")
        } 
        catch (error){
            dispatch({type: AuthenticationActionType.LOGIN_FAILED, payload: {}})
            setErrorHandler({ hasError: true, message: error.response.data.message });
        }
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