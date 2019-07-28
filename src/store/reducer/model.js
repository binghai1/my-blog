import * as type from '../constant'
const initialState={
    showLogin:false,
    showRegister:false,
}
export default (state=initialState,action)=>{
    switch (action.type){
        case type.SHOW_LOGIN_MODEL:
            return  {...state,showLogin:action.showLogin}
        case type.SHOW_REGISTER_MODEL:
            return  {...state,showRegister:action.showRegister}
        default:
            return state
    }
}