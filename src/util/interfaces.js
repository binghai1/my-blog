const BASE_URL="/api/"
export const registerUrl=BASE_URL+'users'
export const loginUrl=BASE_URL+'users/login'
export const deleteUserUrl=(id)=>{
    return BASE_URL+`users/${id}`
}
export const findUsersUrl=(page,q)=>{
    let url=BASE_URL+'users'
    if(page){
        url+=`?page=${page}`
    }   
    if(q){
        if(!page){
            url+=`?q=${q}`
        }else{
            url+=`&q=${q}`
        }
    }  
    return url
}
export const createArticleUrl=BASE_URL+'articles'
export const getArticlesUrl=(obj)=>{
    let url=BASE_URL+'articles'
    if(!obj){
        return url
    }
    const {page,onlyTitle,q,tag}=obj
    if(page){
        url+=`?page=${page}`
    }   
    if(q){
        if(!page){
            url+=`?q=${q}`
        }else{
            url+=`&q=${q}`
        }
    }   
    if(onlyTitle){
        if(!page){
            url+=`?onlyTitle=true`
        }else{
            url+=`&onlyTitle=true`
        }
    }
    if(tag){
        if(!q){
            url+=`?tag=${tag}`
        }else{
            url+=`&tag=${tag}`
        }
    }       
    return url
}
export const findArticlesByIdUrl=(id)=>{
    return BASE_URL+`articles/${id}`
}
export const updateArticlesUrl=(id)=>{
    return BASE_URL+`articles/${id}`
}

export const deleteArticlesUrl=(id)=>{
    return BASE_URL+`articles/${id}`
}

export const createTagsUrl=BASE_URL+'tags'
export const getTagsUrl=BASE_URL+'tags'

export const findArticlesByTagURl=(id)=>{
    return BASE_URL+`tags/${id}/articles`
}

export const deleteTagsUrl=(id)=>{
    return BASE_URL+`tags/${id}`
}

export const createCommentUrl=BASE_URL+'comments'

export const findCommentsURl=(id)=>{
    return BASE_URL+`comments/${id}`
}

export const deleteCommentUrl=(id)=>{
    return BASE_URL+`comments/${id}`
}
export const deleteAllCommentUrl=(id)=>{
    return BASE_URL+`comments/removeAll/${id}`
}