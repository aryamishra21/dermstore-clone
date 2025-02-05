

// let hiddenAccount = document.querySelector(".accountHidden")
// let account=document.querySelector(".account")
// let body=document.querySelector("body")
// let header=document.querySelector(".header")
// let input=document.querySelector("input")
// if(account){
//     account.addEventListener("mouseover",()=>{
//         // hiddenAccount.style.display = "inline";
//         hiddenAccount.style.border="none"
//         account.style.backgroundColor="white"
//         body.style.backgroundColor="gray";
//         header.style.backgroundColor="gray"
//         input.style.backgroundColor="gray"
//     })
//     account.addEventListener("mouseout",()=>{
//         // hiddenAccount.style.display = "none";
//         body.style.backgroundColor="white";
//         header.style.backgroundColor="white"
//         input.style.backgroundColor="white"
//     })
// }
// let cat1=document.querySelector(".cat1")
// cat1.addEventListener("onmouseenter",showSpecificMenu(hiddenCategoryId))


let body=document.querySelector("body")
let basket=JSON.parse(localStorage.getItem("data")) || []
let heading=document.querySelector(".heading")
let  Header=() =>{
    // return (heading.innerHTML=
    return(heading.innerHTML=`
        <div class="header">
            <div class="head">
                <img  class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Dermstore_logo.svg/2560px-Dermstore_logo.svg.png"
                    alt="">
                <div class="searchBar">
                    <input type="text" id="searchInput" placeholder="Search for a product or brand...">
                    <a href="" id="searchEnter">
                        <i class="bi bi-search"></i>
                    </a>
                </div>
                <div class="account">
                    <i class="bi bi-person"></i>
                    <a id="a" href="">Account</a>
                    <div class="accountHidden">
                        <div class="firstHidden">
                            <a href="" class="login">LOGIN</a>
                            <a href="/register.html" class="register">REGISTER</a>
                        </div>
                        <div class="loggedHidden" style="display:none;flex-direction:row; justify-content:space-between">
                            <p style="color:black;">Hello <span class="usernameVal">Name</span><p>
                            <a href="login.html" style="color:black">LOG OUT</a>
                        </div>
                        <div class="secondHidden">
                            <a href="favourites.html" class="myFav">My Favorites</a>
                            <a href="">Your Orders</a>
                            <a href="">Your Auto Auto-Replenishments</a>
                            <a href="">Your Referrals</a>
                        </div>
                    </div>
                </div>
                <div class="cart" onmouseout="hidecartPopup()" style="position: relative;">
                    <div class="cartIcon">
                    <i class="bi bi-bag"></i>
                    <a id="a" href="">Cart</a>
                    <span id="noInCart" onchange="popUpBasketData()" style="position: absolute; top:1%;left:20%;border-radius:50%;color:white;background-color: black; padding: 5% 10%; font-size: 70%;">0</span>
                    </div>
                    <div class="popUpCart" style="display:none;position:absolute;top:90%;left:-306%;margin-right:0%; width:300px;  background-color:white">
                    <div class="" style="display:flex; flex-direction:row;justify-content:space-between;padding:5% 2% 0% 2%">
                        <p><span class="noOfCart">1</span> item(s) in your cart.</p>
                        <p class="totalAmountOfCart">$1123</p>
                    </div>
                    <div class="loyaltyPoints" style="display:flex;padding:1% 2%">
                    <svg class="loyaltyPointsMessage_starIcon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                        <path class="loyaltyPointsMessage_starIconFill" fill-rule="evenodd" fill="#333" d="M842 717c.376 3.574 1.577 6.374 3.604 8.4 2.027 2.027 4.825 3.227 8.396 3.6-3.522.302-6.32 1.495-8.396 3.58-2.075 2.084-3.258 4.89-3.55 8.42-.506-3.762-1.688-6.569-3.548-8.42-1.86-1.852-4.695-3.045-8.506-3.58 3.712-.441 6.547-1.64 8.506-3.6 1.958-1.958 3.123-4.758 3.494-8.4z" transform="translate(-830 -717)"></path>
                      </svg>
                    <p style="padding:2% 4% 4% 4% ; font-weight:bold">Earn 1500 reward points when purchasing this product as a rewards member*</p>
                    </div>
                    <a href="cart.html" style="background-color:black;color:white;text-decoration:none;width:100%;padding:2% 5%;margin-left:2%;">VIEW CART</a>
                    <div class="basketData" style="overflow-y: scroll;height:65vh;margin-top:25px;"></div>
                    </div>
                </div>
    
            </div>
            <div class="categories">
                <ul class="catUl" >
                    <li class="cat1" onmouseenter="showSpecificMenu('brandsHidden')" onmouseleave="hideSpecificMenu('brandsHidden')">Brands
                    
                    
                        <div id="brandsHidden" style="display: none;" class="brands">
                            <div class="fullLine" style="margin: 2% 0 0.5% 0;"></div>
                            <ul>
                                <li id="numb" onmouseenter="showAtoZ('numb')">0-9</li>          
                                <li id="charA" onmouseenter="showAtoZ('charA')">A</li>
                                <li id="charB" onmouseenter="showAtoZ('charB')">B</li>
                                <li id="charC" onmouseenter="showAtoZ('charC')">C</li>
                                <li id="charD" onmouseenter="showAtoZ('charD')">D</li>
                                <li id="charE" onmouseenter="showAtoZ('charE')">E</li>
                                <li id="charF" onmouseenter="showAtoZ('charF')">F</li>
                                <li id="charG" onmouseenter="showAtoZ('charG')">G</li>
                                <li id="charH" onmouseenter="showAtoZ('charH')">H</li>
                                <li id="charI" onmouseenter="showAtoZ('charI')">I</li>
                                <li id="charJ" onmouseenter="showAtoZ('charJ')">J</li>
                                <li id="charK" onmouseenter="showAtoZ('charK')">K</li>
                                <li id="charL" onmouseenter="showAtoZ('charL')">L</li>
                                <li id="charM" onmouseenter="showAtoZ('charM')">M</li>
                                <li id="charN" onmouseenter="showAtoZ('charN')">N</li>
                                <li id="charO" onmouseenter="showAtoZ('charO')">O</li>
                                <li id="charP" onmouseenter="showAtoZ('charP')">P</li>
                                <li id="charQ" onmouseenter="showAtoZ('charQ')">Q</li>
                                <li id="charR" onmouseenter="showAtoZ('charR')">R</li>
                                <li id="charS" onmouseenter="showAtoZ('charS')">S</li>
                                <li id="charT" onmouseenter="showAtoZ('charT')">T</li>
                                <li id="charU" onmouseenter="showAtoZ('charU')">U</li>
                                <li id="charV" onmouseenter="showAtoZ('charV')">V</li>
                                <li id="charW" onmouseenter="showAtoZ('charW')">W</li>
                                <li id="charY" onmouseenter="showAtoZ('charY')">Y</li>
                                <li id="charZ" onmouseenter="showAtoZ('charZ')">Z</li>
                            </ul>
                            <div class="fullLine" style="margin: 0.5% 0;"></div> 
                            <ul class="brandAToZItems"> 
                                <li class="character numb">111Skin</li>
                                <li class="character">Act+Acre</li>
                                <li class="character">Aesop</li>
                                <li class="character">African Botanics</li>
                                <li class="character">AGENT NATEUR</li>
                                <li class="character">Alchimie Forever</li>
                                <li class="character">Allies of Skin</li>
                                <li class="character">Alpha-H</li>
                                <li class="character">Alterna</li>
                                <li class="character">Alurx</li>
                                <li class="character">Amarte</li>
                                <li class="character">AMELIORATE</li>
                                <li class="character">Angela Caglia Skincare</li>
                                <li class="character">Aquis</li>
                                <li class="character">ARCONA</li>
                                <li class="character">ARQUISTE Parfumeur</li>
                                <li class="character">Augustinus Bader</li>
                                <li class="character">Avène</li>
    
                                <li class="character">BABOR</li>
                                <li class="character">Baby Foot</li>
                                <li class="character">bareMinerals</li>
                                <li class="character">beautyblender</li>
                                <li class="character">BeautyFIX</li>
                                <li class="character">Beauty ORA</li>
                                <li class="character">BeautyStat Cosmetics</li>
                                <li class="character">Best of Dermstore</li>
                                <li class="character">Bioderma</li>
                                <li class="character">BIOEFFECT</li>
                                <li class="character">Bioelements</li>
                                <li class="character">Biopelle</li>
                                <li class="character">BLONDME</li>
                                <li class="character">Bloom Effects</li>
                                <li class="character">Boscia</li>
                                <li class="character">Briogeo</li>
                                <li class="character">BY TERRY</li>
                                <li class="character">Candier</li>
                                <li class="character">Carrière Frères</li>
                                <li class="character">Caswell-Massey</li>
                                <li class="character">Caudalie</li>
                                <li class="character">Cellex-C</li>
                                <li class="character">CeraVe</li>
                                <li class="character">Chantecaille</li>
                                <li class="character">Charlotte Mensah</li>
                                <li class="character">Chris Collins</li>
                                <li class="character">Christophe Robin</li>
                                <li class="character">ClarityRx</li>
                                <li class="character">Clark's Botanicals</li>
                                <li class="character">Colorescience</li>
                                <li class="character">COOLA</li>
                                <li class="character">COSMEDIX</li>
                                <li class="character">COSRX</li>
                                <li class="character">COVER FX</li>
                                <li class="character">Cowshed</li>
    
                                <li class="character">Dame</li>
                                <li class="character">Daniel Sandler</li>
                                <li class="character">David Mallett</li>
                                <li class="character">Dermablend</li>
                                <li class="character">DERMAdoctor</li>
                                <li class="character">DERMAFLASH</li>
                                <li class="character">Dermalogica</li>
                                <li class="character">DermaQuest</li>
                                <li class="character">Dermstore Collection</li>
                                <li class="character">DevaCurl</li>
                                <li class="character">DHC</li>
                                <li class="character">Dime Beauty Co</li>
                                <li class="character">Doctor Rogers</li>
                                <li class="character">dpHUE</li>
                                <li class="character">Dr. Brandt</li>
                                <li class="character">Dr. Loretta</li>
    
                                <li class="character">Dr. Zenovia</li>
                                <li class="character">Dr Dennis Gross</li>
    
                                <li class="character">Elemis</li>
                                <li class="character">Elizabeth Arden</li>
                                <li class="character">Ellis Brooklyn</li>
                                <li class="character">EltaMD</li>
                                <li class="character">Embryolisse</li>
                                <li class="character">Emepelle</li>
                                <li class="character">Eminence Organic Skin Care</li>
                                <li class="character">Epicuren Discovery</li>
                                <li class="character">Epionce</li>
                                <li class="character">Erborian</li>
                                <li class="character">ESPA</li>
                                <li class="character">Estée Lauder</li>
                                <li class="character">EVE LOM</li>
                                <li class="character">evolis Professional</li>
                                <li class="character">EVOLVh</li>
                                <li class="character">Exuviance</li>
                                <li class="character">Eyeko</li>
    
                                <li class="character">Fekkai</li>
                                <li class="character">Fillerina</li>
                                <li class="character">Filorga</li>
                                <li class="character">First Aid Beauty</li>
                                <li class="character">Follain</li>
                                <li class="character">FOREO</li>
                                <li class="character">Foria</li>
                                <li class="character">Fur</li>
                                <li class="character">Furtuna Skin</li>
    
                                <li class="character">ghd</li>
                                <li class="character">GlamGlow</li>
                                <li class="character">Glasshouse Fragrances</li>
                                <li class="character">GLO Science</li>
                                <li class="character">Glo Skin Beauty</li>
                                <li class="character">GLOSS MODERNE</li>
                                <li class="character">GLOWBIOTICS</li>
                                <li class="character">Glytone</li>
                                <li class="character">Grande Cosmetics</li>
                                <li class="character">Grow Gorgeous</li>
                                <li class="character">Grown Alchemist</li>
                                <li class="character">Guinot</li>
    
                                <li class="character">Harry Josh Pro Tools</li>
                                <li class="character">Herbivore Botanicals</li>
                                <li class="character">Hermetica</li>
                                <li class="character">Hero Cosmetics</li>
                                <li class="character">HoliFrog</li>
                                <li class="character">Hotel Collection</li>
                                <li class="character">Hot Tools</li>
                                <li class="character">HUM Nutrition</li>
                                <li class="character">HydroPeptide</li>
    
                                <li class="character">ilike Organic Skin Care</li>
                                <li class="character">Illamasqua</li>
                                <li class="character">Illuminare</li>
                                <li class="character">Iluminage</li>
                                <li class="character">IMAGE Skincare</li>
                                <li class="character">Indie Lee</li>
                                <li class="character">iS Clinical</li>
                                <li class="character">ISDIN</li>
    
                                <li class="character">jane iredale</li>
                                <li class="character">Jan Marini</li>
                                <li class="character">Jenny Patinkin</li>
                                <li class="character">Joanna Vargas</li>
                                <li class="character">Jouer Cosmetics</li>
                                <li class="character">Juice Beauty</li>
                                <li class="character">Juliette Has a Gun</li>
    
                                <li class="character">kai</li>
                                <li class="character">Kate Somerville</li>
                                <li class="character">Kayo Body Care</li>
                                <li class="character">Kevyn Aucoin</li>
                                <li class="character">Kjaer Weis</li>
                                <li class="character">Klorane</li>
                                <li class="character">Koh Gen Do</li>
                                <li class="character">Korres</li>
    
                                <li class="character">L'or de Seraphine</li>
                                <li class="character">Lancer Skincare</li>
                                <li class="character">La Roche-Posay</li>
                                <li class="character">LashFOOD</li>
                                <li class="character">LELO</li>
                                <li class="character">Leonor Greyl</li>
                                <li class="character">LightStim</li>
                                <li class="character">Liquides Imaginaires</li>
                                <li class="character">LUMIRA</li>
                                <li class="character">Luzern Laboratories</li>
                               
                                <li class="character">Mama Mio</li>
                                <li class="character">Marvis Toothpaste and Oral Care</li>
                                <li class="character">MASKTINI</li>
                                <li class="character">Mason Pearson</li>
                                <li class="character">MDSolarSciences</li>
                                <li class="character">Me</li>
                                <li class="character">Medik8</li>
                                <li class="character">Memo Paris</li>
                                <li class="character">Michael Todd Beauty</li>
                                <li class="character">mio</li>
                                <li class="character">miriam quevedo</li>
                                <li class="character">Moroccanoil</li>
                                <li class="character">Murad</li>
                                <li class="character">Myvitamins</li>
                                <li class="character">MZ Skin</li>
    
                                <li class="character">Natura Bissé</li>
                                <li class="character">Naturopathica</li>
                                <li class="character">Neocutis</li>
                                <li class="character">NEOM</li>
                                <li class="character">NEOSTRATA</li>
                                <li class="character">Nest New York</li>
                                <li class="character">neuLash</li>
                                <li class="character">NION Beauty</li>
                                <li class="character">Nioxin</li>
                                <li class="character">NUDESTIX</li>
                                <li class="character">NuFACE</li>
                                <li class="character">Nurse Jamie</li>
    
                                <li class="character">OAM by Ciara</li>
                                <li class="character">Obagi</li>
                                <li class="character">Olaplex</li>
                                <li class="character">Olga Lorencin Skin Care</li>
                                <li class="character">Omorovicza</li>
                                <li class="character">One Love Organics</li>
                                <li class="character">Oribe</li>
                                <li class="character">Osmosis Beauty</li>
                                <li class="character">Ouidad</li>
                                <li class="character">Oxygenetix</li>
    
                                <li class="character">Pai Skincare</li>
                                <li class="character">patchology</li>
                                <li class="character">Patricks</li>
                                <li class="character">Paula's Choice</li>
                                <li class="character">PCA SKIN</li>
                                <li class="character">Perricone MD</li>
                                <li class="character">Peter Thomas Roth</li>
                                <li class="character">Philip B.</li>
                                <li class="character"> Philip Kingsley</li>
                                <li class="character">Phyto</li>
                                <li class="character">PMD</li>
                                <li class="character">PRIORI Skincare</li>
    
                                <li class="character">QuasarMD</li>
    
                                <li class="character">R+Co</li>
                                <li class="character">R+Co Bleu</li>
                                <li class="character">Rahua</li>
                                <li class="character">RAINCRY</li>
                                <li class="character">RapidLash</li>
                                <li class="character">Rejuvi</li>
                                <li class="character">REN Clean Skincare</li>
                                <li class="character">René Furterer</li>
                                <li class="character">Replenix</li>
                                <li class="character">REVERIE</li>
                                <li class="character">Revision Skincare</li>
                                <li class="character">RevitaLash Cosmetics</li>
                                <li class="character">RéVive Skincare</li>
                                <li class="character">Rita Hazan</li>
                                <li class="character">RMS Beauty</li>
                                <li class="character">Rodial</li>
                                <li class="character">RÓEN</li>
    
                                <li class="character">Sachajuan</li>
                                <li class="character">Sanitas Skincare</li>
                                <li class="character">Sarah Chapman</li>
                                <li class="character">SEEN</li>
                                <li class="character">Sensica</li>
                                <li class="character">SENTÉ</li>
                                <li class="character">Sigma Beauty</li>
                                <li class="character">SK-II</li>
                                <li class="character">SkinCeuticals</li>
                                <li class="character">Skin Gym</li>
                                <li class="character">SKIN INC Supplement Bar</li>
                                <li class="character">SkinMedica</li>
    
                                <li class="character">T3</li>
                                <li class="character">Tarte Cosmetics</li>
                                <li class="character">The Beauty Chef</li>
                                <li class="character">The Light Salon</li>
                                <li class="character">The Nue Co.</li>
                                <li class="character">The Organic Pharmacy</li>
                                <li class="character">Therabody</li>
                                <li class="character">THE ROUTE</li>
    
                                <li class="character">U Beauty</li>
                                <li class="character">UNITE Hair</li>
                                <li class="character">UNSUN</li>
                                <li class="character">Ursa Major</li>
    
                                <li class="character">VENeffect</li>
                                <li class="character">Veronique Gabai</li>
                                <li class="character">Verso</li>
                                <li class="character">Vichy</li>
                                <li class="character">VI Derm</li>
                                <li class="character">VIRTUE</li>
                                <li class="character">VivierSkin</li>
                                <li class="character">Volition Beauty</li>
    
                                <li class="character">Wander Beauty</li>
                                <li class="character">Weleda</li>
    
                                <li class="character">Yon-KA</li>
    
                                <li class="character">Zutta</li>
    
                            </ul>
                        </div></li>
                    <li class="cat2" onmouseenter="showSpecificMenu('browseByHidden')" onmouseleave="hideSpecificMenu('browseByHidden')">Browse By
                    
                    
                        <div id="browseByHidden"  class="browseBy navHiddenData" style="display: none;">
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Cleansers & Exfoliators</p>
                                <ul class="hoverUl">
                                    <li>Cleansers</li>
                                    <li>Exfoliants, Peels & Scrubs</li>
                                    <li>Toners & Mist</li>
                                    <li>Face Wash</li>
                                    <li>Makeup Remover</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Treatments & Serums</p>
                                <ul class="hoverUl"> 
                                    <li>Face Serums</li>
                                    <li>Face Masks</li>
                                    <li>Neck Cream</li>
                                    <li>Wrinkle Cream</li>
                                    <li>Acne Treatment</li>
                                    <li>Dark Spot Corrector</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Moisturizers</p>
                                <ul class="hoverUl">
                                    <li>Face Moisturizer</li>
                                    <li>Face Oils</li>
                                    <li>Night Cream</li>
                                    <li>Tinted Moisturizer</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Eye Care</p>
                                <ul class="hoverUl">
                                    <li>Eye Cream & Moisturizers</li>
                                    <li>Eye Treatments & Serums</li>
                                    <li>Eye Masks</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Lip Care</p>
                                <ul>
                                    <li>Lip Balms & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Professional Tools & Devices</p>
                                <ul class="hoverUl">
                                    <li>Cleansing Devices</li>
                                    <li>Anti-Aging Tools & Devices</li>
                                    <li>Microdermabrasion</li>
                                    <li>Microneedling</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Build a Routine</p>
                                <ul class="hoverUl">
                                    <li>Combination Skin</li>
                                    <li>Dry Skin</li>
                                    <li>Normal Skin</li>
                                    <li>Oily Skin</li>
                                    <li>Sensitive Skin</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>More</p>
                                <ul class="hoverUl">
                                    <li>New Arrivals</li>
                                    <li>Bestsellers</li>
                                    <li>Sun Care</li>
                                    <li>Natural Skin Care</li>
                                    <li>Kits & Sets</li>
                                    <li>Travel Size</li>
                                    <li>Sale</li>
                                    <li>View All...</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Popular Brands</p>
                                <ul class="hoverUl">
                                    <li>Augustinus Bader</li>
                                    <li>Chantecaille</li>
                                    <li>SkinCeuticals</li>
                                    <li>EltaMD</li>
                                    <li>Skin Medica</li>
                                    <li>Obagi</li>
                                    <li>iS Clinical</li>
                                </ul>
                            </div>
                        </div>    
                    </li>
                    <li class="cat3">Bestsellers</li>
                    <li class="cat4" onmouseenter="showSpecificMenu('saleHidden')" onmouseleave="hideSpecificMenu('saleHidden')">Sale
    
    
    
    
                        <div id="saleHidden"  class="sale navHiddenData"  style="display: none;">
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>jane iredale Sale: 20% off</p>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Last Chance Sale</p>
                                <ul class="hoverUl">
                                    <li>Skin Care Sale</li>
                                    <li>Hair Care Sale</li>
                                    <li>Makeup Sale</li>
                                    <li>Bath & Body Sale</li>
                                    <li>Tools & Devices Sale</li>
                                    <li>Value Sets Sale</li>
                                    <li>SPF Sale</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop By % Off</p>
                                <ul class="hoverUl">
                                    <li>Save 10%</li>
                                    <li>Save 15%</li>
                                    <li>Save 20%</li>
                                    <li>Save 25%</li>
                                    <li>Save 30%</li>
                                    <li>Save 35%</li>
                                    <li>Save 40%</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Other Offers</p>
                                <ul class="hoverUl">
                                    <li>Save with Auto-Replenishment</li>
                                    <li>Refer a Friend, Get $15</li>
                                    <li>Best of Dermstore</li>
                                    <li>Value Sets</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="cat5" onmouseenter="showSpecificMenu('skinCareHidden')" onmouseleave="hideSpecificMenu('skinCareHidden')">Skin Care
    
    
                <!-- skinCare                        Hidden -->
                        <div id="skinCareHidden" class="skinCareHidden navHiddenData" style="display: none;">
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Cleansers & Exfoliators</p>
                                <ul class="hoverUl">
                                    <li>Cleansers</li>
                                    <li>Exfoliants, Peels & Scrubs</li>
                                    <li>Toners & Mist</li>
                                    <li>Face Wash</li>
                                    <li>Makeup Remover</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Treatments & Serums</p>
                                <ul class="hoverUl">
                                    <li>Face Serums</li>
                                    <li>Face Masks</li>
                                    <li>Neck Cream</li>
                                    <li>Wrinkle Cream</li>
                                    <li>Acne Treatment</li>
                                    <li>Dark Spot Corrector</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Moisturizers</p>
                                <ul class="hoverUl">
                                    <li>Face Moisturizer</li>
                                    <li>Face Oils</li>
                                    <li>Night Cream</li>
                                    <li>Tinted Moisturizer</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Eye Care</p>
                                <ul class="hoverUl">
                                    <li>Eye Cream & Moisturizers</li>
                                    <li>Eye Treatments & Serums</li>
                                    <li>Eye Masks</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Lip Care</p>
                                <ul >
                                    <li>Lip Balms & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Professional Tools & Devices</p>
                                <ul class="hoverUl">
                                    <li>Cleansing Devices</li>
                                    <li>Anti-Aging Tools & Devices</li>
                                    <li>Microdermabrasion</li>
                                    <li>Microneedling</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Build a Routine</p>
                                <ul class="hoverUl">
                                    <li>Combination Skin</li>
                                    <li>Dry Skin</li>
                                    <li>Normal Skin</li>
                                    <li>Oily Skin</li>
                                    <li>Sensitive Skin</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>More</p>
                                <ul class="hoverUl">
                                    <li>New Arrivals</li>
                                    <li>Bestsellers</li>
                                    <li>Sun Care</li>
                                    <li>Natural Skin Care</li>
                                    <li>Kits & Sets</li>
                                    <li>Travel Size</li>
                                    <li>Sale</li>
                                    <li>View All...</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Popular Brands</p>
                                <ul class="hoverUl">
                                    <li>Augustinus Bader</li>
                                    <li>Chantecaille</li>
                                    <li>SkinCeuticals</li>
                                    <li>EltaMD</li>
                                    <li>Skin Medica</li>
                                    <li>Obagi</li>
                                    <li>iS Clinical</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="cat6" onmouseenter="showSpecificMenu('hairCareHidden')" onmouseleave="hideSpecificMenu('hairCareHidden')">Hair Care
                        
                        <div id="hairCareHidden" class="hairCareHidden navHiddenData" class="brands" style="display: none;">
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Cleansers & Exfoliators</p>
                                <ul class="hoverUl">
                                    <li>Cleansers</li>
                                    <li>Exfoliants, Peels & Scrubs</li>
                                    <li>Toners & Mist</li>
                                    <li>Face Wash</li>
                                    <li>Makeup Remover</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Treatments & Serums</p>
                                <ul class="hoverUl">
                                    <li>Face Serums</li>
                                    <li>Face Masks</li>
                                    <li>Neck Cream</li>
                                    <li>Wrinkle Cream</li>
                                    <li>Acne Treatment</li>
                                    <li>Dark Spot Corrector</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Moisturizers</p>
                                <ul class="hoverUl">
                                    <li>Face Moisturizer</li>
                                    <li>Face Oils</li>
                                    <li>Night Cream</li>
                                    <li>Tinted Moisturizer</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Eye Care</p>
                                <ul class="hoverUl">
                                    <li>Eye Cream & Moisturizers</li>
                                    <li>Eye Treatments & Serums</li>
                                    <li>Eye Masks</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Lip Care</p>
                                <ul>
                                    <li>Lip Balms & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Professional Tools & Devices</p>
                                <ul class="hoverUl">
                                    <li>Cleansing Devices</li>
                                    <li>Anti-Aging Tools & Devices</li>
                                    <li>Microdermabrasion</li>
                                    <li>Microneedling</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Build a Routine</p>
                                <ul class="hoverUl">
                                    <li>Combination Skin</li>
                                    <li>Dry Skin</li>
                                    <li>Normal Skin</li>
                                    <li>Oily Skin</li>
                                    <li>Sensitive Skin</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>More</p>
                                <ul class="hoverUl">
                                    <li>New Arrivals</li>
                                    <li>Bestsellers</li>
                                    <li>Sun Care</li>
                                    <li>Natural Skin Care</li>
                                    <li>Kits & Sets</li>
                                    <li>Travel Size</li>
                                    <li>Sale</li>
                                    <li>View All...</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Popular Brands</p>
                                <ul class="hoverUl">
                                    <li>Augustinus Bader</li>
                                    <li>Chantecaille</li>
                                    <li>SkinCeuticals</li>
                                    <li>EltaMD</li>
                                    <li>Skin Medica</li>
                                    <li>Obagi</li>
                                    <li>iS Clinical</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="cat7" onmouseenter="showSpecificMenu('spfHidden')" onmouseleave="hideSpecificMenu('spfHidden')">SPF
                    
                        <div id="spfHidden" class="spfHidden navHiddenData" style="display: none;">
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Cleansers & Exfoliators</p>
                                <ul class="hoverUl">
                                    <li>Cleansers</li>
                                    <li>Exfoliants, Peels & Scrubs</li>
                                    <li>Toners & Mist</li>
                                    <li>Face Wash</li>
                                    <li>Makeup Remover</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Treatments & Serums</p>
                                <ul class="hoverUl">
                                    <li>Face Serums</li>
                                    <li>Face Masks</li>
                                    <li>Neck Cream</li>
                                    <li>Wrinkle Cream</li>
                                    <li>Acne Treatment</li>
                                    <li>Dark Spot Corrector</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Moisturizers</p>
                                <ul class="hoverUl">
                                    <li>Face Moisturizer</li>
                                    <li>Face Oils</li>
                                    <li>Night Cream</li>
                                    <li>Tinted Moisturizer</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Eye Care</p>
                                <ul class="hoverUl">
                                    <li>Eye Cream & Moisturizers</li>
                                    <li>Eye Treatments & Serums</li>
                                    <li>Eye Masks</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Lip Care</p>
                                <ul class="hoverUl">
                                    <li>Lip Balms & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Professional Tools & Devices</p>
                                <ul class="hoverUl">
                                    <li>Cleansing Devices</li>
                                    <li>Anti-Aging Tools & Devices</li>
                                    <li>Microdermabrasion</li>
                                    <li>Microneedling</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Build a Routine</p>
                                <ul class="hoverUl">
                                    <li>Combination Skin</li>
                                    <li>Dry Skin</li>
                                    <li>Normal Skin</li>
                                    <li>Oily Skin</li>
                                    <li>Sensitive Skin</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>More</p>
                                <ul class="hoverUl">
                                    <li>New Arrivals</li>
                                    <li>Bestsellers</li>
                                    <li>Sun Care</li>
                                    <li>Natural Skin Care</li>
                                    <li>Kits & Sets</li>
                                    <li>Travel Size</li>
                                    <li>Sale</li>
                                    <li>View All...</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Popular Brands</p>
                                <ul class="hoverUl">
                                    <li>Augustinus Bader</li>
                                    <li>Chantecaille</li>
                                    <li>SkinCeuticals</li>
                                    <li>EltaMD</li>
                                    <li>Skin Medica</li>
                                    <li>Obagi</li>
                                    <li>iS Clinical</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="cat8"  onmouseenter="showSpecificMenu('makeUpHidden')" onmouseleave="hideSpecificMenu('makeUpHidden')">Makeup
                    
    
                        <div id="makeUpHidden" class="makeUpHidden navHiddenData" style="display: none;">
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Cleansers & Exfoliators</p>
                                <ul class="hoverUl">
                                    <li>Cleansers</li>
                                    <li>Exfoliants, Peels & Scrubs</li>
                                    <li>Toners & Mist</li>
                                    <li>Face Wash</li>
                                    <li>Makeup Remover</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Treatments & Serums</p>
                                <ul class="hoverUl">
                                    <li>Face Serums</li>
                                    <li>Face Masks</li>
                                    <li>Neck Cream</li>
                                    <li>Wrinkle Cream</li>
                                    <li>Acne Treatment</li>
                                    <li>Dark Spot Corrector</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Moisturizers</p>
                                <ul class="hoverUl">
                                    <li>Face Moisturizer</li>
                                    <li>Face Oils</li>
                                    <li>Night Cream</li>
                                    <li>Tinted Moisturizer</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Eye Care</p>
                                <ul class="hoverUl">
                                    <li>Eye Cream & Moisturizers</li>
                                    <li>Eye Treatments & Serums</li>
                                    <li>Eye Masks</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Lip Care</p>
                                <ul>
                                    <li>Lip Balms & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Professional Tools & Devices</p>
                                <ul class="hoverUl">
                                    <li>Cleansing Devices</li>
                                    <li>Anti-Aging Tools & Devices</li>
                                    <li>Microdermabrasion</li>
                                    <li>Microneedling</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Build a Routine</p>
                                <ul class="hoverUl">
                                    <li>Combination Skin</li>
                                    <li>Dry Skin</li>
                                    <li>Normal Skin</li>
                                    <li>Oily Skin</li>
                                    <li>Sensitive Skin</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>More</p>
                                <ul class="hoverUl">
                                    <li>New Arrivals</li>
                                    <li>Bestsellers</li>
                                    <li>Sun Care</li>
                                    <li>Natural Skin Care</li>
                                    <li>Kits & Sets</li>
                                    <li>Travel Size</li>
                                    <li>Sale</li>
                                    <li>View All...</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Popular Brands</p>
                                <ul class="hoverUl">
                                    <li>Augustinus Bader</li>
                                    <li>Chantecaille</li>
                                    <li>SkinCeuticals</li>
                                    <li>EltaMD</li>
                                    <li>Skin Medica</li>
                                    <li>Obagi</li>
                                    <li>iS Clinical</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="cat9" onmouseenter="showSpecificMenu('toolsDevicesHidden')" onmouseleave="hideSpecificMenu('toolsDevicesHidden')">Tools & Devices
                    
                        <div id="toolsDevicesHidden" class="toolsDevicesHidden navHiddenData" style="display: none;">
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Cleansers & Exfoliators</p>
                                <ul class="hoverUl">
                                    <li>Cleansers</li>
                                    <li>Exfoliants, Peels & Scrubs</li>
                                    <li>Toners & Mist</li>
                                    <li>Face Wash</li>
                                    <li>Makeup Remover</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Treatments & Serums</p>
                                <ul class="hoverUl">
                                    <li>Face Serums</li>
                                    <li>Face Masks</li>
                                    <li>Neck Cream</li>
                                    <li>Wrinkle Cream</li>
                                    <li>Acne Treatment</li>
                                    <li>Dark Spot Corrector</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Moisturizers</p>
                                <ul class="hoverUl">
                                    <li>Face Moisturizer</li>
                                    <li>Face Oils</li>
                                    <li>Night Cream</li>
                                    <li>Tinted Moisturizer</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Eye Care</p>
                                <ul class="hoverUl">
                                    <li>Eye Cream & Moisturizers</li>
                                    <li>Eye Treatments & Serums</li>
                                    <li>Eye Masks</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Lip Care</p>
                                <ul>
                                    <li>Lip Balms & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Professional Tools & Devices</p>
                                <ul class="hoverUl">
                                    <li>Cleansing Devices</li>
                                    <li>Anti-Aging Tools & Devices</li>
                                    <li>Microdermabrasion</li>
                                    <li>Microneedling</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Build a Routine</p>
                                <ul class="hoverUl">
                                    <li>Combination Skin</li>
                                    <li>Dry Skin</li>
                                    <li>Normal Skin</li>
                                    <li>Oily Skin</li>
                                    <li>Sensitive Skin</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>More</p>
                                <ul class="hoverUl">
                                    <li>New Arrivals</li>
                                    <li>Bestsellers</li>
                                    <li>Sun Care</li>
                                    <li>Natural Skin Care</li>
                                    <li>Kits & Sets</li>
                                    <li>Travel Size</li>
                                    <li>Sale</li>
                                    <li>View All...</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Popular Brands</p>
                                <ul class="hoverUl">
                                    <li>Augustinus Bader</li>
                                    <li>Chantecaille</li>
                                    <li>SkinCeuticals</li>
                                    <li>EltaMD</li>
                                    <li>Skin Medica</li>
                                    <li>Obagi</li>
                                    <li>iS Clinical</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="cat10" onmouseenter="showSpecificMenu('bathBodyHidden')" onmouseleave="hideSpecificMenu('bathBodyHidden')">Bath & Body
                    
                        <div id="bathBodyHidden" class="bathBodyHidden navHiddenData" style="display: none;">
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Cleansers & Exfoliators</p>
                                <ul class="hoverUl">
                                    <li>Cleansers</li>
                                    <li>Exfoliants, Peels & Scrubs</li>
                                    <li>Toners & Mist</li>
                                    <li>Face Wash</li>
                                    <li>Makeup Remover</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Treatments & Serums</p>
                                <ul class="hoverUl">
                                    <li>Face Serums</li>
                                    <li>Face Masks</li>
                                    <li>Neck Cream</li>
                                    <li>Wrinkle Cream</li>
                                    <li>Acne Treatment</li>
                                    <li>Dark Spot Corrector</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Moisturizers</p>
                                <ul class="hoverUl">
                                    <li>Face Moisturizer</li>
                                    <li>Face Oils</li>
                                    <li>Night Cream</li>
                                    <li>Tinted Moisturizer</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Eye Care</p>
                                <ul class="hoverUl">
                                    <li>Eye Cream & Moisturizers</li>
                                    <li>Eye Treatments & Serums</li>
                                    <li>Eye Masks</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Lip Care</p>
                                <ul>
                                    <li>Lip Balms & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Professional Tools & Devices</p>
                                <ul class="hoverUl">
                                    <li>Cleansing Devices</li>
                                    <li>Anti-Aging Tools & Devices</li>
                                    <li>Microdermabrasion</li>
                                    <li>Microneedling</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Build a Routine</p>
                                <ul class="hoverUl">
                                    <li>Combination Skin</li>
                                    <li>Dry Skin</li>
                                    <li>Normal Skin</li>
                                    <li>Oily Skin</li>
                                    <li>Sensitive Skin</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>More</p>
                                <ul class="hoverUl">
                                    <li>New Arrivals</li>
                                    <li>Bestsellers</li>
                                    <li>Sun Care</li>
                                    <li>Natural Skin Care</li>
                                    <li>Kits & Sets</li>
                                    <li>Travel Size</li>
                                    <li>Sale</li>
                                    <li>View All...</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Popular Brands</p>
                                <ul class="hoverUl">
                                    <li>Augustinus Bader</li>
                                    <li>Chantecaille</li>
                                    <li>SkinCeuticals</li>
                                    <li>EltaMD</li>
                                    <li>Skin Medica</li>
                                    <li>Obagi</li>
                                    <li>iS Clinical</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="cat11" onmouseenter="showSpecificMenu('fragranceHidden')" onmouseleave="hideSpecificMenu('fragranceHidden')">Fragrance
                    
                        <div id="fragranceHidden" class="fragranceHidden navHiddenData" style="display: none;">
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Cleansers & Exfoliators</p>
                                <ul class="hoverUl">
                                    <li>Cleansers</li>
                                    <li>Exfoliants, Peels & Scrubs</li>
                                    <li>Toners & Mist</li>
                                    <li>Face Wash</li>
                                    <li>Makeup Remover</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Treatments & Serums</p>
                                <ul class="hoverUl">
                                    <li>Face Serums</li>
                                    <li>Face Masks</li>
                                    <li>Neck Cream</li>
                                    <li>Wrinkle Cream</li>
                                    <li>Acne Treatment</li>
                                    <li>Dark Spot Corrector</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Moisturizers</p>
                                <ul class="hoverUl">
                                    <li>Face Moisturizer</li>
                                    <li>Face Oils</li>
                                    <li>Night Cream</li>
                                    <li>Tinted Moisturizer</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Eye Care</p>
                                <ul class="hoverUl">
                                    <li>Eye Cream & Moisturizers</li>
                                    <li>Eye Treatments & Serums</li>
                                    <li>Eye Masks</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Lip Care</p>
                                <ul>
                                    <li>Lip Balms & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Professional Tools & Devices</p>
                                <ul class="hoverUl">
                                    <li>Cleansing Devices</li>
                                    <li>Anti-Aging Tools & Devices</li>
                                    <li>Microdermabrasion</li>
                                    <li>Microneedling</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Build a Routine</p>
                                <ul class="hoverUl">
                                    <li>Combination Skin</li>
                                    <li>Dry Skin</li>
                                    <li>Normal Skin</li>
                                    <li>Oily Skin</li>
                                    <li>Sensitive Skin</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>More</p>
                                <ul class="hoverUl">
                                    <li>New Arrivals</li>
                                    <li>Bestsellers</li>
                                    <li>Sun Care</li>
                                    <li>Natural Skin Care</li>
                                    <li>Kits & Sets</li>
                                    <li>Travel Size</li>
                                    <li>Sale</li>
                                    <li>View All...</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Popular Brands</p>
                                <ul class="hoverUl">
                                    <li>Augustinus Bader</li>
                                    <li>Chantecaille</li>
                                    <li>SkinCeuticals</li>
                                    <li>EltaMD</li>
                                    <li>Skin Medica</li>
                                    <li>Obagi</li>
                                    <li>iS Clinical</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="cat12" onmouseenter="showSpecificMenu('beautyFIXHidden')" onmouseleave="hideSpecificMenu('beautyFIXHidden')">BeautyFIX
                    
                        <div id="beautyFIXHidden"  class="beautyFIX navHiddenData" style="display: none;">
                            <a href="">BeautyFIX Sale</a>
                            <a href="">Best of Dermstore</a>
                        </div>
                    </li>
                    <li class="cat13" onmouseenter="showSpecificMenu('skin101Hidden')" onmouseleave="hideSpecificMenu('skin101Hidden')">Skin 101
                    
                    
                        <div id="skin101Hidden" class="skin101Hidden navHiddenData" style="display: none;">
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Cleansers & Exfoliators</p>
                                <ul class="hoverUl">
                                    <li>Cleansers</li>
                                    <li>Exfoliants, Peels & Scrubs</li>
                                    <li>Toners & Mist</li>
                                    <li>Face Wash</li>
                                    <li>Makeup Remover</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Treatments & Serums</p>
                                <ul class="hoverUl">
                                    <li>Face Serums</li>
                                    <li>Face Masks</li>
                                    <li>Neck Cream</li>
                                    <li>Wrinkle Cream</li>
                                    <li>Acne Treatment</li>
                                    <li>Dark Spot Corrector</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Moisturizers</p>
                                <ul class="hoverUl">
                                    <li>Face Moisturizer</li>
                                    <li>Face Oils</li>
                                    <li>Night Cream</li>
                                    <li>Tinted Moisturizer</li>
                                    <li>Essences</li>
                                    <li>Men's Moisturizers & Treatments</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Eye Care</p>
                                <ul class="hoverUl">
                                    <li>Eye Cream & Moisturizers</li>
                                    <li>Eye Treatments & Serums</li>
                                    <li>Eye Masks</li>
                                </ul>
                            </div>
                            <div class="hoverData">
                                <div class="fullLine"></div>
                                <p>Shop Lip Care</p>
                                <ul>
                                    <li>Lip Balms & Treatments</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>



        <div class="responsiveHeader" style="position: relative; ">
        <div class="innerSearchBar">
        <input type="text" name="" id="searchInputRes">
        <a href="" id="searchEnterRes"><i class="bi bi-search"></i></a>
        </div>
        <div class="headerTopLeft">
            <button class="sideBar"><i class="bi bi-list"></i></button>
            <button class="searchBarLeft">
            <i class="bi bi-search" id="resOpenSearch" onclick="showInnerSearch('resOpenSearch')"></i>
            <i class="bi bi-x-lg" id="resCloseSearch" onclick="showInnerSearch('resCloseSearch')" style="display: none;"></i>
            </button>
            <div class="resMenu">
                <div class="resMenuContent">
                    <div class="hiddenMenuHead">
                        <button class="homePageRes">
                            <i class="bi bi-house-door-fill" id="homeIcon"></i>
                        </button>
                        <button class="hiddenMenuClose"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <ul class="resMenuDetails">

                        <!--            Skin Care                  -->
                        <li class="items">
                            <div class="submenu-item">
                                <a class="itemData"> 
                                    <p>Skin Care</p>
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                            </div>
                            <ul class="resSubMenu">
                                <div class="submenuCloseBack">
                                    <div class="backIcon" style="gap:4%;">
                                        <i class="bi bi-chevron-left"></i>
                                        <p>Back</p>
                                    </div>
                                    <button class="hiddenMenuClose"><i class="bi bi-x-lg"></i></button>
                                </div>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Skin Care | Home</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop Cleansers & Exfoliators</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop Treatments & Serums</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop Moisturizers</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop Eye Care</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop Lip Care</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop Professional Tools & Devices</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Build a Routine</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Popular Brands</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="items">
                            <a href="">Brands</a>
                        </li>

                        <li class="items">
                            <a href="">Bestsellers</a>
                        </li>

                        <li class="items">
                            <a class="itemData"> 
                                <p>Browse By</p>
                            </a>
                        </li>
                        <!--            SALE               -->
                        <li class="items">
                            <div class="submenu-item">
                                <a class="itemData"> 
                                    <p>Sale</p>
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                            </div>
                            <ul class="resSubMenu">
                                <div class="submenuCloseBack">
                                    <div class="backIcon" style="gap:4%;">
                                        <i class="bi bi-chevron-left"></i>
                                        <p>Back</p>
                                    </div>
                                    <button class="hiddenMenuClose"><i class="bi bi-x-lg"></i></button>
                                </div>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>jane iredale Sale: 20% off</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Last Chance Sale</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop By % Off</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Other Offers</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <!--            beautyFIX                  -->
                        <li class="items">
                            <div class="submenu-item">
                                <a class="itemData"> 
                                    <p>BeautyFIX</p>
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                            </div>
                            <ul class="resSubMenu">
                                <div class="submenuCloseBack">
                                    <div class="backIcon" style="gap:4%;">
                                        <i class="bi bi-chevron-left"></i>
                                        <p>Back</p>
                                    </div>
                                    <button class="hiddenMenuClose"><i class="bi bi-x-lg"></i></button>
                                </div>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>BeautyFIX | Home</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>BeautyFIX Sale</p>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Best Of DermStore</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="items">
                            <div class="submenu-item">
                                <a class="itemData"> 
                                    <p>Hair Care</p>
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                            </div>
                            <ul class="resSubMenu">
                                <div class="submenuCloseBack">
                                    <div class="backIcon" style="gap:4%;">
                                        <i class="bi bi-chevron-left"></i>
                                        <p>Back</p>
                                    </div>
                                    <button class="hiddenMenuClose"><i class="bi bi-x-lg"></i></button>
                                </div>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Hair Care | Home</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Category</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Hair Type</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Hair Tools</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>More</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Popular Brands</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="items">
                            <div class="submenu-item">
                                <a class="itemData"> 
                                    <p>Makeup</p>
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                            </div>
                            <ul class="resSubMenu">
                                <div class="submenuCloseBack">
                                    <div class="backIcon" style="gap:4%;">
                                        <i class="bi bi-chevron-left"></i>
                                        <p>Back</p>
                                    </div>
                                    <button class="hiddenMenuClose"><i class="bi bi-x-lg"></i></button>
                                </div>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Makeup | Home</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Face</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Lips</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Eyes</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>More</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Popular Brands</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="items">
                            <div class="submenu-item">
                                <a class="itemData"> 
                                    <p>Tools & Devices</p>
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                            </div>
                            <ul class="resSubMenu">
                                <div class="submenuCloseBack">
                                    <div class="backIcon" style="gap:4%;">
                                        <i class="bi bi-chevron-left"></i>
                                        <p>Back</p>
                                    </div>
                                    <button class="hiddenMenuClose"><i class="bi bi-x-lg"></i></button>
                                </div>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Tools & Devices | Home</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Category</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Popular Brands</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="items">
                            <div class="submenu-item">
                                <a class="itemData"> 
                                    <p>SPF</p>
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                            </div>
                            <ul class="resSubMenu">
                                <div class="submenuCloseBack">
                                    <div class="backIcon" style="gap:4%;">
                                        <i class="bi bi-chevron-left"></i>
                                        <p>Back</p>
                                    </div>
                                    <button class="hiddenMenuClose"><i class="bi bi-x-lg"></i></button>
                                </div>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>SPF | Home</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Type</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Category</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Protection</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Skin Type</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Brand</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="items">
                            <div class="submenu-item">
                                <a class="itemData"> 
                                    <p>Bath & Body</p>
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                            </div>
                            <ul class="resSubMenu">
                                <div class="submenuCloseBack">
                                    <div class="backIcon" style="gap:4%;">
                                        <i class="bi bi-chevron-left"></i>
                                        <p>Back</p>
                                    </div>
                                    <button class="hiddenMenuClose"><i class="bi bi-x-lg"></i></button>
                                </div>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Bath & Body | Home</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Category</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Concern</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Personal Care</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>More</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Popular Brands</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="items">
                            <div class="submenu-item">
                                <a class="itemData"> 
                                    <p>Fragrance</p>
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                            </div>
                            <ul class="resSubMenu">
                                <div class="submenuCloseBack">
                                    <div class="backIcon" style="gap:4%;">
                                        <i class="bi bi-chevron-left"></i>
                                        <p>Back</p>
                                    </div>
                                    <button class="hiddenMenuClose"><i class="bi bi-x-lg"></i></button>
                                </div>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Fragrance | Home</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Shop by Category</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Fragrance Family</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                                <li class="items">
                                    <a class="itemData"> 
                                        <p>Popular Brands</p>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="items">
                            <a class="itemData"> 
                                <p>Skin 101</p>
                                <i class="bi bi-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <a href="index.html" class="hiddenLogoDiv">
            <img class="hiddenLogo" src="https://worldbranddesign.com/wp-content/uploads/2020/05/2Dermstore-world-brand-design.jpg" alt="">
        </a>
        <div class="headerTopRight">
            <div class="account">
                <i class="bi bi-person"></i>
                <div class="accountHidden">
                    <div class="firstHidden">
                        <a href="" class="login">LOGIN</a>
                        <a href="/register.html" class="register">REGISTER</a>
                    </div>
                    <div class="loggedHidden" style="display:none;flex-direction:row; justify-content:space-between">
                        <p style="color:black;">Hello <span class="usernameVal">Name</span><p>
                        <a href="login.html" style="color:black">LOG OUT</a>
                    </div>
                    <div class="secondHidden">
                        <a href="favourites.html" class="myFav">My Favorites</a>
                        <a href="">Your Orders</a>
                        <a href="">Your Auto Auto-Replenishments</a>
                        <a href="">Your Referrals</a>
                    </div>
                </div>
            </div>
            <div class="cart" onmouseout="hidecartPopup()" style="position: relative;">
                <div class="cartIcon">
                    <i class="bi bi-bag"></i>
                    <span id="noInCart" onchange="popUpBasketData()" style="position: absolute; top:5%;left:70%;border-radius:50%;color:white;background-color: black; padding: 5% 13%; font-size: 80%;">0</span>
                </div>
                <div class="popUpCart" style="display:none;position:absolute;top:90%;left:-306%;margin-right:0%; width:300px;  background-color:white">
                <div class="" style="display:flex; flex-direction:row;justify-content:space-between;padding:5% 2% 0% 2%">
                    <p><span class="noOfCart">1</span> item(s) in your cart.</p>
                    <p class="totalAmountOfCart">$1123</p>
                </div>
                <div class="loyaltyPoints" style="display:flex;padding:1% 2%">
                <svg class="loyaltyPointsMessage_starIcon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                    <path class="loyaltyPointsMessage_starIconFill" fill-rule="evenodd" fill="#333" d="M842 717c.376 3.574 1.577 6.374 3.604 8.4 2.027 2.027 4.825 3.227 8.396 3.6-3.522.302-6.32 1.495-8.396 3.58-2.075 2.084-3.258 4.89-3.55 8.42-.506-3.762-1.688-6.569-3.548-8.42-1.86-1.852-4.695-3.045-8.506-3.58 3.712-.441 6.547-1.64 8.506-3.6 1.958-1.958 3.123-4.758 3.494-8.4z" transform="translate(-830 -717)"></path>
                </svg>
                <p style="padding:2% 4% 4% 4% ; font-weight:bold">Earn 1500 reward points when purchasing this product as a rewards member*</p>
                </div>
                <a href="cart.html" style="background-color:black;color:white;text-decoration:none;width:100%;padding:2% 5%;margin-left:2%;">VIEW CART</a>
                <div class="basketData" style="overflow-y: scroll;height:65vh;margin-top:25px;"></div>
                </div>
            </div>    
        </div>
    </div>
        `)
}
Header()

