// let basket=JSON.parse(localStorage.getItem("data")) || []
// let calculation=()=>{
//     let cartAmount=document.getElementById("noInCart");
//     cartAmount.innerHTML=basket.map((x)=>x.quantity).reduce((x,y)=>x+y,0)
// }

// calculation()



let leftData=document.querySelector(".leftData")
// let leftDataInner=document.querySelector(".leftDataInner")
// leftDataInner.style.display="flex"
let sponsoredPr=document.querySelector(leftData.firstElementChild)
let sponsoredProduct=document.querySelector(".sponsoredProduct")
// sponsoredPr.setAttribute('class',)
// first slider

        var counter=0;
        let slides=document.querySelectorAll(".slide");
        slides.forEach(
            (slide,index)=>slide.style.left=`${index*100}%`
        )
        goPrev=()=>{
            if(counter<=0){
                counter=2
            }
            else{
                counter--;
            }
            slideImage()
        }
        goNext=()=>{
            if(counter>=2){
                counter=0
            }
            else{
                counter++;
            }
            slideImage()
        }
        const slideImage=()=>{
            slides.forEach(
                (slide)=>
                    slide.style.transform=`translateX(-${counter*100}%)`    
            )
        }

        // first slider

// var changeSp=0;
// let sponsoredProducts=document.querySelectorAll(".sponsoredProduct");
// console.log(sponsoredProducts)
// sponsoredProducts.forEach(
//     (slide,index)=>slide.style.left=`${index*100}%`
// )
sponsoredPrev=()=>{
    leftData.scrollBy({left:-400,behavior:"smooth"})
    console.log("inprev")
    // leftData.style.border="5px solid olive"
    // if(changeSp<=0){
    //     changeSp=4
    // }
    // else{
    //     changeSp--;
    // }
    // slideSponsor()
}
sponsoredNext=()=>{
    leftData.scrollBy({left:400,behavior:"smooth"})
    console.log("innext")
    // leftData.style.border="5px solid red"
    // if(changeSp>=4){
    //     changeSp=0
    // }
    // else{
    //     changeSp++;
    // }
    // slideSponsor()
}
// const slideSponsor=()=>{
//     leftData.scrollBy({left:-100,behavior:"smooth"})
//     console.log("here");
//     sponsoredProducts.forEach(
//         (slide)=>
//         slide.style.transform=`translateX(-${changeSp*100}%)`    
//         )
// }



// let slideShow=document.querySelector(".slideShow")
// slideShow.style.overflow="scroll"
// // slideShow.style.border="2px solid red"
// let changeNext=document.querySelector(".changeNext")
// changeNext.onclick=()=>{
//     console.log("next")
//     slideShow.scrollBy({left:-1320,behavior:"smooth"})
// }

// let changePrev=document.querySelector(".changePrev")
// changePrev.onclick=()=>{
//     console.log("prev")
//     slideShow.scrollBy({left:1320,behavior:"smooth"})
// }


//bestSellers
let bestSellersArr=[
    {
        id:"0",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/11289609-4505043613045506.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/11289609-1715102280309729.jpg",
        title:"SkinCeuticals C E Ferulic (1 fl. oz.)",
        buttonTitle:"SkinCeuticals Gift",
        reviews:"5328 Reviews",
        price:"$182.00"
    },
    {
        id:"1",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/11370303-8395107124712024.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/11370303-2005107167153588.jpg",
        title:"EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
        reviews:"5093 Reviews",
        price:"$43.00"
    },
    {
        id:"2",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13315093-1014974668204085.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13315093-7444974668249790.jpg",
        title:"Augustinus Bader The Rich Cream 50ml",
        reviews:"36 Reviews",
        price:"$300.00"
    },
    {
        id:"3",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/12596429-3594871019700125.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/12596429-5594867613443995.jpg",
        title:"SkinMedica TNS Advanced+ Serum (1 oz.)",
        buttonTitle:"$30 Gift",
        reviews:"442 Reviews",
        price:"$295.00"
    },
    {
        id:"4",
        image:"https://static.thcdn.com/images/small/webp//productimg/1600/1600/11355226-1784793612311083.png",
        title:"iS Clinical Pro-Heal Serum Advance+ 15ml",
        reviews:"352 Reviews",
        price:"$95.00"
    },
    {
        id:"5",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/11291543-2625058749151411.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/11291543-2115058749190027.jpg",
        title:"Obagi Medical Professional-C Serum 20% (1 fl. oz.)",
        reviews:"988 Reviews",
        price:"$142.00"
    },
    {
        id:"6",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/11370772-8235100647632329.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/11370772-1255100647660469.jpg",
        title:"RevitaLash Advanced Eyelash Conditioner - 3 Month Supply (0.067 fl. oz.)",
        reviews:"418 Reviews",
        price:"$100.00"
    },
    {
        id:"7",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/11523630-4395018245078593.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/1600/1600/10757840-1654815566318298.jpg",
        title:"Elemis Pro-Collagen Cleansing Balm 100g",
        reviews:"82 Reviews",
        price:"$68.00"
    },
    {
        id:"8",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/11588281-8764882139037003.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/11588281-1814883754372942.jpg",
        title:"Sunday Riley Good Genes All-In-One Lactic Acid Treatment 1.7oz",
        buttonTitle:"$15 Gift",
        reviews:"1395 Reviews",
        price:"$122.00"
    },
    {
        id:"9",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/12664554-5195073434706621.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/12664554-2985073434760714.jpg",
        title:"Neocutis LUMIÈRE® FIRM Illuminating Tightening Eye Cream (0.5 fl. oz.)",
        reviews:"106 Reviews",
        price:"$108.00",
    },
    {
        id:"10",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13175617-7415105585919201.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13175617-2104876428767502.jpg",
        title:"AGENT NATEUR Holi(mane) Hair Skin Nails 2 Daily Supplements Combined",
        buttonTitle:"$62 AGENT NATEUR Gift",
        reviews:"3 Reviews",
        price:"$99.00"
    },
    {
        id:"11",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13175691-9154876456112937.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13175691-8744876456161345.jpg",
        title:"Revision Skincare Revox™ Line Relaxer 0.68 fl. oz.",
        reviews:"13 Reviews",
        price:"$154.00"
    },
    {
        id:"12",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/11370441-2064871760791865.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/11370441-1844864252549125.jpg",
        title:"Eminence Organic Skin Care Rosehip Triple C+E Firming Oil 1 fl. oz.",
        reviews:"81 Reviews",
        price:"$118.00"
    },
    {
        id:"13",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/11290635-9025043619566462.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/11290635-1205102277822399.jpg",
        title:"SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)",
        buttonTitle:"SkinCeuticals Gift",
        reviews:"2054 Reviews",
        price:"$150.00"
    },
    {
        id:"14",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/11395385-2085043599411160.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/11395385-2055102279653389.jpg",
        title:"SkinCeuticals Hyaluronic Acid Intensifier (1 fl. oz.)",
        buttonTitle:"SkinCeuticals Gift",
        reviews:"1237 Reviews",
        price:"$110.00"
    },
    {
        id:"15",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/11370312-8235107125161142.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/11370312-8345107169104971.jpg",
        title:"EltaMD UV Clear Broad-Spectrum SPF 46 - Tinted (1.7 oz.)",
        reviews:"1505 Reviews",
        price:"$45.00"
    },
    {
        id:"16",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14919781-3455083794880800.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14919781-1485085373060389.jpg",
        title:"SkinCeuticals A.G.E. Advanced Eye (0.5 fl. oz.)",
        buttonTitle:"SkinCeuticals Gift",
        reviews:"899 Reviews",
        price:"$116.00"
    },
    {
        id:"17",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/11872688-1095043599785218.jpg",
        title:"SkinCeuticals Micro-Exfoliating Scrub (5 fl. oz.)",
        reviews:"486 Reviews",
        price:"$35.00"
    }
]
// export default bestSellersArr

