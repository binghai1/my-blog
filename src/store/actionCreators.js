import axios from 'axios'
import {loginUrl} from '../util/interfaces'
import jwt_decode from 'jwt-decode'
import {SHOW_LOGIN_MODEL,SHOW_REGISTER_MODEL,
    SET_USER,SET_AUTHORIZATION, SET_TAGS,SET_LIST,SAVE_TAGS} from '../store/constant'

export const getModel=(flag)=>({
    type:SHOW_LOGIN_MODEL,
    showLogin:flag
})
export const getRegisterModel=(flag)=>({
    type:SHOW_REGISTER_MODEL,
    showRegister:flag
})
export const setUser= (data)=>{
    return async (dispatch)=>{
       let res=await axios.post(loginUrl,data)
       if(res.status!=200) return 
       let token=res.data.data.token
       let user=jwt_decode(token)
       localStorage.setItem("token",token)
       dispatch(setAuthorization(user))
       dispatch(setUserInfo(user))
       return "succes"

    //    dispatch({ type:type.SET_USER, data }) 
    }
    
}
export const setAuthorization= (user)=>{
        return {
             type:SET_AUTHORIZATION,
             data:!isEmpty(user) 
        }
}
//selected tags
export const setTags= (tag)=>{
    return {
         type:SET_TAGS,
         tag
    }
}
export const saveTags= (tags)=>{
    return {
         type:SAVE_TAGS,
         tags
    }
}
export const setList= (list)=>{
    return {
         type:SET_LIST,
         list
    }
}

export const setUserInfo= (user)=>{
    return {
         type:SET_USER,
         data:{
            _id:user.id,
            username:user.username,
            role:user.role
        }
    }
}
const isEmpty=(value)=>{
    return value==undefined||value==""
    ||(typeof value =="object"&&Object.keys(value).length==0)
    ||(typeof value =="array"&&value.trim().length==0)
}