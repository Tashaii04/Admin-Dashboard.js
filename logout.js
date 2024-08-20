const logout = ()=>{
    let res = window.confirm("do you really want to logout");
    console.log(res);
    if(res){
        window.localStorage.removeItem("logininfo")
        window.location.href = "login.html";
        
    }else{
        console.log("sorry")
    }
}