// let respHeader=()=>{

// }



let firstHidden=document.querySelector(".firstHidden")
let loggedHidden=document.querySelector(".loggedHidden")
let usernameVal=document.querySelector(".usernameVal")
// if(loginStatus==true){
//     let userData=localStorage.getItem(`${checkUser}`)
//     firstHidden.style.display="none"
//     usernameVal.innerHTML=checkUser.usernameVal
//     loggedHidden.style.display="flex"
// }
// else{
//     firstHidden.style.display="flex"
//     loggedHidden.style.display="none"
// }

let logo=document.querySelector(".logo")
if(logo){
    logo.onclick=()=>{window.location.href='index.html'}
}

let cart=document.querySelector(".cart")
let cartIcon=document.querySelector(".cartIcon")
cartIcon.onclick=()=>{
    window.location.href=`cart.html`
}
let popUpCart=document.querySelector(".popUpCart") 
// let images=document.getElementsByTagName("img") 
hidecartPopup=()=>{
    popUpCart.style.display="none";
    body.style.backgroundColor="white";
    header.style.backgroundColor="white"
    input.style.backgroundColor="white"
    cart.style.backgroundColor="white"
    account.style.backgroundColor="white"
}
cart.onmouseover=()=>{
    cart.style.cursor="pointer"
    popUpCart.style.display="block"
    body.style.backgroundColor="gray";
    header.style.backgroundColor="gray"
    input.style.backgroundColor="gray"
    cart.style.backgroundColor="white"
    account.style.backgroundColor="gray"
    // images.style.filter="grayscale(100%)";
}

