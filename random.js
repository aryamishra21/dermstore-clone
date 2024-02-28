let main =document.querySelector(".productContainer")
// let basket=JSON.parse(localStorage.getItem("data")) || []
let calculation=()=>{
    let cartAmount=document.getElementById("noInCart");
    cartAmount.innerHTML=basket.map((x)=>x.quantity).reduce((x,y)=>x+y,0)
}
calculation()

let generateProduct=()=>{
    // console.log(window.location.href.split("?")[1])
    let item=totalProducts.find((item)=>item.id===window.location.href.split("?")[1])
    let{id,image,hoverImage,title,buttonTitle,reviews,price}=item;
    // main.innerHTML=`<div>${JSON.stringify(item)}</div>`
    main.innerHTML=`
    <div class="titleName">
        <a href="index.html" style="text-decoration: none; color: black;">| Home /</a>
        <p class="intro">${title}</p>
    </div>
    <div class="productData">
        <div class="shortImages">
            <img class="shortImg shortImg-1" src="${image}" alt="">
            <img class="shortImg shortImg-2" src="${hoverImage}" alt="">
            <img class="shortImg shortImg-3" src="https://static.thcdn.com/images/small/webp//productimg/130/130/13315093-2884976247567909.jpg" alt="">
            <img class="shortImg shortImg-4" src="https://static.thcdn.com/images/small/webp//productimg/130/130/13315093-1644977032221806.jpg" alt="">
        </div>
        <div class="leftProductData">
            <div class="bigImage">
                <div class="bigImages">
                    <div class="bigImg">
                        <img class="bigImage-1" src="${image}" alt="">
                    </div>
                    <div class="bigImg">
                        <img class="bigImage-2" src="${hoverImage}" alt="">
                    </div>
                    <div class="bigImg">
                        <img class="bigImage-3" src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/13315093-2884976247567909.jpg" alt="">
                    </div>
                    <div class="bigImg">
                        <img class="bigImage-4" src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/13315093-1644977032221806.jpg" alt="">
                    </div>
                </div>
                <button class="changeNext"><i class="bi bi-chevron-right about"></i></button>
                <button class="changePrev"><i class="bi bi-chevron-left"></i></button>
                <div class="payLater">
                    <div class="payLaterProvider">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 50 20">
                                <title>Klarna Slice</title>
                                        <rect width="50" height="20" rx="4" fill="#ffb3c7"></rect>
                                    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 39.871094 8.761719 C 38.59375 7.894531 36.871094 8.109375 35.851562 9.269531 C 34.828125 10.425781 34.828125 12.164062 35.851562 13.320312 C 36.871094 14.476562 38.59375 14.695312 39.871094 13.824219 L 39.871094 14.195312 L 41.609375 14.195312 L 41.609375 8.390625 L 39.871094 8.390625 Z M 38.292969 12.789062 C 37.476562 12.746094 36.847656 12.054688 36.875 11.242188 C 36.90625 10.425781 37.582031 9.785156 38.398438 9.800781 C 39.210938 9.8125 39.867188 10.480469 39.867188 11.292969 C 39.84375 12.140625 39.136719 12.808594 38.292969 12.789062 Z M 14.222656 5.804688 L 16.039062 5.804688 L 16.039062 14.195312 L 14.222656 14.195312 Z M 32 8.234375 C 31.304688 8.195312 30.636719 8.496094 30.207031 9.046875 L 30.207031 8.390625 L 28.476562 8.390625 L 28.476562 14.195312 L 30.230469 14.195312 L 30.230469 11.144531 C 30.203125 10.792969 30.332031 10.441406 30.582031 10.191406 C 30.832031 9.9375 31.179688 9.808594 31.535156 9.832031 C 32.296875 9.832031 32.738281 10.289062 32.738281 11.132812 L 32.738281 14.195312 L 34.472656 14.195312 L 34.472656 10.503906 C 34.472656 9.15625 33.398438 8.234375 32 8.234375 Z M 21.539062 8.761719 C 20.261719 7.894531 18.539062 8.109375 17.519531 9.269531 C 16.496094 10.425781 16.496094 12.164062 17.519531 13.320312 C 18.539062 14.476562 20.261719 14.695312 21.539062 13.824219 L 21.539062 14.195312 L 23.277344 14.195312 L 23.277344 8.390625 L 21.539062 8.390625 Z M 19.957031 12.789062 C 19.144531 12.746094 18.515625 12.054688 18.542969 11.242188 C 18.570312 10.425781 19.25 9.785156 20.0625 9.800781 C 20.878906 9.8125 21.53125 10.480469 21.53125 11.292969 C 21.511719 12.140625 20.804688 12.808594 19.957031 12.789062 Z M 25.964844 9.148438 L 25.964844 8.390625 L 24.1875 8.390625 L 24.1875 14.195312 L 25.96875 14.195312 L 25.96875 11.488281 C 25.96875 10.570312 26.960938 10.082031 27.648438 10.082031 C 27.652344 10.082031 27.660156 10.082031 27.667969 10.082031 L 27.667969 8.390625 C 27.015625 8.375 26.390625 8.652344 25.964844 9.148438 Z M 43.453125 12.136719 C 42.851562 12.136719 42.363281 12.625 42.363281 13.226562 C 42.363281 13.832031 42.851562 14.320312 43.453125 14.320312 C 44.054688 14.320312 44.542969 13.832031 44.542969 13.226562 C 44.546875 12.625 44.054688 12.136719 43.453125 12.136719 Z M 12.96875 5.804688 L 11.085938 5.804688 C 11.089844 7.335938 10.367188 8.78125 9.136719 9.695312 L 8.390625 10.253906 L 11.28125 14.199219 L 13.660156 14.199219 L 11 10.570312 C 12.265625 9.308594 12.976562 7.59375 12.96875 5.804688 Z M 6.269531 5.804688 L 8.160156 5.804688 L 8.160156 14.199219 L 6.269531 14.199219 Z M 6.269531 5.804688 "></path>
                                  
                        </svg>
                        <p>4 installments of $${((price.split("$")[1])/4).toFixed(2)} with Klarna 
                            <a href="">Learn more <i class="bi bi-chevron-right"></i></a>
                        </p>
                    </div>
                    <div class="payLaterProvider afterpay">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 17" width="80" height="16"><path d="M79.852 3.942l-2.434-1.4-2.434-1.47a2.457 2.457 0 00-3.674 2.135v.299a.528.528 0 00.23.436l1.147.643a.46.46 0 00.643-.184.436.436 0 000-.23v-.734a.482.482 0 01.46-.505h.275l2.296 1.308 2.297 1.286a.505.505 0 01.16.69l-.16.16-2.297 1.286-2.296 1.309a.482.482 0 01-.666-.161.551.551 0 010-.276v-.367a2.457 2.457 0 00-3.674-2.135l-2.48 1.423-2.434 1.4a2.48 2.48 0 00-.918 3.353 2.296 2.296 0 00.918.919l2.434 1.4 2.48 1.401a2.457 2.457 0 003.674-2.135v-.299a.528.528 0 00-.23-.436l-1.148-.666a.46.46 0 00-.643.184.528.528 0 000 .252v.735a.482.482 0 01-.459.505.62.62 0 01-.275 0l-2.297-1.308-2.296-1.286a.505.505 0 01-.252-.643l.16-.161 2.297-1.286 2.296-1.309a.482.482 0 01.666.16.551.551 0 010 .276v.368a2.457 2.457 0 003.674 2.135l2.48-1.423 2.434-1.401a2.434 2.434 0 00.78-3.376 2.296 2.296 0 00-.734-.872zM63.824 4.355l-5.718 11.803H55.81l2.135-4.409-3.352-7.394h2.434l2.158 4.937 2.297-4.937zM6.67 8.534a2.296 2.296 0 10-2.297 2.412A2.296 2.296 0 006.67 8.649v-.115m0 4.203v-1.103a3.421 3.421 0 01-2.664 1.24A4.11 4.11 0 01-.013 8.672v-.138a4.18 4.18 0 014.019-4.34 3.376 3.376 0 012.618 1.218V4.355h2.043v8.382zM18.771 10.83c-.735 0-.919-.275-.919-.964V6.238h1.31V4.424h-1.31V2.312H15.74v2.043h-2.756v-.85c0-.688.276-.964 1.01-.964h.46V.911h-.987c-1.746 0-2.572.574-2.572 2.296v1.125H9.724v1.906h1.17v6.568h2.09V6.238h2.756v4.11c0 1.723.643 2.458 2.296 2.458h1.148V10.83zM26.349 7.777a1.998 1.998 0 00-2.09-1.723 2.044 2.044 0 00-2.113 1.723zm-4.18 1.309a2.09 2.09 0 002.159 1.951 2.296 2.296 0 001.975-1.079h2.158a4.11 4.11 0 01-4.179 2.916 4.133 4.133 0 01-4.409-3.834v-.506a4.34 4.34 0 118.68 0 2.044 2.044 0 010 .529zM42.055 8.534a2.296 2.296 0 100 .115v-.115m-6.636 7.624V4.355h2.044v1.08a3.421 3.421 0 012.663-1.24 4.11 4.11 0 014.042 4.179v.16a4.18 4.18 0 01-4.019 4.34A3.307 3.307 0 0137.6 11.75v4.41zM51.608 8.534a2.296 2.296 0 10-2.411 2.412h.114a2.296 2.296 0 002.297-2.297v-.115m0 4.203v-1.103a3.353 3.353 0 01-2.641 1.24 4.11 4.11 0 01-4.042-4.179v-.16a4.18 4.18 0 014.019-4.34 3.33 3.33 0 012.595 1.217V4.355h2.066v8.382zM31.699 5.182a2.09 2.09 0 011.814-.988 2.02 2.02 0 01.896.184v2.159a2.64 2.64 0 00-1.493-.39 1.47 1.47 0 00-1.148 1.63v4.96h-2.136V4.355H31.7z" stroke-width="2.296"></path></svg>
                        <p>4 installments of $${((price.split("$")[1])/4).toFixed(2)} with Afterpay 
                            <a href="">Learn more <i class="bi bi-chevron-right"></i></a>
                        </p>
                    </div>
                </div>
                <!-- <div class="fullLine"></div>    -->
                <div class="productDesc">
                    <div class="productOverview desc " >
                        <button  id="productOverviewBtn" class="productOverviewBtn " onclick="check('productOverviewBtn')" aria-expanded="false">
                            Product Overview
                            <i class="bi bi-chevron-down"></i>
                        </button>
                    <p class="hiddenDropOverview" style="display: none;">Formulated with high potency botanicals rich in omega 6 fatty acids and antioxidants this cream helps to revive the complexion and help soothe dryness for skin that looks and feels smoother, softer and more supple. Backed by 30 years of visionary science. Powered by TFC8®.</p>
                    </div>
                    <div class="howToUse desc">
                        <button id="howToUseBtn" class="howToUseBtn" onclick="check('howToUseBtn')" aria-expanded="false">
                            How to Use
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <p class="hiddenDropHowToUse" style="display: none;">For optimum usage, on cleansed, dry skin, smooth a pea- sized amount over the face, neck and décolleté morning and evening.
                            <br>
                            In upward sweeping motions, massage the cream along your jawline. Sweep from your nose to your ears and across your forehead and massage cream over the cheeks to your temples. Apply from the base of the neck to the tip of the chin and take any excess cream and massage over the décolleté.</p>
                    </div>
                    <div class="ingredients desc">
                        <button id="ingredientsBtn" class="ingredientsBtn" onclick="check('ingredientsBtn')" aria-expanded="false">
                            Ingredients
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <p class="hiddenDropIngredients" style="display: none;">Aqua (Water), Coco-Caprylate/Caprate, Helianthus Annuus (Sunflower) Seed Oil, Squalane, Glycerin, Argania Spinosa Kernel Oil, Ethyl Oleate, Persea Gratissima (Avocado) Oil, Polyglyceryl-4 Oleate, Magnesium Sulfate, Oenothera Biennis (Evening Primrose) Oil, Panthenol, Polyglyceryl-6 Oleate, Zinc Pca, Polyhydroxystearic Acid, Butylene Glycol, Butyrospermum Parkii (Shea) Butter, Potassium Sorbate, Sodium Benzoate, Tocopherol, Sodium Hyaluronate, Hydrolyzed Rice Protein, Maltodextrin, Citric Acid, Camellia Sinensis Leaf Extract, Hydrogenated Lecithin, Tocopheryl Acetate, Xanthan Gum, Alanyl Glutamine, Arginine, Oligopeptide-177, Phenylalanine, Sisymbrium Irio Seed Oil, Sodium Chloride, Dextran, Palmitoyl Tripeptide-8.</p>
                    </div>
                    <div class="otherDetails desc">
                        <button id="otherDetailsBtn" class="otherDetailsBtn" onclick="check('otherDetailsBtn')" aria-expanded="false">
                            Other Details
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <div class="hiddenDropOtherDetails" style="display: none;">
                            <div class="otherDetailsVolume" style=" width: 30%; display: flex; justify-content: space-between;">
                                <p style="font-weight: 600;">Volume:</p>
                                <p>50ml</p>
                            </div>
                            <div class="otherDetailsBrand" style=" width: 43%; display: flex; justify-content: space-between; padding-top: 2%;">
                                <p style="font-weight: 600;">Brand:</p>
                                <p>Augustinus Bader</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="fullLine"></div> -->
            </div>
        </div>
        <div class="rightProductData">
            <img class="productImgRight" src="https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/augustinusbader.gif" alt="">
            <p class="title">${title}</p>
            <div class="readWrite">
                <a href="" class="readReviews">${reviews}</a>
                <a href="" class="writeReviews">WRITE A REVIEW</a>
            </div>
            <div class="loyaltyPoints">
                <svg class="loyaltyPointsMessage_starIcon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                    <path class="loyaltyPointsMessage_starIconFill" fill-rule="evenodd" fill="#333" d="M842 717c.376 3.574 1.577 6.374 3.604 8.4 2.027 2.027 4.825 3.227 8.396 3.6-3.522.302-6.32 1.495-8.396 3.58-2.075 2.084-3.258 4.89-3.55 8.42-.506-3.762-1.688-6.569-3.548-8.42-1.86-1.852-4.695-3.045-8.506-3.58 3.712-.441 6.547-1.64 8.506-3.6 1.958-1.958 3.123-4.758 3.494-8.4z" transform="translate(-830 -717)"></path>
                  </svg>
                <p>Earn 1500 reward points when purchasing this product as a rewards member*</p>
            </div>
            <div class="purchaseType">
                <div class="onetimePurchase">
                    <input class="inputOne" type="radio" checked="true">
                    <label class="labelOne" for=""><span class="oneTimePrice">${price}</span>One Time Purchase</label>
                </div>
                <div class="autoReplenishPurchase">
                    <input  class="inputTwo" type="radio">
                    <label class="labelTwo" for=""><span class="autoPrice">$${((price.split("$")[1])*0.8).toPrecision(5)}</span>Auto-Replenish</label>
                </div>
                <div class="hiddenAutoReplenish" style="display: none;">
                    <div class="hiddenAutoTitle" style="font-weight: bold; display: flex; gap: 3%;" >
                        <p>Auto-Replenishment</p>
                        <svg  class="subscribeAndSave_subscription_refresh" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                            <path class="subscribeAndSave_subscription_refresh_path" fill="#333" d="M3.527 4.304l1.194 1.04C3.724 6.489 3.167 7.95 3.167 9.5c0 3.498 2.835 6.333 6.333 6.333V14.25l3.167 2.375L9.5 19v-1.583c-4.372 0-7.917-3.545-7.917-7.917 0-1.936.699-3.765 1.944-5.196zM9.5 4.75L6.333 2.375 9.5 0v1.583c4.372 0 7.917 3.545 7.917 7.917 0 1.936-.699 3.765-1.944 5.196l-1.194-1.04c.997-1.145 1.554-2.606 1.554-4.156 0-3.498-2.835-6.333-6.333-6.333V4.75z"></path>
                          </svg>
                    </div>
                    <br>
                    <div class="hiddenAutoPoints">
                        <div class="hiddenAutoPoint">
                            <i class="bi bi-check2"></i>
                            <p>15% off initial purchase and 15% savings on future replenishment orders</p>
                        </div>
                        <div class="hiddenAutoPoint">
                            <i class="bi bi-check2"></i>
                            <p>Free delivery after your first order</p>
                        </div>
                        <div class="hiddenAutoPoint">
                            <i class="bi bi-check2"></i>
                            <p>You control the frequency</p>
                        </div>
                        <div class="hiddenAutoPoint">
                            <i class="bi bi-check2"></i>
                            <p>No commitment. Cancel or delay</p>
                        </div>
                        <a href="" style="color: black;">Find out more</a>
                    </div>
                </div>
            </div>
            <div class="sizeProduct">
                <p>Size:</p>
                <ul class="sizes">
                    <li class="ml15" id="ml15" onclick="mlFunction('ml15')">15ml</li>
                    <li class="ml30" id="ml30" onclick="mlFunction('ml30')">30ml</li>
                    <li class="ml50" id="ml50"  onclick="mlFunction('ml50')">50ml</li>
                </ul>
            </div>
            <p class="price" style="font-size: 180%; font-weight: 600; padding:8% 0 4% 0">${price}</p>
            <p class="save" style="font-weight: 600; padding-bottom: 7%;">Subscribe to this product to save 15%</p>
            <div class="fullLine" style="margin: 0;"></div>
            <p style="font-size: 120%; margin: 2% 0;">Quantity</p>
            <div class="quantity">
                <div class="productQuantity">
                    <button class="sub" onclick="decrement()">-</button>
                    <label  id="quant" class="quant" for="">1</label>
                    <button class="add" onclick="increment()">+</button>
                </div>
                <button id="addToCart" class="addToCart" onclick="addProductToCart()">ADD TO CART</button>
            </div>
            <div class="saveToFav" onclick="addProductToFav()" style="cursor:pointer">
                <i class="bi bi-heart" style="margin-top:1.5%"></i>
                <p style="margin-top: 1%;">Save to My Favourites</p>
            </div>
            <div class="sponsoredProducts">
                <div class="sponsored-1">
                    <div class="sponsoredImg" style="position: relative;">
                        <img src="https://static.thcdn.com/images/small/webp//productimg/original/13938587-1455002659983370.jpg" alt="">
                        <p>Sponsored</p>
                        <div class="addTOFav" style="position: absolute; top: 10%; left: 80%;" >
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="heart heartUnfilled ">
                                <path class="heartPath" d="M17.1771946,3.80075947 C15.634169,3.54841538 14.1191524,4.24328804 12.6032914,5.94067608 L12.0475025,6.56302173 L11.4877208,5.94426494 C9.98328314,4.28132899 8.47152577,3.58325658 6.9268411,3.79978408 C3.07950773,4.33908733 1.62539543,8.10071206 3.67140764,12.6178359 C5.08061189,15.7290344 10.3866231,20.25 12.0488058,20.25 C13.8690289,20.25 18.921013,15.9778795 20.4266084,12.6169382 C22.3452463,8.33396191 20.7713196,4.38853728 17.1771946,3.80075947 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="sponsoredImgDesc">
                        <p class="sponsoredProductName1">Oribe Gold Lust Repair and Restore Shampoo and Conditioner Bundle</p>
                        <p class="sponsoredProductReviews">235 Reviews</p>  
                        <p class="sponsoredProductPrice" style="font-weight: bold;">$101.00</p>
                    </div>
                    <button class="sponsoredProductBuy">QUICK BUY</button>
                </div>
                <div class="sponsored-2">
                    <div class="sponsoredImg" style="position: relative;">
                        <img src="https://static.thcdn.com/images/small/webp//productimg/original/13556032-2984949337854859.jpg" alt="">
                        <p>Sponsored</p>
                        <div class="addTOFav">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="heart heartUnfilled ">
                                <path class="heartPath" d="M17.1771946,3.80075947 C15.634169,3.54841538 14.1191524,4.24328804 12.6032914,5.94067608 L12.0475025,6.56302173 L11.4877208,5.94426494 C9.98328314,4.28132899 8.47152577,3.58325658 6.9268411,3.79978408 C3.07950773,4.33908733 1.62539543,8.10071206 3.67140764,12.6178359 C5.08061189,15.7290344 10.3866231,20.25 12.0488058,20.25 C13.8690289,20.25 18.921013,15.9778795 20.4266084,12.6169382 C22.3452463,8.33396191 20.7713196,4.38853728 17.1771946,3.80075947 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="sponsoredImgDesc">
                        <p class="sponsoredProductName2">Eminence Strawberry Rhubarb Hyaluronic Hydrator</p>
                        <p class="sponsoredProductReviews">14 Reviews</p>  
                        <p class="sponsoredProductPrice" style="font-weight: bold;">$65.00</p>
                    </div>
                    <button class="sponsoredProductBuy">QUICK BUY</button>
                </div>
            </div>
            <p class="stockInfo">In stock</p>
            <div class="fullLine"></div>
            <div class="delivery">
                <p>Delivery & Returns</p>
                <p>Free delivery is available on all orders over $50. Please see our <a href="" style="color: black; font-weight: bold;">shipping information </a> page for all available delivery options.</p>
                <p>If I'm not completely happy with my item?</p>
                <p>Please see our <a href="" style="color: black; font-weight: bold;">returns policy.</a></p>
                <p>*points earned on final checkout price, after any applied discounts.</p>
            </div> 
            <div class="fullLine" style="margin: 4%0  8% 0"></div>
            <div class="fullLine" style="margin: 4%0  8% 0; color: lightgray;"></div>
        </div>
    </div>

    <!-- addCartView -->

    <div class="addedToCart" style="display:none">
        <div class="addedHead">            
            <h2>Added to your cart</h2>
            <i class="bi bi-x-lg"></i>
        </div>
        <hr>
        <!-- <div class="line"></div> -->
        <div class="addedMain">
            <div class="addedMainImg">
                <img src="https://static.thcdn.com///productimg/300/300/13315101-2094974668494299.jpg" alt="">
            </div>
            <div class="addedDetails">
                <p class="addedTitle">${title}</p>
                <h4 class="addedPrice">$95.00</h4>
                <hr>
                <!-- <div class="line"></div> -->
                <p>Quantity <span class="addedQuant">1</span></p>
                <div>Subtotal: <span class="addedTotal">$322.00</span></div>
                <div>(<span class="addedtotalItems">4</span> items in your cart)</div>
                <div class="loyaltyPoints">
                    <svg class="loyaltyPointsMessage_starIcon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                        <path class="loyaltyPointsMessage_starIconFill" fill-rule="evenodd" fill="#333" d="M842 717c.376 3.574 1.577 6.374 3.604 8.4 2.027 2.027 4.825 3.227 8.396 3.6-3.522.302-6.32 1.495-8.396 3.58-2.075 2.084-3.258 4.89-3.55 8.42-.506-3.762-1.688-6.569-3.548-8.42-1.86-1.852-4.695-3.045-8.506-3.58 3.712-.441 6.547-1.64 8.506-3.6 1.958-1.958 3.123-4.758 3.494-8.4z" transform="translate(-830 -717)"></path>
                      </svg>
                    <p>Earn 1500 reward points when purchasing this product as a rewards member*</p>
                </div>
                <div class="mainButtons">
                    <button class="viewCart">VIEW CART</button>
                    <button class="continueShop">CONTINUE SHOPPING</button>
                </div>
            </div>
        </div>  
    </div>
//////////////////////////////////////////////////////

    <div class="moreProducts">
        <a href="" class="moreProduct">
            <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/51/original-0329_48991_THG0035423_DS_CM_April_Batching_676x556-063051.jpeg" alt="">
            <div class="Desc">
                <p>CONSCIOUS BEAUTY</p>
                <h2>What Inspires These 5 Conscious Beauty Brand Founders?</h2>
                <p>Dermstore Editors</p>
                <p class="readMore">READ MORE</p>
            </div>
        </a>
        <a href="" class="moreProduct">
            <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/37/original-1228_58634_THG0035884_DS_JN_January_Campaign_Batching_Shot_3_HP-LPSQ-BANNER-676x556-062237.jpeg" alt="">
            <div class="Desc">
                <p>SKIN CARE</p>
                <h2>Routine Refresh:The Barrier Strengthening Routine</h2>
                <p>Dermstore Editors</p>
                <p class="readMore">READ MORE</p>
            </div>
        </a>
        <a href="" class="moreProduct">
            <img src="https://static.thcdn.com/images/small/webp/widgets/208-us/13/original-1228_58634_THG0035884_DS_JN_January_Campaign_Batching_Shot_2_HP-LPSQ-BANNER-676x556-062513.jpeg" alt="">
            <div class="Desc">
                <p>SKIN CARE</p>
                <h2>Chasing The Elusive Holy Grail Routine? Start Here</h2>
                <p>Dermstore Editors</p>
                <p class="readMore">READ MORE</p>
            </div>
        </a>
    </div>
    <div class="reviewFaqs">
        <a class="reviewData" href="">Reviews</a>
        <a class="faqData" href="">FAQ</a>
        <div class="marker"></div>
    </div>
    <div class="review">
        <p>Review Snapshot</p>
        <div class="fullLine" style="margin: 1% 0; color: lightgray;"></div>
        <div class="reviewOverview">
            <div class="rating">
                <p style="font-size: 300%;">4.2</p>
                <div class="pr-snippet">
                    <div class="pr-snippet-stars-container">
                        <div class="pr-snippet-stars pr-snippet-stars-png" role="img" aria-label="Rated 4.2 out of 5 stars">
                            <div aria-hidden="true" class="pr-rating-stars">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                                <div class="pr-snippet-read-and-write" style="padding-top: 5%;">
                                    <span class="pr-snippet-review-count">40 REVIEWS</span>
                                    <a style="color: black;font-weight: bold; text-decoration: none; margin-left: 2%;" href="/power-reviews.list?pr_return_url=https://www.dermstore.com/augustinus-bader-the-rich-cream-50ml/13315093.html&amp;pr_merchant_id=1569255751&amp;pr_merchant_group_id=1633048422&amp;pr_page_id=13315093" class="pr-snippet-write-review-link pr-underline" rel="nofollow">WRITE A REVIEW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recommend">
                <p style="margin-bottom: 7%;">60%</p>
                <p>of respondents would recommend this to a friend</p>
            </div>
            <div class="starCategory">
                <div class="five">
                    <p>5 Stars</p>
                    <div class="level"></div>
                    <div class="levelMark"></div>
                    <p>24</p>
                </div>
                <div class="five">
                    <p>4 Stars</p>
                    <div class="level"></div>
                    <div class="levelMark4"></div>
                    <p>6</p>
                </div>
                <div class="five">
                    <p>3 Stars</p>
                    <div class="level"></div>
                    <div class="levelMark3"></div>
                    <p>4</p>
                </div>
                <div class="five">
                    <p>2 Stars</p>
                    <div class="level"></div>
                    <div class="levelMark2"></div>
                    <p>4</p>
                </div>
                <div class="five">
                    <p>1 Star</p>
                    <div class="level"></div>
                    <div class="levelMark1"></div>
                    <p>2</p>
                </div>
            </div>
        </div>
        <div class="skinTypeDiv" style=" position: relative;">
            <button id="skinBtn" class="skinTypeBtn" onclick="check('skinBtn')" style="padding: 0.3% 5% 0.3% 0%; width: 12%; cursor: pointer;" aria-expanded="false">Skin Type</button>
            <ul class="ulSkinTypes" style="display: none; position: absolute; top: 100%;z-index: 2; background-color: white;">
                <li>
                    <input type="checkbox">
                    <label for="">Sensitive (2)</label>
                </li>
                <li>
                    <input type="checkbox">
                    <label for="">Combination (1)</label>
                </li>
                <li>
                    <input type="checkbox">
                    <label for="">Dry (1)</label>
                </li>
                <li>
                    <input type="checkbox">
                    <label for="">Mature (1)</label>
                </li>
            </ul>
        </div>
    <div class="searchSortDiv">
            <div class="searchTerms">
                <input type="text" placeholder="Enter Search Terms">
                <i class="bi bi-search"></i>
            </div>
            <div class="sortReviews" style="position: relative;">
                <div id="sortBtn" class="sortReviewBtn" style="gap:25%" aria-expanded="false" onclick="check('sortBtn')">
                    <button id="selectedSort" aria-expanded="false">Most Recent</button>
                    <i class="bi bi-chevron-down"></i>
                </div>
                <ul class="ulSortReviews" style="display: none; position: absolute; top: 100%;z-index: 2; background-color: white;">
                    <p style="font-size: 90%">Sort Reviews by:</p>
                    <li id="reviewType1" class="type1Review" onclick="changeBtnTitle('reviewType1')">Most Recent</li>
                    <li id="reviewType2"  class="type2Review" onclick="changeBtnTitle('reviewType2')">Most Helpful</li>
                    <li id="reviewType3" class="type3Review"  onclick="changeBtnTitle('reviewType3')">Lowest Rated</li>
                    <li id="reviewType4" class="type4Review"  onclick="changeBtnTitle('reviewType4')">Highest Rated</li>
                    <li id="reviewType5" class="type5Review"  onclick="changeBtnTitle('reviewType5')">Oldest</li>
                </ul>
            </div>
    </div>
    <div class="reviewCustDiv">
        <p class="noOfReviews">Reviewed by 41 customers</p>
        <div class="custReviewDetails">
            <div class="review1">
                <div class="reviewLeft" style="width: 70%;">
                    <div class="ratingStars1" style="padding-bottom: 1%;">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <a style="padding-left: 3%; color: black; text-decoration: none; font-weight: bold; font-size: 90%;" href="">Good moisterizer, not the best for sensitive skin type</a>
                    </div>
                    <p>This moisturizer goes on smoothly and penetrates quickly but I have sensitive skin and it leaves my face a little red for a while which I'm not happy. If you have normal skin this would be a great moisturizer for you.</p>
                    <br>
                    <br>
                    <p>Bottom Line Yes, I would recommend to a friend</p>
                    <br>
                    <div class="helpful">
                        <p>Was this review helpful to you?</p>
                        <div class="Thumb">
                            <i class="bi bi-hand-thumbs-up-fill"></i>
                            <div class="upCount">0</div>
                        </div>
                        <div class="Thumb">
                            <i class="bi bi-hand-thumbs-down-fill"></i>
                            <div class="upCount">0</div>
                        </div>
                        <p>Flag this review</p>
                    </div>
                </div>
                <div class="customerDetails" style="margin-top: 1.5%;">
                    <p>Submitted 2 days ago <br>By Maria <br> From Albany, NY <br> Age Range Over 55 <br> Skin Type Sensitive</p>
                </div>
            </div>
<!--  -->
            <div class="review1">
                <div class="reviewLeft" style="width: 70%;">
                    <div class="ratingStars1" style="padding-bottom: 1%;">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <a style="padding-left: 3%; color: black; text-decoration: none; font-weight: bold; font-size: 90%;" href="">Fast absorbing, luscious cream</a>
                    </div>
                    <p>I'm 47 years old with somewhat dry skin (particularly in winter) and am finding this cream beneficial. My husband really likes it as well. It's rapidly absorbing for the consistency and does a nice job moisturizing. I can't say it's better than Skinceuticals Triple Lipid, but that's a tough one to beat. </p>
                    <br>
                    <br>
                    <p>Bottom Line Yes, I would recommend to a friend</p>
                    <br>
                    <div class="helpful">
                        <p>Was this review helpful to you?</p>
                        <div class="Thumb">
                            <i class="bi bi-hand-thumbs-up-fill"></i>
                            <div class="upCount">0</div>
                        </div>
                        <div class="Thumb">
                            <i class="bi bi-hand-thumbs-down-fill"></i>
                            <div class="upCount">0</div>
                        </div>
                        <p>Flag this review</p>
                    </div>
                </div>
                <div class="customerDetails" style="margin-top: 1.5%;">
                    <p>Submitted 21 days ago <br>By Scooter <br> From West Palm Beach, Florida <br> Age Range 45-54 <br> Skin Type Mature</p>
                </div>
            </div>
        </div>
    </div>
</div>
    <div class="faq" style="display: none;">
        <p>What do you want to know about this product?</p>
        <div class="ques" onclick="rotate()">
            <button id="openFormIcon" style="border: none;"><i class="bi bi-plus-circle"></i></button>
            <p class="ask">Ask a Question</p>
        </div>
        <form class="hiddenForm" action="" style="display: none;">
            <div class="errorBox">
                <h4>There are <span class="noOfErrors">3</span> errors in this form</h4>
                <p class="quesError">Question is required</p>
                <p class="emailError">Email is required</p>
                <p class="emailValidError">Email is invalid</p>
                <p class="nameError">Nickname is required</p>    
            </div>

            <p style="font-size: 80%; padding-bottom: 1%; margin-bottom:1% ;"><span style="color: red;">*</span>Required Field</p>
            <label style="margin-top:0.5% ;"for="">Question: <span style="color: red;">*</span></label>
            <div class="inputsQ">
                <input type="text" onkeyup="checkChange('question')" name="" id="question" style="height: 20vh;">
                <i class="bi bi-exclamation-triangle-fill" style="color: red; font-size: 140%;"></i>
            </div>
            <label for="">Email:<span style="color: red;">*</span></label>
            <p>To receive your answer, please provide your email address.</p>
            <div class="inputsE">
                <i class="bi bi-exclamation-triangle-fill" style="color: red; font-size: 140%;"></i>
                <input type="text" name="" onchange="checkChange('email')" id="email" placeholder="Ex. nancy@yahoo.com">
            </div>
            <label for="">Nickname:<span style="color: red;">*</span></label>
            <div class="inputsN">
                <input type="text" onchange="checkChange('name')" name="" id="name" placeholder="Ex. Nancy the Newbie">
                <i class="bi bi-exclamation-triangle-fill" style="color: red; font-size: 140%;"></i>
            </div>
            <label for="">Your Location:</label>
            <input type="text" name="" id="location" placeholder="Ex. Barstow,CA">
            <p class="terms">By submitting, you represent that you have read and agree to our <a href="">Terms of Submission </a> and our <a href="">Privacy Policy.</a> </p>
            <button class="submit" onclick="formFunction()">SUBMIT</button>
        </form>
    </div>`
}
if(main){generateProduct()}

