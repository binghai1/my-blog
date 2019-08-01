import * as type from '../constant'
const initialState={
    username:"",
    id:"",
    isAuthorization:false,
    role:"普通用户"
}
export default (state=initialState,action)=>{
    switch (action.type){
        case type.SET_USER:
            return  {...state,...action.data}
        case type.SET_AUTHORIZATION:
            return {...state,isAuthorization:action.data}
        default:
            return state
    }
}