let favourites=JSON.parse(sessionStorage.getItem("fav")) || []   
let favProducts=document.querySelector(".favProducts")
let favQuantity=document.querySelector(".favQuantity")
// if(favProducts){
    let generateFavourites=()=>{
        favQuantity.innerHTML=favourites.length
        // console.log(favourites.length)
        return(favProducts.innerHTML=favourites.map((x)=>{
            let {id,image,hoverImage,price,title,buttonTitle}=x;
            return`
                    <div class="containsRemove" style=" position:relative; border:1px solid red;height:fit-content">
                    <button class="removeProduct" onclick="removePr(${id})"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div id="fav${id}" class="favPr" onclick="openProduct(${id})">
                    <div class="favImg">
                        <img src="${image}" alt="">
                    </div>
                    <div class="favDesc" style="justify-content:space-between;">
                        <p id=${title} class="favTitle">${title}</p>
                        <div class="favInfo">
                            <h3 class="FavPrice">${price}</h3>
                            <button class="addToCart">ADD TO CART</button>
                        </div>
                    </div>
                    </div>`
        })
        .join(""));
    }
    generateFavourites()
// }

let favPr=document.querySelector("#favPr");
let favTitle=document.querySelector(".favTitle");
let openProduct=(id)=>{
    // console.log(id)
    let openPr=favourites.find((x)=>x.id==id)
    console.log(openPr)
    window.location.href=`/random.html?${id}`
}

let removePr=(id)=>{
    // e.preventDefault()
    console.log(favourites)
    favourites=favourites.filter((x)=>x.id!=id)
    console.log(favourites)
    generateFavourites()
}

// `<div id="favPr" class="favPr" onclick="openProduct("${title}")">

//                 <div class="favImg">
//                     <img src="${image}" alt="">
//                 </div>
//                 <div class="favDesc">
//                     <div class="favInfo">
//                         <p class="favTitle">${title}</p>
//                         <h3 class="FavPrice">${price}</h3>
//                     </div>
//                     <button class="addToCart">ADD TO CART</button>
//                 </div>
//                 </div>`