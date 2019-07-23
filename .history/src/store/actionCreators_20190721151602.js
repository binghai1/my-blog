import * as type from './constant'

export const getSetUser=(data)=>({
    type:type.SET_USER,
    data
})