let searchInput=document.getElementById("searchInput")
// if(searchEnter){
let searchEnter=document.getElementById('searchEnter') 
searchEnter.addEventListener("click",
        function searchEnterFunc(e){
            console.log("ndind")
        e.preventDefault()
        let findingSearch=totalProducts.find((x)=>{
        if(x.title==searchInput.value){
            window.location.href=`random.html?${x.id}`
        }})
        }
)
let searchEnterRes=document.getElementById("searchEnterRes")
searchEnterRes.addEventListener("click",
// searchEnterRes.onclick=
(e)=>{
    e.preventDefault()
    let findingSearch=totalProducts.find((x)=>{
        if(x.title==searchEnterRes.value){
            window.location.href=`random.html?${x.id}`
        }})
}
)
// }
// searchInput.addEventListener("keypress",)
let searchInputRes=document.getElementById("searchInputRes")
if(searchInputRes){
    searchInputRes.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
        //   console.log('Enter key pressed!');
          let findingSearch=totalProducts.find((x)=>{
            if(x.title==searchInputRes.value){
                window.location.href=`random.html?${x.id}`
            }})
        }
      }); 
}

if(searchInput){
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    //   console.log('Enter key pressed!');
      let findingSearch=totalProducts.find((x)=>{
        if(x.title==searchInput.value){
            window.location.href=`random.html?${x.id}`
        }})
    }
  });
}
function showSpecificMenu(hiddenCategoryId){
    let hiddenCategory=document.getElementById(hiddenCategoryId)
    hiddenCategory.style.display="grid"
    hiddenCategory.style.width="90%"
    hiddenCategory.style.margin="0 5%"

    }
    function hideSpecificMenu(hiddenCategoryId){
    let hiddenCategory=document.getElementById(hiddenCategoryId)
    // console.log(hiddenCategory)
    hiddenCategory.style.display="none"
    }