//slideEffect
let changeNext=document.querySelector(".changeNext")
let changePrev=document.querySelector(".changePrev")
let bigImages=document.querySelector(".bigImages")
if(bigImages){
bigImages.style.overflow="scroll"
changeNext.onclick=()=>{
    bigImages.scrollBy({left:630,behavior:"smooth"})
}
changePrev.onclick=()=>{
    bigImages.scrollBy({left:-630,behavior:"smooth"})
}}



let bigImg=document.querySelector(".bigImage-1")
let bigImg2=document.querySelector(".bigImage-2")
let shortImg1=document.querySelector(".shortImg-1")
let shortImg2=document.querySelector(".shortImg-2")
let intro=document.querySelector(".intro")
let title=document.querySelector(".title")
let readReviews=document.querySelector(".readReviews")
let sub=document.querySelector(".sub")
let add=document.querySelector(".add")
let quant=document.querySelector(".quant");

// function checkChange(){
//     console.log("in")
//     if(inputOne.checked=true){
//         inputTwo.checked=false 
//     }
//     else if(inputTwo.checked=true){
//         inputOne.checked=false
//     }
// }


let ml15=document.getElementById("ml15")
let ml30=document.getElementById("ml30")
let ml50=document.getElementById("ml50")

//ML type price
let oneTimePrice=document.querySelector(".oneTimePrice")
let autoPrice=document.querySelector(".autoPrice")
let price=document.querySelector(".price")
// ml50.style.border="1px solid black"
let inputOne=document.querySelector(".inputOne");
let inputTwo=document.querySelector(".inputTwo");
let labelOne=document.querySelector(".labelOne");
let labelTwo=document.querySelector(".labelTwo");
let hiddenAutoReplenish=document.querySelector(".hiddenAutoReplenish");


