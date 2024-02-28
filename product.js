// import {total} from './data.js';

let changeNext=document.querySelector(".changeNext")
let changePrev=document.querySelector(".changePrev")
let bigImages=document.querySelector(".bigImages")
bigImages.style.overflow="scroll"
changeNext.onclick=()=>{
    bigImages.scrollBy({left:630,behavior:"smooth"})
}
changePrev.onclick=()=>{
    bigImages.scrollBy({left:-630,behavior:"smooth"})
}



let bigImg=document.querySelector(".bigImage-1")
let bigImg2=document.querySelector(".bigImage-2")
let shortImg1=document.querySelector(".shortImg-1")
let shortImg2=document.querySelector(".shortImg-2")
let intro=document.querySelector(".intro")
let title=document.querySelector(".title")
let readReviews=document.querySelector(".readReviews")
let oneTimePrice=document.querySelector(".oneTimePrice")
let autoPrice=document.querySelector(".autoPrice")
let price=document.querySelector(".price")
let sub=document.querySelector(".sub")
let add=document.querySelector(".add")
let quant=document.querySelector(".quant");

let inputOne=document.querySelector(".inputOne");
let inputTwo=document.querySelector(".inputTwo");
let labelOne=document.querySelector(".labelOne");
let labelTwo=document.querySelector(".labelTwo");
let hiddenAutoReplenish=document.querySelector(".hiddenAutoReplenish");
// function checkChange(){
//     console.log("in")
//     if(inputOne.checked=true){
//         inputTwo.checked=false 
//     }
//     else if(inputTwo.checked=true){
//         inputOne.checked=false
//     }
// }

let productData=()=>{totalProducts.map((val)=>{
    let idPr=window.location.href.split("?")[1]
    if(val.id===idPr)
    {
        title.innerHTML=val.title   
        intro.innerHTML=val.title
        bigImg.src=val.image
        shortImg1.src=val.image
        oneTimePrice.innerHTML=(val.price).toString()
        console.log((val.price.split("$")[1]))
        let autoPriceWithoutPrecision=((val.price.split("$")[1])-((val.price.split("$")[1])*0.2)).toPrecision(5)
        autoPrice.innerHTML="$"+autoPriceWithoutPrecision.toString()
        if(val.hoverImage){
            bigImg2.src=val.hoverImage
            shortImg2.src=val.hoverImage
        }
        readReviews.innerHTML=val.reviews
        price.innerHTML=val.price
    }
})
}
productData()


//ML type price
let ml15=document.querySelector(".ml15")
let ml30=document.querySelector(".ml30")
let ml50=document.querySelector(".ml50")
ml50.style.border="1px solid black"
let changedOneTimePrice="$"+((oneTimePrice.innerHTML.split("$")[1])/3).toPrecision(5)
let changedAutoPrice="$"+((changedOneTimePrice.split("$")[1])*0.2).toPrecision(5)
ml15.onclick=()=>{
    ml15.style.border="1px solid black"
    ml30.style.border="1px solid gray"
    ml50.style.border="1px solid gray"
    productData()
    changedOneTimePrice="$"+((oneTimePrice.innerHTML.split("$")[1])*0.32).toPrecision(5)
    changedAutoPrice="$"+((changedOneTimePrice.split("$")[1])*0.84).toPrecision(5)
    oneTimePrice.innerHTML=changedOneTimePrice
    price.innerHTML=changedOneTimePrice
    autoPrice.innerHTML=changedAutoPrice
    if(inputOne.checked==false && inputTwo.checked==true){
        price.innerHTML=autoPrice.innerHTML
    }
    else if(inputOne.checked==true && inputTwo.checked==false){
        price.innerHTML=oneTimePrice.innerHTML
    }
}
ml30.onclick=()=>{
    ml15.style.border="1px solid gray"
    ml30.style.border="1px solid black"
    ml50.style.border="1px solid gray"
    productData()
    changedOneTimePrice="$"+((oneTimePrice.innerHTML.split("$")[1])*0.383).toPrecision(5)
    changedAutoPrice="$"+((changedOneTimePrice.split("$")[1])*0.85).toPrecision(5)
    oneTimePrice.innerHTML=changedOneTimePrice
    autoPrice.innerHTML=changedAutoPrice
    if(inputOne.checked==false && inputTwo.checked==true){
        price.innerHTML=autoPrice.innerHTML
    }
    else if(inputOne.checked==true && inputTwo.checked==false){
        price.innerHTML=oneTimePrice.innerHTML
    }
}
ml50.onclick=()=>{
    productData()
    ml15.style.border="1px solid gray"
    ml30.style.border="1px solid gray"
    ml50.style.border="1px solid black"
    if(inputOne.checked==false && inputTwo.checked==true){
        price.innerHTML=autoPrice.innerHTML
    }
    else if(inputOne.checked==true && inputTwo.checked==false){
        price.innerHTML=oneTimePrice.innerHTML
    }
}