let numb=document.querySelector(".numb")
function showAtoZ(charValue){
    // let character=document.querySelectorAll(".character")
    let alpha=document.getElementById(charValue)
    document.querySelectorAll(".character").forEach(val=>{
        if(alpha.innerHTML.toLowerCase()===val.innerHTML.split("")[0].toLowerCase())
        {  
            val.style.display="block"
        }
       else if(alpha.innerHTML==="0-9"){
        val.style.display="none"
        numb.style.display="block"
       }
       else{
            val.style.display="none"
        }
    })
}
let hiddenAccount = document.querySelector(".accountHidden")
let account=document.querySelector(".account")
let header=document.querySelector(".header")
let input=document.querySelector("input")
if(account){
    account.addEventListener("mouseover",()=>{
        // hiddenAccount.style.display = "inline";
        hiddenAccount.style.border="none"
        account.style.backgroundColor="white"
        body.style.backgroundColor="gray";
        header.style.backgroundColor="gray"
        input.style.backgroundColor="gray"
        cart.style.backgroundColor="gray";
    })
    account.addEventListener("mouseout",()=>{
        // hiddenAccount.style.display = "none";
        body.style.backgroundColor="white";
        header.style.backgroundColor="white"
        input.style.backgroundColor="white"
        cart.style.backgroundColor="white"
    })
}


