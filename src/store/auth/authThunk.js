import { isLoading, setUser } from "./authSlice";
//create thunk
import {
    logInWithEmailAndPassword
} from "../../config/firebaseConfig";

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(isLoading());
        const loginResponse = await
        logInWithEmailAndPassword(email, password);
        const {user} = loginResponse;
        console.log(user);
        dispatch(setUser(user));
        //TODO
        //DISPATCH(SET_USER(user));
    }

    /*const user = {
    name: 'Paul',
    lastName: 'Landaeta',
    password: 'nananagente1'
}
export const login = () => {
    return async (dispatch) => {
        dispatch(isLoading());
        dispatch(setUser(user));
        // TODO:
        //(FIREBASE LOGIN)
        //AWAIT DATOS USER
        //dispatch(setUser(userData));
    };
}
*/
}