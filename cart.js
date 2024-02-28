// let basket=JSON.parse(localStorage.getItem("data")) || []
// let calculation=()=>{
//     let cartAmount=document.getElementById("noInCart");
//     cartAmount.innerHTML=basket.map((x)=>x.quantity).reduce((x,y)=>x+y,0)
// }
calculation()

let productCartData=document.querySelector(".productCartData")
let generateProductCart=()=>{
    return(productCartData.innerHTML=basket.map((x)=>{
        let {id,pack,price,purchaseType,quantity}=x;
        let search=totalProducts.find((y)=>y.id===id)
        // console.log(y);
        let {image,title}=search;
        return`
        <ul class="productData" style="list-style-type: none;">
                <li class="cartProductImg" onclick="openProduct(${id})">
                    <!-- <div class="cartProductDesc"> -->
                        <img src="${image}" alt="">
                        <p>${title} ${pack}</p>
                    <!-- </div> -->
                </li>
                <li class="cartProductPrice">${price}</li>
                <li class="cartProductQuant">
                    <button class="sub" onclick="decrement(quant${pack}z${id})">-</button>
                    <label  id="quant${pack}z${id}" class="quant" for="">${quantity}</label>
                    <button class="add" onclick="increment(quant${pack}z${id})">+</button>
                </li>
                <li class="cartProductSubtotal">$ ${(quantity * price.split("$")[1]).toPrecision(5)}</li>
                <li class="removeCartProduct" onclick="removeProduct(quant${pack}z${id})"><i class="bi bi-x-lg"></i></li>
        </ul>
        <div class="addToWishlist">
        <button class="saveToFav" onclick="addProductToFav(quant${pack}z${id})" style="cursor:pointer" >
            <i style="font-size: 110%;" class="bi bi-heart"></i>
            <p>Save to My Favourites</p></button>
        </div>
        `}
    ).join(""));
}
generateProductCart()

let cartProductPrice=document.querySelector(".cartProductPrice"); 
let cartProductSubtotal=document.querySelector(".cartProductSubtotal");
let quant=document.getElementById("qaunt2")

let increment=(pr)=>{
    console.log(pr.id.split("t")[1].split("z"))
    // let selectedItem=pr;
    let search=basket.find((x)=>x.id==pr.id.split("t")[1].split("z")[1] && x.pack===pr.id.split("t")[1].split("z")[0])
    console.log(search)
    if(search===undefined) return;
    else if(search){
        search.quantity+=1
    }
    generateProductCart();
    update(pr.id);
    localStorage.setItem("data",JSON.stringify(basket))
}
let decrement=(selectedItem)=>{
    console.log(selectedItem)
    let search=basket.find((x)=>x.id==selectedItem.id.split("t")[1].split("z")[1] && x.pack===selectedItem.id.split("t")[1].split("z")[0])
    if(search===undefined) return;
    else if(search.quantity==0) return;
    else{
        search.quantity-=1  
    }
    update(selectedItem.id);
    basket=basket.filter((x)=>x.quantity !==0);
    generateProductCart();
    localStorage.setItem("data",JSON.stringify(basket))
}

let removeProduct=(selectedItem)=>{
    // console.log(selectedItem)
    basket=basket.filter((x)=>(`quant${x.pack}z${x.id}`!==selectedItem.id))
    generateProductCart();
    calculation();
    totalAmount();
    localStorage.setItem("data",JSON.stringify(basket))
}


let update=(id)=>{
    let updateQauntity=document.getElementById(`${id}`)
    let search=basket.find((x)=>x.id==updateQauntity.id.split("t")[1].split("z")[1] && x.pack===updateQauntity.id.split("t")[1].split("z")[0])
    updateQauntity.innerHTML=search.quantity;

    calculation();
    totalAmount();
}

let favourites=JSON.parse(sessionStorage.getItem("fav")) || []   
let addProductToFav=(id)=>{
   let selectedItem=id
//    console.log(selectedItem.id.split("t")[1].split("z")[1]) 
   let searchData=totalProducts.find((x)=>x.id===selectedItem.id.split("t")[1].split("z")[1])
   let searchFav=favourites.find((y)=>y.id===searchData.id)
   if(searchFav==undefined){
        favourites.push(searchData)  
    }
    else {
        console.log("already ")
    }
    console.log(favourites)
    sessionStorage.setItem("fav",JSON.stringify(favourites))
//    console.log(basket)
//    let abc= basket.filter((x)=>x.id==selectedItem && x.price==cartProductPrice.innerHTML)
//     console.log(abc)
}

let cartSubtotal=document.querySelector(".cartSubtotal")
let totalAmount=()=>{
    let search=basket.map((x)=>parseInt(x.price.split("$")[1]*x.quantity)).reduce((x,y)=>x+y,0)
    // console.log(search)
    cartSubtotal.innerHTML="$ "+search
}
totalAmount();

openProduct=(id)=>{
    window.location.href=`http://127.0.0.1:5500/random.html?${id}`
    totalProducts.map((x)=>x.id===id)
}