let totalAmountOfCart=document.querySelector(".totalAmountOfCart")
let basketData=document.querySelector(".basketData")
let popUpBasketData=()=>{
    totalAmountOfCart.innerHTML="$ "+basket.map((x)=>parseInt(x.price.split("$")[1])).reduce((x,y)=>x+y,0)
    return (
        basketData.innerHTML=
        basket.map((x)=>{
        let {id,quantity,price,pack}=x;
        let search=totalProducts.find((y)=>y.id===id)
        let {image,title}=search;
        return`
        <ul id="popUpItems${id}" style="width:100% ;list-style-type:none;display:flex; gap:5%; margin-top:10%;"onclick="openPr(${id})">
        <li style="width:35%;"><img style="width:100%" src="${image}" alt=""></li>
        <li style="width:70%;padding-right:10%;display:flex; flex-direction:column; gap:10px">
            <p class="titleItem">${title} ${pack}</p>
            <p class="priceItem">${price}</p>
            <p>Quantity: <span class="quantityItem">${quantity}</span></p>
        </li>
        </ul>
        `
    })
    .join(""))
}
popUpBasketData()
let openPr=(id)=>{
    totalProducts.find((x)=>{
        if(x.id==id){
            window.location.href=`random.html?${x.id}`
        }
    })
}

