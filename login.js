// let nameInput=document.querySelector(".nameInput")
let mailInput=document.querySelector(".mailInput")
// let cmailInput=document.querySelector(".cmailInput")
let passI=document.querySelector(".passI")
let show=document.querySelector(".show")
let passInput=document.querySelector(".passInput")
let errorData=document.querySelector(".error")
let errorMain=document.querySelector(".errorMain")
let errorDataEmail=document.querySelector(".errorDataEmail")
let errorDataPass=document.querySelector(".errorDataPass")
let emailText=document.querySelector(".emailText")
let login=document.querySelector(".login")
let validRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//checking keyups
let timeout;
if(mailInput){
    mailInput.addEventListener('keyup',()=>{
    clearTimeout(timeout)
    timeout=setTimeout(()=>{
        if(mailInput.value===""){
            errorDataEmail.style.display="flex"
            mailInput.style.border="none"
            mailInput.style.outline="2px solid red"
            emailText.innerHTML="Email address is a required field"
        }
        else if(mailInput.value!=="" && !mailInput.value.match(validRegex)){
            errorDataEmail.style.display="flex"
            mailInput.style.border="none"
            mailInput.style.outline="2px solid red"
            emailText.innerHTML="Email address must be a valid email"
        }
        else{
            errorDataEmail.style.display="none"
            mailInput.style.border="0.1px solid gray"
            mailInput.style.outline="none"
        }
        console.log("test")
    },1000);
})
}

if(passInput){
passInput.addEventListener('keyup',()=>{
    clearTimeout(timeout)
    timeout=setTimeout(()=>{
        if(passInput.value===""){
            errorDataPass.style.display="flex"
            passI.style.border="none"
            passI.style.outline="2px solid red"
        }
        else{
            errorDataPass.style.display="none"
            passI.style.outline="none"
            passI.style.border="1px solid gray"
        }
        console.log("test")
    },1000);
})
}

//checking for blur 
//for mail
if(mailInput){
mailInput.addEventListener('blur',()=>{
    if(mailInput.value===""){
        errorDataEmail.style.display="flex"
        mailInput.style.border="none"
        mailInput.style.outline="2px solid red"
        console.log("1")
    }
    else if(mailInput.value!=="" && !mailInput.value.match(validRegex)){
        errorDataEmail.style.display="flex"
        mailInput.style.border="none"
        mailInput.style.outline="2px solid red"
        emailText.innerHTML="Email address must be a valid email"
        console.log("2")
    }
    else{
        errorDataEmail.style.display="none"
        mailInput.style.border="0.1px solid gray"
        mailInput.style.outline="none"
        console.log("3")
    }
})
}

//for password
if(passInput){
passInput.addEventListener('blur',function(){
        // console.log("checked")
        // console.log(mailInput.attributes["type"].innerHTML==="email")
        if(passInput.value===""){
            errorDataPass.style.display="flex"
            passI.style.border="none"
            passI.style.outline="2px solid red"
        }
        else{
            errorDataPass.style.display="none"
            passI.style.border="1px solid gray"
        }
})
}



//check for validity
// function signIn(){
//     let check=true
//     //mail
//     if(mailInput.value===""){
//         errorDataEmail.style.display="flex"
//         mailInput.style.border="none"
//         mailInput.style.outline="2px solid red"
//         check=false
//     }
//     else if(mailInput.value!="" && !mailInput.value.match(validRegex)){
//         errorDataEmail.style.display="flex"
//         mailInput.style.border="none"
//         mailInput.style.outline="2px solid red"
//         emailText.innerHTML="Email address must be a valid email"
//         check=false
//     }
//     else{
//         errorDataEmail.style.display="none"
//         mailInput.style.border="0.1px solid black"
//         mailInput.style.outline="none"
//     }

//     //password
//     if(passInput.value===""){
//         errorDataPass.style.display="flex"
//         passI.style.border="none"
//         passI.style.outline="2px solid red"
//         check=false
//     }
//     else{
//         errorDataPass.style.display="none"
//         passI.style.border="1px solid gray"
//     }
//     return check
// }

let loginStatus=false;
let checkUser;

if(login){
    login.addEventListener('click',getAllDetails)
}
function getAllDetails(e){
    e.preventDefault()
    var checkDetails=[]
    for(let i=0;i<localStorage.length;i++){
        const keyValue=localStorage.key(i)
        console.log(keyValue)
        // let ab=localStorage.getItem(`${keyValue}`)
        // console.log(ab)
        let valueStored=JSON.parse(localStorage.getItem(`${keyValue}`).toString())
        checkDetails.push(valueStored)
    }
    console.log(checkDetails)
    // let check=true
    let allStoredValues=checkDetails.map(function(val){
        // console.log(val.username)
        // console.log(val.Email)
        // console.log(val.Password)
            if(val.Email===mailInput.value && val.Password===passInput.value){
                console.log("success")
                loginStatus=true;
                console.log(loginStatus)
                checkUser=val.Email
                window.location.href="http://127.0.0.1:5500/index.html";
                
                // check=true
                // return check
            }
            if(mailInput.value!="" && passInput.value!==""){
                if(val.Email!==mailInput.value || val.Password!==passInput.value){
                    errorMain.style.display="flex"
                    // check=false
                    loginStatus=false;
                }
            }
            else{
                errorMain.style.display="none"
            }
            //mail
            if(mailInput.value===""){
                errorDataEmail.style.display="flex"
                mailInput.style.border="none"
                mailInput.style.outline="2px solid red"
                // check=false
            }
            else if(mailInput.value!="" && !mailInput.value.match(validRegex)){
                errorDataEmail.style.display="flex"
                mailInput.style.border="none"
                mailInput.style.outline="2px solid red"
                emailText.innerHTML="Email address must be a valid email"
                // check=false
            }
            else{
                errorDataEmail.style.display="none"
                mailInput.style.border="0.1px solid black"
                mailInput.style.outline="none"
            }

            //password
            if(passInput.value===""){
                errorDataPass.style.display="flex"
                passI.style.border="none"
                passI.style.outline="2px solid red"
                // check=false
            }
            else{
                errorDataPass.style.display="none"
                passI.style.border="1px solid gray"
            }
        })
}
            // console.log("failed")
            // return check
        // console.log(check)
    // if 

// login.addEventListener('click',allStoredValues)
// console.log(allStoredValues)
    // localStorage.getItem()
if(show){
    show.addEventListener('click',togglePassword)
}
function togglePassword(){
    if(passInput.type==="text"){
        show.innerHTML="HIDE"
        passInput.type="password"
        console.log("text")
    }
    else{
        show.innerHTML="SHOW"
        passInput.type="text"
        console.log("hidden")
    }
}