// let dat=[];



let bestSellers=document.querySelector(".bestSellers")
// bestSellers.style.border="2px solid red"
bestSellers.style.height="100%"
// bestSellers.style.width="90%"
// bestSellers.style.overflow="hidden"
bestSellers.style.overflow="hidden"
bestSellers.style.padding="0% 2%"
bestSellers.style.width="98%"
// bestSellers.style.scrollBar="hidden"
count=0
// console.log(bestSellersArr.length)
let change=document.querySelector(".change")
let ul=document.createElement("ul")
change.appendChild(ul)
let bestSeller=bestSellersArr.map(function dataBestSeller(val){
    count++;
    let bestSellerProduct=document.createElement('div');
    bestSellerProduct.style.width="35%"
    bestSellerProduct.style.height="80vh"
    // bestSellerProduct.style.border="2px solid green"
    bestSellerProduct.classList.add("best-"+count)
    bestSellerProduct.classList.add("best")
    // bestSellerProduct.classList.add("best")
    bestSellers.style.display="flex"
    bestSellers.style.gap="1%"
    let image=document.createElement("img");
    let dataBest=document.createElement("div")
    let headingBest=document.createElement("div")
    dataBest.style.display="flex" 
    // dataBest.style.border="2px solid pink"
    dataBest.style.flexDirection="column"
    dataBest.style.justifyContent="space-between"
    dataBest.style.width="100%"

    headingBest.style.alignItems="center"
    headingBest.style.justifyContent="flex-end"
    // headingBest.style.border="2px solid blue"
    headingBest.style.flexDirection="column"
    headingBest.style.padding="0 2%"

    // image.style.border="1px solid blue"
    image.style.height="50%"
    image.style.marginBottom="16%"
    image.style.width="250px"
    let title=document.createElement("p")
    title.style.display="flex"
    // title.style.alignItems="center"
    // title.style.justifyContent="center"
    title.style.fontSize="90%"
    title.style.textAlign="justify"
    let buttonTitle=document.createElement("button")
    let reviews=document.createElement("p")
    let price=document.createElement("p")
    let quickBuy=document.createElement("button")
    bestSellers.appendChild(bestSellerProduct)
    bestSellerProduct.appendChild(image)
    bestSellerProduct.appendChild(dataBest)
    dataBest.appendChild(headingBest)
    headingBest.appendChild(title)
    headingBest.appendChild(buttonTitle)
    headingBest.appendChild(reviews)
    headingBest.appendChild(price)
    dataBest.appendChild(quickBuy)
    headingBest.style.display="flex"
    dataBest.style.height="40%"
    dataBest.classList.add("dataBest")
    quickBuy.style.alignSelf="flex-end"
    quickBuy.innerHTML="QUICK BUY"
    quickBuy.style.width="100%"
    quickBuy.style.padding="3%"
    quickBuy.style.color="white"
    quickBuy.style.backgroundColor="black"
    quickBuy.style.border="none"
    quickBuy.onmouseover=()=>{
        quickBuy.style.backgroundColor="gray"
    }
    quickBuy.onmouseout=()=>{
        quickBuy.style.backgroundColor="black"
    }
    image.src=val.image
    if(val.hoverImage){
        image.addEventListener('mouseover',()=>image.src=val.hoverImage)
    }
        image.addEventListener('mouseout',()=>image.src=val.image)
    title.innerHTML=val.title
    if(val.buttonTitle){
        buttonTitle.style.fontSize="90%"
        buttonTitle.style.marginBottom="3%"
        buttonTitle.style.padding="1% 7%"
        buttonTitle.style.display="flex"
        buttonTitle.style.marginLeft="auto"
        buttonTitle.style.marginRight="auto"
        buttonTitle.innerHTML=val.buttonTitle
    }
    // else{
    //     buttonTitle.style.display="none"
    // }
    reviews.innerHTML=val.reviews
    price.innerHTML=val.price
    price.style.fontWeight="bold"
    let a=bestSellerProduct.classList
    // console.log(bestSellerProduct.classList.value.split("-")[1])

    let li=document.createElement("li")
    let bulletBtn=document.createElement("button")
    ul.appendChild(li)
    li.appendChild(bulletBtn)
    bulletBtn.style.width="10px"
    bulletBtn.style.height="10px"
    bulletBtn.style.border="0.5px solid black"
    bulletBtn.style.borderRadius="50%"
    // bulletBtn.style.backgroundColor="black"
    ul.style.display="flex"
    ul.style.gap="1%"    
    ul.style.justifyContent="center"
    bulletBtn.classList.add("no-"+count)
    li.style.listStyleType="none"
    // if(bulletBtn.classList.contains("activeBullet")){
    //     // let activeBtn=document.querySelector(".bulletBtn")
    //     console.log("yes")
    // }
    if(bulletBtn.classList.contains("activeBullet"))
            console.log(bulletBtn.className)
    bulletBtn.onclick=function(){
        
        // for(let i=1;i<18;i++){
        //     if(bulletBtn.classList.contains("activeBullet"))
        //     console.log(bulletBtn.className)
        // }
        if(bestSellerProduct.classList.value.split("-")[1]==(bulletBtn.classList.value.split("-")[1])){
            // console.log()
            // let a=document.getElementsByTagName("button")
            // console.log("next"+a)
            let noOfSlide=bulletBtn.classList.value.split("-")[1]
            let slideValue=noOfSlide*100
            console.log(bestSellerProduct,slideValue)
            // bestSellers.scrollTo(bestSellerProduct)
            bestSellers.scrollBy({left:slideValue,behavior:"smooth"})
            // bulletBtn.classList.add("activeBullet")
        }
        else{
            console.log("false")
        }
        // let selectedBullet=document.querySelector(`.${bulletBtn.className}`)
        // console.log(selectedBullet)
        // let slideValue=noOfSlide*100
        // console.log(noOfSlide,slideValue)
        // for(let i=noOfSlide+1;i<noOfSlide+3;i++){
        //     if(bulletBtn.classList.value.split("-")[1]==i){
        //         bulletBtn.classList.add("nextToActiveBullet")
        //     }
        //     // let nextBullet1=document.querySelector(`.${bulletBtn.className}`)
        // }
        // bestSellers.scrollBy({left:slideValue,behavior:"smooth"})
    }
    bulletBtn.classList.remove("activeBullet")
//scroll buttons
    // let prev= document.querySelector(".prev")
    // prev.onclick=function showPrev(){
    //     bestSellers.scrollBy({left:-1200,behavior:"smooth"})
    // }
    // let next= document.querySelector(".next")
    // next.onclick=function showNext(){
    //     bestSellers.scrollBy({left:1200,behavior:"smooth"})
    // }
    // prev.onmouseover=()=>{
    //     prev.style.backgroundColor="black"
    // }
    // prev.onmouseout=()=>{
    //     prev.style.backgroundColor="gray"
    // }
    // next.onmouseover=()=>{
    //     next.style.backgroundColor="black"
    // }
    // next.onmouseout=()=>{
    //     next.style.backgroundColor="gray"
    // }
    

    // let prevMobile= document.querySelector(".prevMobile")
    // let nextMobile= document.querySelector(".nextMobile")
    // prevMobile.onclick=function showPrev(){
    //     bestSellers.scrollBy({left:-250,behavior:"smooth"})
    // }
    // nextMobile.onclick=function showNext(){
    //     bestSellers.scrollBy({left:250,behavior:"smooth"})
    // }
    // prevMobile.onmouseover=()=>{
    //     prevMobile.style.backgroundColor="black"
    // }
    // prevMobile.onmouseout=()=>{
    //     prevMobile.style.backgroundColor="gray"
    // }
    // nextMobile.onmouseover=()=>{
    //     nextMobile.style.backgroundColor="black"
    // }
    // nextMobile.onmouseout=()=>{
    //     nextMobile.style.backgroundColor="gray"
    // }
    // let li=document.createElement("li")
    // let slideBullet=document.createElement("button")
    // ul.appendChild(li)
    // li.appendChild(slideBullet)
    // slideBullet.style.color="black"
    // slideBullet.style.border="50%"
    // li.classList.add("item-"+count)

    // li.classList.value.split("-")[1]

    bestSellerProduct.onclick=(e)=>{
         
        console.log(bestSellersArr[val.id])
        // dat.push(bestSellersArr[val.id])
        // window.history.pushState()
        window.location.href=`/random.html?${val.id}`

    }
})
// console.log("dat",dat)
// function storeIt(){
//     return `${dat}`
// }
// export default storeIt  