let calculation=()=>{
    let cartAmount=document.getElementById("noInCart");
    let noOfCart=document.querySelector(".noOfCart");
    cartAmount.innerHTML=basket.map((x)=>x.quantity).reduce((x,y)=>x+y,0)
    noOfCart.innerHTML=basket.map((x)=>x.quantity).reduce((x,y)=>x+y,0)
}
calculation()


let homeIcon=document.getElementById('homeIcon')
let backIcon=document.getElementById('backIcon')
let hiddenMenuResponsive=document.querySelector(".hiddenMenuResponsive")
let skinCareHeadRes=document.querySelector("#skinCareHeadRes")
let homePageRes=document.querySelector(".homePageRes")
let originalHiddenMenuData=document.querySelector(".originalHiddenMenuData")
let showRes=(menuValueId)=>{
    // skinCareHeadRes.style.display="flex"
    let menuValue=document.getElementById(menuValueId)
    hiddenMenuResponsive.innerHTML=menuValue.innerHTML
    backIcon.style.display="flex"
    homeIcon.style.display="none"
    // homePageRes.innerHTML=`
    // <div style="display: flex;gap:2%;" onclick="backHome()">
    //                     <i class="bi bi-chevron-left"></i>
    //                     <p>Back</p>
    //                 </div>`
    // console.log(menuValue)
    // let childs=menuValue.childNodes
    // let childDivs=Array.from(childs).filter(child=>child.tagName==="DIV");
    // for(i=0;i<childDivs.length;i++){
    //     childDivs[i].style.display="flex"
    //     childDivs[i].style.flexDirection="column"
    //     console.log(childDivs[i])
    // }
    // childs.style.display="flex"
    // childs.style.flexDirection="column"
}
function goIndex(){
    window.location.href='index.html'
}
// function backHome(){
//     homeIcon.style.display="flex"
//     backIcon.style.display="none"
//     hiddenMenuResponsive.innerHTML=originalHiddenMenuData.innerHTML
    // let menuchilds=hiddenMenuResponsive.childNodes
    // menuchilds.style.display="flex"
    // menuchilds.style.justifyContent="space-between"
