import { createReducer } from 'redux-act'
import {Toast} from 'native-base';
export const REDUCER = 'login'

export const login = ( username, password) => (dispatch,getState) => {
  
  //let isLoggined = app.login(username, password, dispatch)
  Toast.show({
    text: "Wrong password!" + username + ' - ' + password,
    buttonText: "Dissmiss!"
  });
 
}

const initialState = {}
export default createReducer({}, initialState)