// change.onclick=function changeSlideBest(){

// }
// product=document.querySelectorAll(".best")
// for(i=0;i<19;i++){
// console.log(product.classList)}



//new arrivals
let newArrivalsArr=[
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14926198-6445106107993934.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14926198-1545107163804787.jpg",
        title:"Dermalogica Pro-Collagen Banking Serum 30ml",
        buttonTitle:"$22 Gift",
        reviews:"149 Reviews",
        price:"$89.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14966116-1025116727595231.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14966116-1395116727623467.jpg",
        title:"Paula's Choice 25% Vitamin C+ Glutathione Clinical Serum 1 fl. oz",
        buttonTitle:"$82 Paula's Choice Gift",
        price:"$62.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14979695-2045098054130844.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14979695-6255098054187901.jpg",
        title:"Glo Skin Beauty Illuminating Makeup Primer with Vitamin C for All Skin Types 1 fl. oz",
        buttonTitle:"$85 Glo Skin Beauty Gift",
        price:"$42.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15051402-8315108952314196.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15051402-1565108952327312.jpg",
        title:"Therabody Theragun Relief",
        buttonTitle:"New Arrival",
        price:"$149.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15072700-1425113078340841.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15072700-1775113078371972.jpg",
        title:"Dr Dennis Gross Skincare Advanced Retinol and Ferulic Perfectly Dosed Retinol - Extra Strength 0.5% Pure Retinol 2.2ml",
        buttonTitle:"Dr Dennis Gross Gift",
        price:"$42.00"
    },
    {
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/15056485-2145118009629571.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15056485-1015109714415773.jpg",
        title:"Murad Cellular Hydration Barrier Repair Cream 1.7 oz",
        buttonTitle:"Murad Gift",
        price:"$69.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15063312-2105107367176548.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15063312-1745107367222907.jpg",
        title:"VIRTUE Limited Edition Recovery Bundle with Towel (Worth $121)",
        buttonTitle:"$16 VIRTUE Gift",
        price:"$97.00"
    },
    {
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/14919781-3455083794880800.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14919781-1485085373060389.jpg",
        title:"SkinCeuticals A.G.E. Advanced Eye (0.5 fl. oz.)",
        buttonTitle:"SkinCeuticals Gift",
        reviews:"900 Reviews",
        price:"$116.00"
    },
    {
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/15008231-3185105591987589.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15008231-1335105592059664.jpg",
        title:"Tarte Glamazon To-Go Palette",
        buttonTitle:"New Arrival",
        price:"$29.00"
    },
    {
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/14269883-4715106107248728.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14269883-2025106107287791.jpg",
        title:"Avène Hyaluron Activ B3 Cellular Renewal Cream 50ml",
        buttonTitle:"$17 Gift",
        price:"$40.00"
    },
    {
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/15072701-1175113078432299.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15072701-1575113078459896.jpg",
        title:"Dr Dennis Gross Skincare Advanced Retinol and Ferulic Perfectly Dosed Retinol - Universal 0.2% Pure Retinol 2.2ml",
        buttonTitle:"Dr Dennis Gross Gift",
        price:"$42.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14902556-9415107191359379.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14902556-2135107191435675.jpg",
        title:"Lancer Skincare Eyes Wide Open Hydrogel Eye Patches",
        buttonTitle:"$15 Gift",
        price:"$50.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14872109-1185094434063358.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14872109-1355094434119746.jpg",
        title:"Furtuna Skin Cielo Puro Cleansing Oil Balm 80g",
        buttonTitle:"$125 Furtuna Skin Gift",
        price:"$85.00"
    },
    {
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/14966060-1995092358886732.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14966060-1875092358924079.jpg",
        title:"Colorescience Barrier Pro Essential Moisturiser 50ml",
        buttonTitle:"New Arrival",
        price:"$46.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14966061-1665092359370794.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14966061-6895092359412053.jpg",
        title:"Colorescience Barrier Pro 1-Step Cleanser 150ml",
        buttonTitle:"New Arrival",
        price:"$78.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15008232-1605105592577575.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15008232-3235105592652392.jpg",
        title:"Tarte Glamazon Ac Eyeshadow Palette",
        buttonTitle:"New Arrival",
        price:"$47.00"
    },
    {
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/14494634-2775095019018571.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14494634-7695095019044545.jpg",
        title:"Symbiome The Answer Serum (30ml)",
        buttonTitle:"$35 Symbiome Gift",
        price:"$200.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14885835-3675097819523533.jpg",
        title:"Best of Dermstore: The Fragrance Kit - $169 Value",
        buttonTitle:"Save 50% + Extra 10% with code: EXTRA10",
        price:"$37.50"
    }
]

