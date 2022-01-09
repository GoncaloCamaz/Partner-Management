import axios from "axios";
import { backendURL } from "../../constants";

const AuthenticationActionType = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT: 'LOGOUT'
}

const LoginAuthenticationAction = (userState, history, setErrorHandler) => {
    return async (dispatch) => {
        try{
            const URL = backendURL + "login"
            const response = await axios.post(URL,userState)
            const data = response.data;
            const isAdmin = data.userRole === "ADMIN" ? true : false
            dispatch({type: AuthenticationActionType.LOGIN_SUCCESS, payload: {email: userState.email, isAdmin: isAdmin, ...data}})
            history.push("/home")
        } 
        catch (error){
            dispatch({type: AuthenticationActionType.LOGIN_FAILED, payload: {}})
            setErrorHandler({ hasError: true, message: error });
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