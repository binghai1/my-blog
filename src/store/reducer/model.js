import * as type from '../constant'
const initialState={
    showLogin:false,
    showRegister:false,
    selectTags:[],
    list:[],
    tags:[],
    width:0
}
export default (state=initialState,action)=>{
    switch (action.type){
        case type.SHOW_LOGIN_MODEL:
            return  {...state,showLogin:action.showLogin}
        case type.SHOW_REGISTER_MODEL:
            return  {...state,showRegister:action.showRegister}
        case type.SET_TAGS:{
            let tags=[]
            //是array就直接赋值
            if(typeof(action.tag)==="object"){
                tags=action.tag 
            }
            else if(state.selectTags.indexOf(action.tag)!==-1){
                tags=state.selectTags.filter(tag=>tag!==action.tag)
            }else{
                tags=[...state.selectTags,action.tag]
            }
            return  {...state,selectTags:tags}
        }
        
        case type.SET_LIST:
            return  {...state,list:action.list}
        
        case type.SAVE_TAGS:{
            return  {...state,tags:action.tags}
        }
        case type.SET_WIDTH:{
            return  {...state,width:action.width}
        }
        default:
            return state
    }
}