//newArrivalMain->newArrivalImg,newArrivalData
// newArrivalData->newArrivalDesc,quickBuy
// newArrivalDesc->title,button,review,price

let newArrivals=document.querySelector(".newArrivals")
newArrivals.style.display="none"
// newArrivals.style.border="2px solid red"
newArrivals.style.flexDirection="row"
newArrivals.style.overflow="hidden"
newArrivals.style.padding="0% 2%"

let newArrival=newArrivalsArr.map(function(val){
    let newArrivalMain=document.createElement("div")
    let newArrivalImg=document.createElement("img")
    newArrivalImg.style.height="50%"
    let newArrivalData=document.createElement("div")
    newArrivalData.style.height="40%"
    let newArrivalDesc=document.createElement("div")
    let newArrivalTitle=document.createElement("p")
    let newArrivalButton=document.createElement("button")
    let newArrivalReview=document.createElement("p")
    let newArrivalPrice=document.createElement("p")
    let quickBuy=document.createElement("button")
    newArrivals.appendChild(newArrivalMain)
    newArrivalMain.appendChild(newArrivalImg)
    newArrivalMain.appendChild(newArrivalData)
    newArrivalMain.classList.add("arrival-"+count)
    newArrivalData.classList.add("newArrivalData")
    newArrivalData.style.display="flex"
    newArrivalData.style.justifyContent="space-between"
    newArrivalData.appendChild(newArrivalDesc)
    newArrivalData.appendChild(quickBuy)

    newArrivalDesc.appendChild(newArrivalTitle)
    newArrivalDesc.appendChild(newArrivalButton)
    newArrivalDesc.appendChild(newArrivalReview)
    newArrivalDesc.appendChild(newArrivalPrice)

    newArrivalImg.src=val.image
    if(val.title){
        newArrivalTitle.innerHTML=val.title
    }
    if(val.buttonTitle){
        newArrivalButton.innerHTML=val.buttonTitle
    }
    if(val.reviews){
        newArrivalReview.innerHTML=val.reviews
    }
    if(val.hoverImage){
        newArrivalImg.addEventListener('mouseover',()=>newArrivalImg.src=val.hoverImage)
    }
    newArrivalImg.addEventListener('mouseout',()=>newArrivalImg.src=val.image)
    newArrivalPrice.innerHTML=val.price

    let prev= document.querySelector(".prev")
    prev.onclick=function showPrev(){
        bestSellers.scrollBy({left:-1200,behavior:"smooth"})
        newArrivals.scrollBy({left:-1200,behavior:"smooth"})
        giftSets.scrollBy({left:-1200,behavior:"smooth"})
    }
    let next= document.querySelector(".next")
    next.onclick=function showNext(){
        bestSellers.scrollBy({left:1200,behavior:"smooth"})
        newArrivals.scrollBy({left:1200,behavior:"smooth"})
        giftSets.scrollBy({left:1200,behavior:"smooth"})
    }
    prev.onmouseover=()=>{
        prev.style.backgroundColor="gray"
    }
    prev.onmouseout=()=>{
        prev.style.backgroundColor="lightgray"
    }
    next.onmouseover=()=>{
        next.style.backgroundColor="gray"
    }
    next.onmouseout=()=>{
        next.style.backgroundColor="lightgray"
    }



    let prevMobile= document.querySelector(".prevMobile")
    let nextMobile= document.querySelector(".nextMobile")
    prevMobile.onclick=function showPrev(){
        bestSellers.scrollBy({left:-250,behavior:"smooth"})
        newArrivals.scrollBy({left:-250,behavior:"smooth"})
        giftSets.scrollBy({left:-250,behavior:"smooth"})
    }
    nextMobile.onclick=function showNext(){
        bestSellers.scrollBy({left:250,behavior:"smooth"})
        newArrivals.scrollBy({left:250,behavior:"smooth"})
        giftSets.scrollBy({left:250,behavior:"smooth"})
    }
    prevMobile.onmouseover=()=>{
        prevMobile.style.backgroundColor="black"
    }
    prevMobile.onmouseout=()=>{
        prevMobile.style.backgroundColor="gray"
    }
    nextMobile.onmouseover=()=>{
        nextMobile.style.backgroundColor="black"
    }
    nextMobile.onmouseout=()=>{
        nextMobile.style.backgroundColor="gray"
    }
    // newArrivals.style.width="100%"
    newArrivalMain.style.width="98%"
    newArrivalMain.style.height="80vh"
    newArrivalMain.style.display="flex"
    // newArrivalData.style.border="5px solid green"
    newArrivalData.style.height="100%"
    newArrivalMain.style.gap="4%"
    newArrivalMain.style.textAlign="center"
    newArrivalMain.style.flexDirection="column"
    newArrivalData.style.display="flex"
    newArrivalData.style.flexDirection="column"
    newArrivalData.style.justifyContent="space-between"
    newArrivalDesc.style.padding="auto"
    newArrivalMain.style.margin="0 1% 0 0"
    // newArrivalMain.style.border="2px solid blue"
    newArrivalImg.style.width="250px"


    //Button
    newArrivalButton.style.fontSize="90%"
    newArrivalButton.style.marginBottom="3%"
    newArrivalButton.style.padding="1% 7%"
    newArrivalButton.style.display="flex"
    newArrivalButton.style.marginLeft="auto"
    newArrivalButton.style.marginRight="auto"
    newArrivalPrice.style.fontWeight="bold"
    //Quick Buy Styling
    quickBuy.style.display="flex"
    quickBuy.style.justifyContent="center"
    // quickBuy.style.alignSelf="flex-end"
    quickBuy.innerHTML="QUICK BUY"
    quickBuy.style.width="100%"
    quickBuy.style.padding="3%"
    quickBuy.style.color="white"
    quickBuy.style.backgroundColor="black"
    quickBuy.style.border="none"
    quickBuy.onmouseover=()=>{
        quickBuy.style.backgroundColor="gray"
    }
    quickBuy.onmouseout=()=>{
        quickBuy.style.backgroundColor="black"
    }
    newArrivalMain.onclick=(e)=>{
        window.location.href=`/product.html?${val.id}`
    }
})