let clickedElement="50ml"
mlFunction=(mlInfo)=>{
    let mlElement=document.getElementById(mlInfo)
    // console.log(mlElement.innerHTML)
    let gettingPrice=totalProducts.find((x)=>x.id===window.location.href.split("?")[1])
    oneTimePrice.innerHTML=gettingPrice.price
    autoPrice.innerHTML="$"+((gettingPrice.price.split("$")[1])*0.8).toPrecision(5)
    if(mlElement.innerHTML=="15ml"){
        ml15.style.border="1px solid black"
        ml30.style.border="1px solid gray"
        ml50.style.border="1px solid gray"
        oneTimePrice.innerHTML="$"+((oneTimePrice.innerHTML.split("$")[1])*0.32).toPrecision(4)
        autoPrice.innerHTML="$"+((autoPrice.innerHTML.split("$")[1])*0.32).toPrecision(4)
        if(inputOne.checked==false && inputTwo.checked==true){
            price.innerHTML=autoPrice.innerHTML
        }
        else if(inputOne.checked==true && inputTwo.checked==false){
            price.innerHTML=oneTimePrice.innerHTML
        }
    }
    else if(mlElement.innerHTML=="30ml"){
        ml15.style.border="1px solid gray"
        ml30.style.border="1px solid black"
        ml50.style.border="1px solid gray"
        oneTimePrice.innerHTML="$"+((oneTimePrice.innerHTML.split("$")[1])*0.61).toPrecision(5)
        autoPrice.innerHTML="$"+((autoPrice.innerHTML.split("$")[1])*0.61).toPrecision(4)
        if(inputOne.checked==false && inputTwo.checked==true){
            price.innerHTML=autoPrice.innerHTML
        }
        else if(inputOne.checked==true && inputTwo.checked==false){
            price.innerHTML=oneTimePrice.innerHTML
        }
    }
    else if(mlElement.innerHTML=="50ml"){
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
    clickedElement=mlElement.innerHTML
}

//switching type
labelTwo.style.color="gray"
labelOne.style.color="black"
price.innerHTML=oneTimePrice.innerHTML
hiddenAutoReplenish.style.display="none"
let typeOfPurchase="oneTime"

// labelTwo.style.color="gray"
if(inputTwo){ inputTwo.onclick=()=>{
    inputOne.checked=false
    labelOne.style.color="gray"
    labelTwo.style.color="black"
    price.innerHTML=autoPrice.innerHTML
    hiddenAutoReplenish.style.display="flex"
    hiddenAutoReplenish.style.flexDirection="column"
    typeOfPurchase="AutoReplenish"
}}
if(inputTwo){
    inputOne.onclick=()=>{
    inputTwo.checked=false
    labelTwo.style.color="gray"
    labelOne.style.color="black"
    price.innerHTML=oneTimePrice.innerHTML
    hiddenAutoReplenish.style.display="none"
    typeOfPurchase="oneTime"
}}


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
if(sponsored1){
    sponsored1.onclick=()=>{
    console.log(window.location.href)
    totalProducts.map((val=>{
        if(sponsoredProductName1.innerHTML==val.title){
            window.location.href=`http://127.0.0.1:5500/random.html?${val.id}`
            generateProduct()
        }
    }))
}}
if(sponsored2){
sponsored2.onclick=()=>{
    totalProducts.map((val=>{
        if(sponsoredProductName2.innerHTML==val.title){
            window.location.href=`http://127.0.0.1:5500/random.html?${val.id}`
            generateProduct()
        }
    }))
}}

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
let ulSortReviews=document.querySelector(".ulSortReviews")
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
    ulSortReviews.style.display="none"
}

