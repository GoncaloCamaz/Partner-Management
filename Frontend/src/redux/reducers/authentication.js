import { AuthenticationActionType } from "../actions/AuthenticationAction";
import axios from "axios";

const initialState = {
    email: '',
    isAdmin: false,
    authenticated: false,
    token: '',
    authenticationTimestamp: new Date()
}

const authenticationReducer = (state=initialState, action) => {

    switch(action.type) {
        case AuthenticationActionType.LOGIN_SUCCESS:
            const loginAuthState = {
                authenticated: true,
                authenticationTimestamp: new Date(),
                ...action.payload,
              };
              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${action.payload.token}`;
              //localStorage.setItem("auth", JSON.stringify(loginAuthState));
              return loginAuthState;

        case AuthenticationActionType.LOGOUT:
            return initialState

        default:
            return state;
    }
}

export default authenticationReducer;