//giftSets
let giftSets=document.querySelector(".giftSets")
giftSets.style.display="none"
giftSets.style.flexDirection="row"
giftSets.style.overflow="hidden"
giftSets.style.padding="0% 2%"
giftSets.style.width="98%"
let giftSetsArr=[
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14219177-1695019790206864.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14219177-6695109474337095.jpg",
        title:"SkinCeuticals Anti-Aging Firming Set with C E Ferulic Vitamin C and Hyaluronic Acid",
        buttonTitle:"Limited Edition Bundle",
        price:"$371.36"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13434840-1035072710741704.jpg",
        title:"EltaMD Exclusive UV Clear Tinted and Untinted Duo ($84 Value)",
        buttonTitle:"$18 Gift",
        reviews:"5094 Reviews",
        price:"$75.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14921036-5115082525950205.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14921036-9085082526014162.jpg",
        title:"Obagi Medical ELASTIderm Duo (Worth $340.00)",
        buttonTitle:"Save 25% + Extra 10% with code: EXTRA10",
        price:"$191.25"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14922815-9725090795352705.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14922815-5405090795414586.jpg",
        title:"Dr Dennis Gross Skincare The EyeCare Max Pro LED Device Set (Worth $235.00)",
        buttonTitle:"Save 25% + Extra 10% with code: EXTRA10",
        price:"$149.25"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/11862147-8974870996156014.jpg",
        title:"SkinMedica Lumivive System (2 piece)",
        buttonTitle:"$30 Gift",
        reviews:"35 Reviews",
        price:"$268.00"
    },
    {
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/13938587-1455002659983370.jpg",
        title:"Oribe Gold Lust Repair and Restore Shampoo and Conditioner Bundle",
        reviews:"235 Reviews",
        price:"$101.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14921058-6375085599238873.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14921058-2035085599325150.jpg",
        title:"Eminence Organic Skin Care Rosehip Oil and Gua Sha Gift Set",
        price:"$118.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14887861-1095072390627331.jpg",
        title:"EltaMD UV Daily Tinted Duo ($76 Value)",
        buttonTitle:"$18 Gift",
        price:"$68.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14887865-1265107647501708.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14887865-4965107647532551.jpg",
        title:"EltaMD AM &amp; PM Therapy Duo ($82 Value)",
        buttonTitle:"18 Gift",
        price:"$73.00"
    },
    {
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/13997570-1565002183976127.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13997570-1605002184048382.jpg",
        title:"Obagi Medical Nu-Derm® Brightening Duo (Worth $209.00)",
        reviews:"70 Reviews",
        price:"$167.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/12782416-9825116771880073.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/12782416-3755116771933422.jpg",
        title:"SkinCeuticals Anti-Aging Regimen with Triple Lipid Restore 2:4:2 and Hyaluronic Acid",
        buttonTitle:"Limited Edition Bundle",
        reviews:"23 Reviews",
        price:"$228.80"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14221563-1415084287893660.jpg",
        title:"Best of Dermstore: The Anti-Aging Kit - $504 Value",
        buttonTitle:"Save 35% + Extra 10% with code: EXTRA10",
        reviews:"5 Reviews",
        price:"$97.50"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13435467-1344942266527121.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13435467-2124942264442529.jpg",
        title:"iS Clinical Active Peel Treatment System (30 Days)",
        reviews:"14 Reviews",
        price:"$98.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14870183-5415089525191315.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14870183-8115084079922167.jpg",
        title:"The Pro-Collagen Perfect Duo (Worth $307)",
        buttonTitle:"Save 20% + Extra 10% with code: EXTRA10",
        price:"$168.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14966061-1665092359370794.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13513896-1714922576908107.jpg",
        title:"Briogeo Don’t Despair, Repair!™ Strength + Repair Solutions Set (Worth $107.00)",
        reviews:"1 Review",
        price:"$79.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14221564-1125076846921585.jpg",
        title:"Best of Dermstore: The Essentials Kit - $350 Value",
        buttonTitle:"Save 35% + Extra 10% with code: EXTRA10",
        reviews:"1 Review",
        price:"$65.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/11582506-6064978637869764.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/11582506-8595109251798655.jpg",
        title:"SkinCeuticals Anti-Aging Refine and Plump Regimen with Vitamin C and Hyaluronic Acid",
        buttonTitle:"SkinCeuticals Gift",
        reviews:"5328 Reviews",
        price:"$292.00"
    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13883317-8014988987514489.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13883317-1054988987594853.jpg",
        title:"Olaplex Ultimate Essentials Kit (Worth $33.00)",
        buttonTitle:"Save 25% + Extra 10% with code: EXTRA10",
        reviews:"8 Reviews",
        price:"$21.00"
    }
]

