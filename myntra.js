function signup(event){
    event.preventDefault ( )
    // alert("working");
 
 
    var name =document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
 
    if( name && email && password && confirmpassword){
     if(password.length>=8 && confirmpassword.length>=8){
         if(password==confirmpassword){
 
            
                 var myntra= JSON.parse(localStorage.getItem("muser")) || []   
                 var flag=false;
                 for(i=0;i<myntra.length;i++){
                     if(myntra[i].uemail==email){
                         flag=true;
                     }
 
                 }
                 if(flag==false){
                 var mdata ={uname :name,uemail:email,upassword:password,uconfirmpassword:confirmpassword}
                 myntra.push(mdata);
                 console.log(myntra);
                 localStorage.setItem("muser",JSON.stringify(myntra))
                 window.location.href="./login.html"
 
                 }
                 else{
                     alert("email already exits")
                 }
 
             }
             else{
                 console.log("password not match");
             }
 
         }
 
         else{
             console.log("password should be 8 digit");
            
         }
 
 
    }
    else{
      console.log("all field are required")
    }
 
 }

 function Login(event){
    event.preventDefault();
    alert("working");


    var lemail=document.getElementById("lemail").value;
    var lpassword=document.getElementById("lpassword").value;

    var loginuser={};
    if(lemail && lpassword){
        var myntra=JSON.parse(localStorage.getItem("muser"))
        var flag =false;
        for(var i=0;i<myntra.length;i++){
            if(myntra[i].uemail==lemail){
                flag=true;
                loginuser=myntra[i];
            }

           
        }
             if( flag==true){
                localStorage.setItem("mlogin",JSON.stringify(loginuser))
                alert("login successfull")
                window.location.href="./myntrahome.html"
                

        }
        


        else{
            alert("caredential are match")
        }


    }
    else{
        alert("all field are required")
    }

}