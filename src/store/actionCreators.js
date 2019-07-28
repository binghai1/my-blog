import * as type from './constant'

export const getSetUser=(data)=>({
    type:type.SET_USER,
    data
})

export const getModel=(flag)=>({
    type:type.SHOW_LOGIN_MODEL,
    showLogin:flag
})
export const getRegisterModel=(flag)=>({
    type:type.SHOW_REGISTER_MODEL,
    showRegister:flag
})