// }

let menuItems=document.querySelectorAll(".submenu-item");
let menu=document.querySelector(".resMenuContent");
let backIconAll=document.querySelectorAll(".resSubMenu .submenuCloseBack .backIcon");
// console.log(backIconAll)
// console.log(menuItems)
menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        // console.log(item)
        item.classList.add("show-submenu");
        menu.classList.add("submenu-active")
        menuItems.forEach((item2,index2)=>{
            if(index!==index2){
                item2.classList.remove("show-submenu")
            }
        })
    })
})
backIconAll.forEach((title)=>{
    title.addEventListener("click",()=>{

        // console.log(menu.classList,title)
        menu.classList.remove("submenu-active");
    })
})
let resMenu=document.querySelector(".resMenu")
let hiddenMenuClose=document.querySelectorAll(".hiddenMenuClose")
hiddenMenuClose.forEach((closeBtn)=>{
    closeBtn.addEventListener("click",()=>{
            resMenu.style.display="none"
        })
    })
let sideBar=document.querySelector(".sideBar")
sideBar.addEventListener("click",()=>resMenu.style.display="flex")


let innerSearchBar=document.querySelector(".innerSearchBar")
let resOpenSearch=document.getElementById("resOpenSearch")
let resCloseSearch=document.getElementById("resCloseSearch")
let showInnerSearch=(showHideInnerId)=>{
    let showHideInner=document.getElementById(showHideInnerId)
    // showHideInner.style.display="none"
    if(showHideInner==resOpenSearch)
    {
        resOpenSearch.style.display="none"
        resCloseSearch.style.display="block"
        innerSearchBar.style.display="flex"
        heading.style.backgroundColor="gray"
    }
    else{
        resOpenSearch.style.display="block"
        innerSearchBar.style.display="none"
        resCloseSearch.style.display="none"
        heading.style.backgroundColor="none"
    }
}
innerSearchBar.addEventListener('blur',()=>{
    resOpenSearch.style.display="block"
    innerSearchBar.style.display="none"
    resCloseSearch.style.display="none"
})