labelTwo.style.color="gray"
inputTwo.onclick=()=>{
    inputOne.checked=false
    labelOne.style.color="gray"
    labelTwo.style.color="black"
    price.innerHTML=autoPrice.innerHTML
    hiddenAutoReplenish.style.display="flex"
    hiddenAutoReplenish.style.flexDirection="column"
}
inputOne.onclick=()=>{
    inputTwo.checked=false
    labelTwo.style.color="gray"
    labelOne.style.color="black"
    price.innerHTML=oneTimePrice.innerHTML
    hiddenAutoReplenish.style.display="none"
}


// add and sub quantity 
sub.onmouseover=function(){
    if(quant.innerHTML==1){
        sub.style.cursor="not-allowed";
    }
    else{
        sub.style.cursor="pointer"
    }
}
let increment=()=>{
    quant.innerHTML=parseInt(quant.innerHTML)+1
    sub.style.backgroundColor="white"
    sub.style.color="black"
    sub.style.border="1px solid black"
}
let decrement=()=>{
    if(quant.innerHTML>1){
        quant.innerHTML=parseInt(quant.innerHTML)-1
        sub.style.backgroundColor="white"
        sub.style.color="black"
        sub.style.border="1px solid black"
    }
    if(quant.innerHTML<=1){
        sub.style.backgroundColor="lightgray"
        sub.style.color="white"
        sub.style.border="none"
        sub.style.cursor="not-allowed";
    }
}
let sponsored1=document.querySelector(".sponsored-1")
let sponsored2=document.querySelector(".sponsored-2")
let sponsoredProductName1=document.querySelector(".sponsoredProductName1")
let sponsoredProductName2=document.querySelector(".sponsoredProductName2")
sponsored1.onclick=()=>{
    console.log(window.location.href)
    totalProducts.map((val=>{
        if(sponsoredProductName1.innerHTML==val.title){
            window.location.href=`http://127.0.0.1:5500/product.html?${val.id}`
            productData()
        }
    }))
}
sponsored2.onclick=()=>{
    console.log(window.location.href)
    totalProducts.map((val=>{
        if(sponsoredProductName2.innerHTML==val.title){
            // console.log(window.location.href.split("?")[1]=val.id)
            window.location.href=`http://127.0.0.1:5500/product.html?${val.id}`
            productData()
        }
    }))
}

// let productOverviewBtn=document.querySelector(".productOverviewBtn")
// let howToUseBtn=document.querySelector(".howToUseBtn")
// let ingredientsBtn=document.querySelector(".ingredientsBtn")
// let otherDetailsBtn=document.querySelector(".otherDetailsBtn")

// let hiddenDropOverview=document.querySelector(".hiddenDropOverview")
// let hiddenDropHowToUse=document.querySelector(".hiddenDropHowToUse")
// let hiddenDropIngredients=document.querySelector(".hiddenDropIngredients")
// let hiddenDropOtherDetails=document.querySelector(".hiddenDropOtherDetails")


// productOverviewBtn.addEventListener('click',()=>{
//     if(hiddenDropOverview.style.display="none"){
//         hiddenDropOverview.style.display="flex"
//         let a=hiddenDropOverview.style.display
//         console.log("1",a)
//     }
//     else{
//         hiddenDropOverview.style.display="none"
//         console.log ("2")
//     }
// })
// howToUseBtn.addEventListener('',()=>{
//     if(hiddenDropHowToUse.style.display="none"){
//         hiddenDropHowToUse.style.display="flex"
//         let a=hiddenDropHowToUse.style.display
//         console.log("1",a)
//     }
//     else{
//         hiddenDropHowToUse.style.display="none"
//         console.log ("2")
//     }
// })


// review skin btn
// let ulSkinTypes=document.querySelector(".ulSkinTypes")
// skinTypeBtn.onclick=()=>{
//     let val=document.querySelector("#skinTypeBtn").getAttribute("aria-expanded")
//     if(val=="true"){
//         val="false"
//         ulSkinTypes.style.display="none"
//         // console.log(skinTypeBtn.ariaExpanded+"closed")
//     }
//     else{
//         val="true"
//         ulSkinTypes.style.display="flex"
//         ulSkinTypes.style.flexDirection="column"
//         // console.log(skinTypeBtn.ariaExpanded+"open")
//     }
//     skinTypeBtn.setAttribute("aria-expanded", val);
// }
// let ingredientsBtn=document.querySelector(".ingredientsBtn")