let giftSet=giftSetsArr.map(function(val){
        let newArrivalMain=document.createElement("div")
        let newArrivalImg=document.createElement("img")
        newArrivalImg.style.height="50%"
        let newArrivalData=document.createElement("div")
        newArrivalData.style.height="40%"
        let newArrivalDesc=document.createElement("div")
        let newArrivalTitle=document.createElement("p")
        let newArrivalButton=document.createElement("button")
        let newArrivalReview=document.createElement("p")
        let newArrivalPrice=document.createElement("p")
        let quickBuy=document.createElement("button")
        giftSets.appendChild(newArrivalMain)
        newArrivalMain.appendChild(newArrivalImg)
        newArrivalMain.appendChild(newArrivalData)
        newArrivalMain.classList.add("arrival-"+count)
        newArrivalData.classList.add("giftSet")
        newArrivalData.style.display="flex"
        newArrivalData.style.justifyContent="space-between"

        newArrivalData.appendChild(newArrivalDesc)
        newArrivalData.appendChild(quickBuy)
    
        newArrivalDesc.appendChild(newArrivalTitle)
        newArrivalDesc.appendChild(newArrivalButton)
        newArrivalDesc.appendChild(newArrivalReview)
        newArrivalDesc.appendChild(newArrivalPrice)
    
        newArrivalImg.src=val.image
        if(val.title){
            newArrivalTitle.innerHTML=val.title
        }
        if(val.buttonTitle){
            newArrivalButton.innerHTML=val.buttonTitle
        }
        if(val.reviews){
            newArrivalReview.innerHTML=val.reviews
        }
        if(val.hoverImage){
            newArrivalImg.addEventListener('mouseover',()=>newArrivalImg.src=val.hoverImage)
        }
        newArrivalImg.addEventListener('mouseout',()=>newArrivalImg.src=val.image)
        newArrivalPrice.innerHTML=val.price

        // newArrivals.style.width="100%"
        newArrivalMain.style.width="100%"
        newArrivalMain.style.height="80vh"
        newArrivalMain.style.display="flex"
        // newArrivalData.style.border="5px solid green"
        newArrivalData.style.height="100%"
        newArrivalMain.style.gap="4%"
        newArrivalMain.style.textAlign="center"
        newArrivalMain.style.flexDirection="column"
        newArrivalData.style.display="flex"
        newArrivalData.style.flexDirection="column"
        newArrivalData.style.justifyContent="space-between"
        newArrivalDesc.style.padding="auto"
        newArrivalMain.style.margin="0 1% 0 0"
        // newArrivalMain.style.border="2px solid blue"
        newArrivalImg.style.width="250px"
    
    
        //Button
        newArrivalButton.style.fontSize="90%"
        newArrivalButton.style.marginBottom="3%"
        newArrivalButton.style.padding="1% 7%"
        newArrivalButton.style.display="flex"
        newArrivalButton.style.marginLeft="auto"
        newArrivalButton.style.marginRight="auto"
        newArrivalPrice.style.fontWeight="bold"
        //Quick Buy Styling
        quickBuy.style.display="flex"
        quickBuy.style.justifyContent="center"
        // quickBuy.style.alignSelf="flex-end"
        quickBuy.innerHTML="QUICK BUY"
        quickBuy.style.width="100%"
        quickBuy.style.padding="3%"
        quickBuy.style.color="white"
        quickBuy.style.backgroundColor="black"
        quickBuy.style.border="none"
        quickBuy.onmouseover=()=>{
            quickBuy.style.backgroundColor="gray"
        }
        quickBuy.onmouseout=()=>{
            quickBuy.style.backgroundColor="black"
        }
        newArrivalMain.onclick=()=>{
            window.location.href=`/product.html?${val.id}`
        }
})