//review to faq
let faqData=document.querySelector(".faqData")
let reviewData=document.querySelector(".reviewData")
let reviewHidden=document.querySelector(".review")
let faqHidden=document.querySelector(".faq")
let marker=document.querySelector(".marker")
if(reviewData){reviewData.onclick=function showReview(e){
    e.preventDefault()
    console.log(faqHidden)
    marker.style.left="22%"
    marker.style.width="36%"
    reviewHidden.style.display="flex"
    reviewHidden.style.flexDirection="column"
    faqHidden.style.display="none"
}}
if(faqData){faqData.onclick=function showFaq(e){
    e.preventDefault()
    console.log(marker.style.left)
    marker.style.left="60%"
    marker.style.width="23%"
    faqHidden.style.display="flex"
    reviewHidden.style.display="none"
}}


//form show/hide
let ask=document.querySelector(".ask")
let hiddenForm=document.querySelector(".hiddenForm")
let openFormIcon=document.querySelector("#openFormIcon")
function rotate(){
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
}




let addProductToCart=()=>{
    // console.log(clickedElement)
    let quantityOnPage=document.getElementById("quant")
    let searchData=totalProducts.find((x)=>x.id===window.location.href.split("?")[1])
    let searchBasket=basket.find((y)=>y.id===searchData.id)
    console.log(searchBasket)
    if(searchBasket===undefined){
        basket.push({
            id:searchData.id,
            quantity:parseInt(quantityOnPage.innerHTML),
            price:price.innerHTML,
            pack:clickedElement,
            purchaseType:typeOfPurchase
        })
        calculation()
    }
    else if(searchBasket){
        let newP=basket.find((x)=>(x.price===price.innerHTML && x.pack==clickedElement))
        console.log("newP",newP)
        if(newP){
            newP.quantity=parseInt(newP.quantity)+parseInt(quantityOnPage.innerHTML)
            calculation()
        }
        else{
            basket.push({
                id:searchData.id,
                quantity:parseInt(quantityOnPage.innerHTML),
                price:price.innerHTML,
                pack:clickedElement,
                purchaseType:typeOfPurchase
            })
            calculation()
        }
        // for(let i =0; i<basket.length; i++){
        //     if(basket[i].price === quantityOnPage.innerHTML){
        //         basket[i].quantity=parseInt(basket[i].quantity)+parseInt(quantityOnPage.innerHTML)
        //     }
        //     else if(basket[i].price!=quantityOnPage.innerHTML){
        //         basket.push({
        //             id:searchData.id,
        //             quantity:parseInt(quantityOnPage.innerHTML),
        //             price:price.innerHTML,
        //             pack:clickedElement
        //     })
        //   }
        // }

    }
    localStorage.setItem("data",JSON.stringify(basket))
    // console.log(basket)
}