function check(dropDownId){
    let val=document.getElementById(dropDownId)
    let ulTag=val.nextElementSibling
    let expandValue=val.getAttribute("aria-expanded")
    console.log(expandValue)
    if(expandValue=="true"){
        expandValue="false"
            ulTag.style.display="none"
    }
    else{
        expandValue="true"
        ulTag.style.display="flex"
        ulTag.style.flexDirection="column"
    }
    val.setAttribute("aria-expanded", expandValue);
}


let type1Review=document.querySelector(".type1Review")
let type2Review=document.querySelector(".type2Review")
let type3Review=document.querySelector(".type3Review")
let type4Review=document.querySelector(".type4Review")
let type5Review=document.querySelector(".type5Review")



let selectedSort=document.getElementById("selectedSort")
function changeBtnTitle(title){
    type1Review.style.backgroundColor="white"
    type1Review.style.color="black"
    type2Review.style.backgroundColor="white"
    type2Review.style.color="black"
    type3Review.style.backgroundColor="white"
    type3Review.style.color="black"
    type4Review.style.backgroundColor="white"
    type4Review.style.color="black"
    type5Review.style.backgroundColor="white"
    type5Review.style.color="black"

    let getVal=document.getElementById(title)
    getVal.setAttribute("label","selected")
    if(getVal.getAttribute("label")=="selected"){
        getVal.style.backgroundColor="blue"
        getVal.style.color="white"
        console.log(type1Review)
        selectedSort.innerHTML=getVal.innerHTML
    }

}

//review to faq

let faqData=document.querySelector(".faqData")
let reviewData=document.querySelector(".reviewData")
let reviewHidden=document.querySelector(".review")
let faqHidden=document.querySelector(".faq")
let marker=document.querySelector(".marker")
reviewData.onclick=function showReview(e){
    e.preventDefault()
    console.log("1")
    console.log(faqHidden)
    marker.style.left="22%"
    marker.style.width="36%"
    reviewHidden.style.display="flex"
    reviewHidden.style.flexDirection="column"
    faqHidden.style.display="none"
}
faqData.onclick=function showFaq(e){
    console.log("2")
    e.preventDefault()
    console.log(marker.style.left)
    marker.style.left="60%"
    marker.style.width="23%"
    faqHidden.style.display="flex"
    reviewHidden.style.display="none"
}

//form show/hide

let ask=document.querySelector(".ask")
let hiddenForm=document.querySelector(".hiddenForm")
let openFormIcon=document.querySelector("#openFormIcon")
function rotate(){
    // console.log("tr")
    if(openFormIcon.classList.contains("rotate")){
        openFormIcon.classList.remove("rotate")
        ask.innerHTML="Ask a Question"
        hiddenForm.style.display="none"
        openFormIcon.style.color="black"
    }
    else{
        openFormIcon.classList.add("rotate")
        ask.innerHTML="Cancel"
        hiddenForm.style.display="flex"
        openFormIcon.style.color="royalblue"
    }
    console.log(openFormIcon)
}

// errors={
//     'ques':false,
//     'email':false,
//     'name':false
// }
// function checkChange(idOfInput){
//     // console.log("test")
//     let inputField=document.getElementById(idOfInput)
//     if(inputField.value===""){
//         errors.ques=true
//         console.log(errors.ques)
//     }
// }

// let basket=[]




// function showSpecificMenu(hiddenCategoryId){
//     let hiddenCategory=document.getElementById(hiddenCategoryId)
//     hiddenCategory.style.display="grid"
//     }
//     function hideSpecificMenu(hiddenCategoryId){
//     let hiddenCategory=document.getElementById(hiddenCategoryId)
//     // console.log(hiddenCategory)
//     hiddenCategory.style.display="none"
//     }


//     let numb=document.querySelector(".numb")
//     function showAtoZ(charValue){
//         let character=document.querySelectorAll(".character")
//     let alpha=document.getElementById(charValue)
//     document.querySelectorAll(".character").forEach(val=>{
//         if(alpha.innerHTML.toLowerCase()===val.innerHTML.split("")[0].toLowerCase())
//         {  
//             val.style.display="block"
//        }
//        else if(alpha.innerHTML==="0-9"){
//         val.style.display="none"
//         numb.style.display="block"
//        }
//        else{
//             val.style.display="none"
//         }
//     })
// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// cart




