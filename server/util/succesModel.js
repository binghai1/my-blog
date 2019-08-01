

module.exports=(data={},totalPage,message="success")=>{
    let res=""
    if(totalPage){
      res={code:0,data,message,totalPage}
    }else{
        res={code:0,data,message}
    }
    return res
    
}
    