//virtue

let virtueArr=[
    {
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/15063313-7995107367332152.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15063313-2045107367391651.jpg",
        title:"VIRTUE Limited Edition Smooth Bundle with Towel (Worth $121)",
        buttonTitle:"DOUBLE POINTS + $16 VIRTUE Gift",
        price:"$97.00"

    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15063312-2105107367176548.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15063312-1745107367222907.jpg",
        title:"VIRTUE Limited Edition Smooth Bundle with Towel (Worth $121)",
        buttonTitle:"DOUBLE POINTS + $16 VIRTUE Gift",
        price:"$97.00"

    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15063315-2185107367589846.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15063315-1565107367629854.jpg",
        title:"VIRTUE Limited Edition Smooth Bundle with Towel (Worth $121)",
        buttonTitle:"DOUBLE POINTS + $16 VIRTUE Gift",
        price:"$97.00"

    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13279360-1414893006489666.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13279360-3924893006541752.jpg",
        title:"VIRTUE Flourish Density Booster 120ml",
        price:"$50.00"

    },
    {
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15058818-8375105851492404.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15058818-3975105850968913.jpg",
        title:"VIRTUE Quick-Dry Healthy Hair Towel",
        buttonTitle:"New Arrival",
        price:"$35.00"
    },
    {
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/14020190-1695043681335013.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14020190-7205036421880785.jpg",
        title:"VIRTUE SMOOTH Un-Frizz Cream 2 fl. oz",
        price:"$32.00"
    },
]
virtueProducts=document.querySelector(".virtueProducts")
virtueProducts.style.width="52%"
virtueProducts.style.height="100vh"
virtueProducts.style.overflow="hidden"
// virtueProducts.style.border="2px solid red"
virtueProducts.style.display="flex"
virtueProducts.style.gap="50px"
let virtuePr=virtueArr.map(function showVirtue(e){
    let virtueProduct=document.createElement('div');
    // virtueProduct.style.width="200%"
    virtueProduct.style.display="flex"
    virtueProduct.style.flexDirection="column"
    virtueProduct.style.gap="20px"
    // virtueProduct.style.border="2px solid green"
    let virtueImage=document.createElement("img");
    let virtuedescData=document.createElement("div")
    let virtueHeading=document.createElement("div")
    let virtueHeadingTitle=document.createElement("div")
    let virtueButtonTitle=document.createElement("button")
    let virtuePrice=document.createElement("h4")
    let quickBuy=document.createElement("button")
    virtueProducts.appendChild(virtueProduct)
    virtueProduct.appendChild(virtueImage)
    virtueProduct.appendChild(virtuedescData)
    virtuedescData.appendChild(virtueHeading)
    virtuedescData.appendChild(quickBuy)
    virtueHeading.appendChild(virtueHeadingTitle)
    virtueHeading.appendChild(virtueButtonTitle)
    virtueHeading.appendChild(virtuePrice)
    virtueImage.src=e.image
    virtueImage.style.width="320px"
    virtueImage.style.height="80%"

    virtuedescData.style.display="flex"
    virtuedescData.style.width="100%"
    virtuedescData.style.flexDirection="column"
    virtuedescData.style.justifyContent="space-between"
    // virtuedescData.style.border="2px solid salmon"
    virtuedescData.style.height="50vh"

    virtueHeading.style.textAlign="center"
    virtueHeading.style.display="flex"
    virtueHeading.style.width="100%"
    virtueHeading.style.flexDirection="column"
    virtueHeading.style.justifyContent="space-between"
    virtueHeading.style.gap="10px"
    virtuePrice.style.fontWeight="bold"

    if(e.hoverImage){
        virtueImage.addEventListener('mouseover',()=>virtueImage.src=e.hoverImage)
        virtueImage.addEventListener('mouseout',()=>virtueImage.src=e.image)
    }
    virtueHeadingTitle.innerHTML=e.title
    if(e.buttonTitle){
        virtueButtonTitle.style.fontSize="90%"
        virtueButtonTitle.style.marginBottom="3%"
        virtueButtonTitle.style.padding="1% 7%"
        virtueButtonTitle.style.display="flex"
        virtueButtonTitle.style.marginLeft="auto"
        virtueButtonTitle.style.marginRight="auto"
        virtueButtonTitle.innerHTML=e.buttonTitle
    }
    virtuePrice.innerHTML=e.price
    virtueProducts.style.display="flex"
    virtueProducts.style.height="100%"
    virtueProducts.style.overflow="scroll"
    virtueProducts.style.marginLeft="2%"

    quickBuy.style.alignSelf="flex-end"
    quickBuy.innerHTML="QUICK BUY"
    quickBuy.classList.add("quickBuy")
    quickBuy.onmouseover=()=>{
        quickBuy.style.backgroundColor="gray"
    }
    quickBuy.onmouseout=()=>{
        quickBuy.style.backgroundColor="black"
    }
    quickBuy.style.width="100%"
    quickBuy.style.padding="3%"
    quickBuy.style.color="white"
    quickBuy.style.backgroundColor="black"
    quickBuy.style.border="none"
    // console.log(quickBuy)

    let prevVirtue= document.querySelector(".prevVirtue")
    let prevVirtueMobile= document.querySelector(".prevVirtueMobile")
    let nextVirtueMobile= document.querySelector(".nextVirtueMobile")
    // let unit = prevVirtueMobile.scrollWidth / 100;
    prevVirtueMobile.onclick=()=>{
        virtueProducts.scrollBy({left:-360,behavior: 'smooth'})
    }
    nextVirtueMobile.onclick=()=>{
        virtueProducts.scrollBy({left:360,behavior: 'smooth'})
    }
    prevVirtue.onclick=function showPrev(){
        // console.log("prev")
        virtueProducts.scrollBy({left:730,behavior:"smooth"})
    }
    let nextVirtue= document.querySelector(".nextVirtue")
    nextVirtue.onclick=function showNext(){
        // console.log("next")
        virtueProducts.scrollBy({left:-730,behavior:"smooth"})
    }
    prevVirtue.onmouseover=()=>{
        prevVirtue.style.backgroundColor="gray"
    }
    prevVirtue.onmouseout=()=>{
        prevVirtue.style.backgroundColor="lightgray"
    }
    nextVirtue.onmouseover=()=>{
        nextVirtue.style.backgroundColor="gray"
    }
    nextVirtue.onmouseout=()=>{
        nextVirtue.style.backgroundColor="lightgray"
    }
})
let spec1=document.querySelector(".spec1")
let spec2=document.querySelector(".spec2")
let spec3=document.querySelector(".spec3")
let markerSpec=document.querySelector(".markerSpec")