// function showSpecificMenu(hiddenCategoryId){
//     let hiddenCategory=document.getElementById(hiddenCategoryId)
//     hiddenCategory.style.display="grid"
//     }
//     function hideSpecificMenu(hiddenCategoryId){
//     let hiddenCategory=document.getElementById(hiddenCategoryId)
//     // console.log(hiddenCategory)
//     hiddenCategory.style.display="none"
//     }


// let numb=document.querySelector(".numb")
// function showAtoZ(charValue){
//     // let character=document.querySelectorAll(".character")
//     let alpha=document.getElementById(charValue)
//     document.querySelectorAll(".character").forEach(val=>{
//         if(alpha.innerHTML.toLowerCase()===val.innerHTML.split("")[0].toLowerCase())
//         {  
//             val.style.display="block"
//         }
//        else if(alpha.innerHTML==="0-9"){
//         val.style.display="none"
//         numb.style.display="block"
//        }
//        else{
//             val.style.display="none"
//         }
//     })
// }


// let noInCart=document.getElementById("noInCart")
// console.log(noInCart)

// let calculation=()=>{
//     let noInCart=document.getElementById("noInCart");
//     noInCart.innerHTML=basket.map((x)=>x.quantity).reduce((x,y)=>x+y,0)
//     console.log(noInCart.innerHTML)
// }
// calculation();

let addToCart=document.getElementById("addToCart")
let addedToCart=document.querySelector(".addedToCart")
if(addToCart){addToCart.addEventListener("click",()=>{
    let info=totalProducts.find((x)=>x.id===window.location.href.split("?")[1])
    console.log(info.title)
    // window.location.href.split("?")[1]
})}

let favourites=JSON.parse(sessionStorage.getItem("fav")) || []
let saveToFav=document.querySelector(".saveToFav")

let addProductToFav=()=>{
    let searchData=totalProducts.find((x)=>x.id===window.location.href.split("?")[1])
    // console.log(searchData)
    let searchFav=favourites.find((y)=>y.id===searchData.id)
    // console.log(searchFav)
    if(searchFav==undefined){
        favourites.push(searchData)  
    }
    else {
        console.log("already ")
    }

        // return;
    console.log(favourites)
    sessionStorage.setItem("fav",JSON.stringify(favourites))
}



