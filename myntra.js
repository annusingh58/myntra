function signup(event){
    event.preventDefault();

    var name=document.getElementById("mname").value;
    var email=document.getElementById("memail").value;
    var password=document.getElementById("mpassword").value;
    var cpassword=document.getElementById("mconfirmpassword").value;


    if(name && email && password && cpassword){
        if(password.length>=8 && password.length>=8){
            if(password==cpassword){
                var ls=JSON.parse(localStorage.getItem("myntrausers")) || [];
                var flag=false;
                for(var i=0;i<ls.length;i++){
                    if(ls[i].uemail==email){
                        flag=true;
                    }
                }
                if(flag==true){
                    alert("email already exist");
                }
                else{
                    var myntra={uname:name,uemail:email,upassword:password,ucpassword:cpassword};
                    ls.push(myntra);
                    localStorage.setItem("myntrausers",JSON.stringify(ls));
                    alert("sign up successfully");
                    document.getElementById("mname").value='';
                    document.getElementById("memail").value='';
                    document.getElementById("mpassword").value='';
                    document.getElementById("mconfirmpassword").value='';
                    window.location.href=`./login.html`
                }
            }
            else{
                console.log("Password not matched.")
            }
        }
        else{
            console.log("Password should be more than 8 digits.")
        }
    }
    else{
        console.log("all fields are required.");
    }
}

function login(event){
    event.preventDefault();

    var email=document.getElementById("lemail").value;
    var pass=document.getElementById("lpassword").value;
    var myntralogin={};

    if(email && pass){
        var marray=JSON.parse(localStorage.getItem("myntrausers"));
        console.log(marray,"array here");
        var flaglogin=false;
        for(var i=0;i<marray.length;i++){
            if(marray[i].uemail==email){
                flaglogin=true;
                myntralogin=marray[i];
            }
        }
        if(flaglogin==true){
            localStorage.setItem("mlogin",JSON.stringify(myntralogin));
            alert("login successfully");
            window.location.href="./myntrahome.html";
        }
    }
    else{
        console.log("both fields are required.")
    }
}