spec1.onclick=(e)=>{
    e.preventDefault()
    spec1.style.textDecoration="none"
    spec1.style.color="black"
    // markerSpec.style.width="7%"
    markerSpec.style.display="flex"
    markerSpec.style.left="0%"
    bestSellers.style.display="flex"
    newArrivals.style.display="none"
    giftSets.style.display="none"
}

spec2.onclick=(e)=>{
    e.preventDefault()
    spec2.style.textDecoration="none"
    spec2.style.color="black"
    // markerSpec.style.width="7%"
    markerSpec.style.display="flex"
    markerSpec.style.left="33%"
    bestSellers.style.display="none"
    newArrivals.style.display="flex"
    giftSets.style.display="none"
}

spec3.onclick=(e)=>{
    e.preventDefault()
    spec3.style.textDecoration="none"
    spec3.style.color="black"
    // markerSpec.style.width="8%"
    markerSpec.style.display="flex"
    markerSpec.style.left="70%"
    bestSellers.style.display="none"
    newArrivals.style.display="none"
    giftSets.style.display="flex"
}


// let searchInput=document.querySelector("#searchInput")
// let searchEnter=document.querySelector("#searchEnter")
// searchInput.onmouseover=()=>{
//     console.log("SWDVF")
// }
// searchInput.addEventListener("keypress", function(event) {
//     console.log(event)
//     if (event.key === "Enter") {
//       event.preventDefault();
//       searchEnter.click();
//     }
//   });

// searchEnter.onclick=()=>{
//     console.log(searchInput.value)
// }


let sponsoredLeftData=()=>{
    // let elta=[]
    return(leftData.innerHTML=totalProducts.map((x)=>{ 
        if(x.title.split(" ")[0].toLowerCase() == "eltamd"){
            let {id,image,hoverImage,title,reviews,price}=x
            return`
            <div class="sponsoredProduct" id="sponsored${id}">
                <img class="sponsoredProductImg"  src="${image}" alt="">
                <div class="sponsoredProductDesc">
                    <p style="text-align: center;">${title}</p>
                    <p style="font-weight: bold;">${reviews}</p>
                    <p style="font-weight: bold;">${price}</p>
                </div>
            </div>
            `
        }
        // console.log(x.title.split(" ")[0].toLowerCase() == e.target.value.toLowerCase())
    }).join(""));
    //     let z=x.title.split(" ")[0]
    //     if((x.title.split(" ")[0].toString())==="ELTAMD"){
    //         console.log("found")
    //         elta.push(x)
    //         return x;
    //     }
    //     else return;
    // })
    console.log(finding)
}
sponsoredLeftData()