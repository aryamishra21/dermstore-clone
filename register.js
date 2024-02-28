// let errors={
//     fullName:false,
//     Email:false,
//     confEmail:false,
//     pass:false,
//     confPassword:false,
// }

let nameInput=document.querySelector(".nameInput")
let mailInput=document.querySelector(".mailInput")
let cmailInput=document.querySelector(".cmailInput")
let passI=document.querySelector(".passI")
let cpassI=document.querySelector(".cpassI")
let passInput=document.querySelector(".passInput")
let cpassInput=document.querySelector(".cpassInput")
let phoneInput=document.querySelector(".phoneInput")
let refInput=document.querySelector(".refInput")
let submitBtn=document.querySelector(".submitBtn")

let emailText=document.querySelector(".emailText")
let passText=document.querySelector(".passText")
let errorDataCPass=document.querySelector(".errorDataCPass")
let errorData=document.querySelector(".error")
let errorDataName=document.querySelector(".errorDataName")
let errorDataEmail=document.querySelector(".errorDataEmail")
let errorDataCEmail=document.querySelector(".errorDataCEmail")
let errorDataPass=document.querySelector(".errorDataPass")
let reg=document.querySelector(".submitBtn")


let show=document.querySelector(".show")
let cshow=document.querySelector(".cshow")

let validRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
nameInput.addEventListener('blur',()=>{
    if(nameInput.value===""){
        errorDataName.style.display="flex"
        nameInput.style.border="1px solid red"
    }
    else{
        errorDataName.style.display="none"
        nameInput.style.border="1px solid gray"
    }
})

mailInput.addEventListener('blur',()=>{
    if(mailInput.value===""){
        console.log("1")
        errorDataEmail.style.display="flex"
        mailInput.style.border="1px solid red"
    }
    // else if(mailInput.value!="" && mailInput.value!=typeof(email)){
    else if(mailInput.value!="" && !mailInput.value.match(validRegex)){
        console.log("2")
        errorDataEmail.style.display="flex"
        mailInput.style.border="1px solid red"
        emailText.innerHTML="Email address must be a valid email"
        console.log(mailInput.value)
    }
    else{
        console.log("3")
        errorDataEmail.style.display="none"
        mailInput.style.border="1px solid gray"
    }
})

cmailInput.addEventListener('blur',function(){
    console.log("blurred")
        console.log("checked")
        if(mailInput.value.match(validRegex) && mailInput.value!==cmailInput.value){
            cmailInput.style.border="1px solid red"
            errorDataCEmail.style.display="flex"
        }
        else{
            cmailInput.style.border="1px solid gray"
                errorDataCEmail.style.display="none"
        }
})

passInput.addEventListener('blur',function(){
    console.log("blurred")
        console.log("checked")
        if(passInput.value===""){
            errorDataPass.style.display="flex"
            passI.style.border="1px solid red"
        }
        else if(passInput.value!="" && passInput.value.length<6){
            console.log(passInput.value.length)
            errorDataPass.style.display="flex"
            passI.style.border="1px solid red"
            passText.innerHTML="Password must be at least 6 characters"
        }
        else{
            errorDataPass.style.display="none"
            passI.style.border="1px solid gray"
        }
})

cpassInput.addEventListener('blur',function(){
    if(passInput.value.length>5 && cpassInput.value!=passInput.value){
        errorDataCPass.style.display="flex"
        cpassI.style.border="1px solid red"
    }
    else{
        errorDataCPass.style.display="none"
        cpassI.style.border="0.1px solid gray"
    }
})
function signData(){
    let valid=true
    if(nameInput.value===""){
        errorDataName.style.display="flex"
        nameInput.style.border="1px solid red"
        valid=false
    }
    else{
        errorDataName.style.display="none"
        nameInput.style.border="1px solid gray"
    }
    if(mailInput.value===""){
        console.log("1")
        errorDataEmail.style.display="flex"
        mailInput.style.border="1px solid red"
        valid=false
    }
    else if(mailInput.value!="" && !mailInput.value.match(validRegex)){
        console.log("2")
        errorDataEmail.style.display="flex"
        mailInput.style.border="1px solid red"
        emailText.innerHTML="Email address must be a valid email"
        console.log(mailInput.value)
        valid=false
    }
    else{
        console.log("3")
        errorDataEmail.style.display="none"
        mailInput.style.border="1px solid gray"
    }

    if(mailInput.value!="" && mailInput.value.match(validRegex)){
        if(mailInput.value!==cmailInput.value){
            cmailInput.style.border="1px solid red"
            errorDataCEmail.style.display="flex"
            valid=false
        }
    }
    else{
        cmailInput.style.border="1px solid gray"
            errorDataCEmail.style.display="none"
    }

    if(passInput.value===""){
        errorDataPass.style.display="flex"
        passI.style.border="1px solid red"
        valid=false
    }
    else if(passInput.value!="" && passInput.value.length<6){
        console.log(passInput.value.length)
        errorDataPass.style.display="flex"
        passI.style.border="1px solid red"
        passText.innerHTML="Password must be at least 6 characters"
        valid=false
    }
    else{
        errorDataPass.style.display="none"
        passI.style.border="1px solid gray"
    }
    return valid
}

reg.addEventListener("click",(e)=>{
    e.preventDefault()
    if(signData()===true){
        let user={
            'username':nameInput.value,
            'Email':mailInput.value,
            'Password':passInput.value,
            'Phone':phoneInput.value
        }
    console.log(signData.value)
    localStorage.setItem(nameInput.value,JSON.stringify(user))
    }
})

show.addEventListener('click',togglePassword)

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
cshow.addEventListener('click',toggleCPassword)

function toggleCPassword(){
    if(cpassInput.type==="text"){
        cshow.innerHTML="HIDE"
        cpassInput.type="password"
        console.log("text")
    }
    else{
        cshow.innerHTML="SHOW"
        cpassInput.type="text"
        console.log("hidden")
    }
}

