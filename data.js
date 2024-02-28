//bestSellers
let totalProducts=[
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
        title:"Augustinus Bader The Rich Cream",
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
    },
//new arrivals
    {
        id:"18",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14926198-6445106107993934.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14926198-1545107163804787.jpg",
        title:"Dermalogica Pro-Collagen Banking Serum 30ml",
        buttonTitle:"$22 Gift",
        reviews:"149 Reviews",
        price:"$89.00"
    },
    {
        id:"19",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14966116-1025116727595231.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14966116-1395116727623467.jpg",
        title:"Paula's Choice 25% Vitamin C+ Glutathione Clinical Serum 1 fl. oz",
        buttonTitle:"$82 Paula's Choice Gift",
        price:"$62.00"
    },
    {
        id:"20",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14979695-2045098054130844.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14979695-6255098054187901.jpg",
        title:"Glo Skin Beauty Illuminating Makeup Primer with Vitamin C for All Skin Types 1 fl. oz",
        buttonTitle:"$85 Glo Skin Beauty Gift",
        price:"$42.00"
    },
    {
        id:"21",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15051402-8315108952314196.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15051402-1565108952327312.jpg",
        title:"Therabody Theragun Relief",
        buttonTitle:"New Arrival",
        price:"$149.00"
    },
    {
        id:"22",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15072700-1425113078340841.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15072700-1775113078371972.jpg",
        title:"Dr Dennis Gross Skincare Advanced Retinol and Ferulic Perfectly Dosed Retinol - Extra Strength 0.5% Pure Retinol 2.2ml",
        buttonTitle:"Dr Dennis Gross Gift",
        price:"$42.00"
    },
    {
        id:"23",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/15056485-2145118009629571.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15056485-1015109714415773.jpg",
        title:"Murad Cellular Hydration Barrier Repair Cream 1.7 oz",
        buttonTitle:"Murad Gift",
        price:"$69.00"
    },
    {
        id:"24",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15063312-2105107367176548.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15063312-1745107367222907.jpg",
        title:"VIRTUE Limited Edition Recovery Bundle with Towel (Worth $121)",
        buttonTitle:"$16 VIRTUE Gift",
        price:"$97.00"
    },
    {
        id:"25",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/14919781-3455083794880800.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14919781-1485085373060389.jpg",
        title:"SkinCeuticals A.G.E. Advanced Eye (0.5 fl. oz.)",
        buttonTitle:"SkinCeuticals Gift",
        reviews:"900 Reviews",
        price:"$116.00"
    },
    {
        id:"26",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/15008231-3185105591987589.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15008231-1335105592059664.jpg",
        title:"Tarte Glamazon To-Go Palette",
        buttonTitle:"New Arrival",
        price:"$29.00"
    },
    {
        id:"27",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/14269883-4715106107248728.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14269883-2025106107287791.jpg",
        title:"Avène Hyaluron Activ B3 Cellular Renewal Cream 50ml",
        buttonTitle:"$17 Gift",
        price:"$40.00"
    },
    {
        id:"28",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/15072701-1175113078432299.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15072701-1575113078459896.jpg",
        title:"Dr Dennis Gross Skincare Advanced Retinol and Ferulic Perfectly Dosed Retinol - Universal 0.2% Pure Retinol 2.2ml",
        buttonTitle:"Dr Dennis Gross Gift",
        price:"$42.00"
    },
    {
        id:"29",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14902556-9415107191359379.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14902556-2135107191435675.jpg",
        title:"Lancer Skincare Eyes Wide Open Hydrogel Eye Patches",
        buttonTitle:"$15 Gift",
        price:"$50.00"
    },
    {
        id:"30",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14872109-1185094434063358.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14872109-1355094434119746.jpg",
        title:"Furtuna Skin Cielo Puro Cleansing Oil Balm 80g",
        buttonTitle:"$125 Furtuna Skin Gift",
        price:"$85.00"
    },
    {
        id:"31",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/14966060-1995092358886732.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14966060-1875092358924079.jpg",
        title:"Colorescience Barrier Pro Essential Moisturiser 50ml",
        buttonTitle:"New Arrival",
        price:"$46.00"
    },
    {
        id:"32",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14966061-1665092359370794.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14966061-6895092359412053.jpg",
        title:"Colorescience Barrier Pro 1-Step Cleanser 150ml",
        buttonTitle:"New Arrival",
        price:"$78.00"
    },
    {
        id:"33",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15008232-1605105592577575.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15008232-3235105592652392.jpg",
        title:"Tarte Glamazon Ac Eyeshadow Palette",
        buttonTitle:"New Arrival",
        price:"$47.00"
    },
    {
        id:"34",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/14494634-2775095019018571.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14494634-7695095019044545.jpg",
        title:"Symbiome The Answer Serum (30ml)",
        buttonTitle:"$35 Symbiome Gift",
        price:"$200.00"
    },
    {
        id:"35",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14885835-3675097819523533.jpg",
        title:"Best of Dermstore: The Fragrance Kit - $169 Value",
        buttonTitle:"Save 50% + Extra 10% with code: EXTRA10",
        price:"$37.50"
    },


    ///
    {
        id:"36",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14219177-1695019790206864.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14219177-6695109474337095.jpg",
        title:"SkinCeuticals Anti-Aging Firming Set with C E Ferulic Vitamin C and Hyaluronic Acid",
        buttonTitle:"Limited Edition Bundle",
        price:"$371.36"
    },
    {
        id:"37",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13434840-1035072710741704.jpg",
        title:"EltaMD Exclusive UV Clear Tinted and Untinted Duo ($84 Value)",
        buttonTitle:"$18 Gift",
        reviews:"5094 Reviews",
        price:"$75.00"
    },
    {
        id:"38",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14921036-5115082525950205.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14921036-9085082526014162.jpg",
        title:"Obagi Medical ELASTIderm Duo (Worth $340.00)",
        buttonTitle:"Save 25% + Extra 10% with code: EXTRA10",
        price:"$191.25"
    },
    {
        id:"39",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14922815-9725090795352705.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14922815-5405090795414586.jpg",
        title:"Dr Dennis Gross Skincare The EyeCare Max Pro LED Device Set (Worth $235.00)",
        buttonTitle:"Save 25% + Extra 10% with code: EXTRA10",
        price:"$149.25"
    },
    {
        id:"40",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/11862147-8974870996156014.jpg",
        title:"SkinMedica Lumivive System (2 piece)",
        buttonTitle:"$30 Gift",
        reviews:"35 Reviews",
        price:"$268.00"
    },
    {
        id:"41",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/13938587-1455002659983370.jpg",
        title:"Oribe Gold Lust Repair and Restore Shampoo and Conditioner Bundle",
        reviews:"235 Reviews",
        price:"$101.00"
    },
    {
        id:"42",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14921058-6375085599238873.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14921058-2035085599325150.jpg",
        title:"Eminence Organic Skin Care Rosehip Oil and Gua Sha Gift Set",
        price:"$118.00"
    },
    {
        id:"43",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14887861-1095072390627331.jpg",
        title:"EltaMD UV Daily Tinted Duo ($76 Value)",
        buttonTitle:"$18 Gift",
        price:"$68.00"
    },
    {
        id:"44",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14887865-1265107647501708.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14887865-4965107647532551.jpg",
        title:"EltaMD AM &amp; PM Therapy Duo ($82 Value)",
        buttonTitle:"18 Gift",
        price:"$73.00"
    },
    {
        id:"45",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/13997570-1565002183976127.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13997570-1605002184048382.jpg",
        title:"Obagi Medical Nu-Derm® Brightening Duo (Worth $209.00)",
        reviews:"70 Reviews",
        price:"$167.00"
    },
    {
        id:"46",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/12782416-9825116771880073.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/12782416-3755116771933422.jpg",
        title:"SkinCeuticals Anti-Aging Regimen with Triple Lipid Restore 2:4:2 and Hyaluronic Acid",
        buttonTitle:"Limited Edition Bundle",
        reviews:"23 Reviews",
        price:"$228.80"
    },
    {
        id:"47",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14221563-1415084287893660.jpg",
        title:"Best of Dermstore: The Anti-Aging Kit - $504 Value",
        buttonTitle:"Save 35% + Extra 10% with code: EXTRA10",
        reviews:"5 Reviews",
        price:"$97.50"
    },
    {
        id:"48",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13435467-1344942266527121.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13435467-2124942264442529.jpg",
        title:"iS Clinical Active Peel Treatment System (30 Days)",
        reviews:"14 Reviews",
        price:"$98.00"
    },
    {
        id:"49",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14870183-5415089525191315.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14870183-8115084079922167.jpg",
        title:"The Pro-Collagen Perfect Duo (Worth $307)",
        buttonTitle:"Save 20% + Extra 10% with code: EXTRA10",
        price:"$168.00"
    },
    {
        id:"50",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14966061-1665092359370794.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13513896-1714922576908107.jpg",
        title:"Briogeo Don’t Despair, Repair!™ Strength + Repair Solutions Set (Worth $107.00)",
        reviews:"1 Review",
        price:"$79.00"
    },
    {
        id:"51",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/14221564-1125076846921585.jpg",
        title:"Best of Dermstore: The Essentials Kit - $350 Value",
        buttonTitle:"Save 35% + Extra 10% with code: EXTRA10",
        reviews:"1 Review",
        price:"$65.00"
    },
    {
        id:"52",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/11582506-6064978637869764.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/11582506-8595109251798655.jpg",
        title:"SkinCeuticals Anti-Aging Refine and Plump Regimen with Vitamin C and Hyaluronic Acid",
        buttonTitle:"SkinCeuticals Gift",
        reviews:"5328 Reviews",
        price:"$292.00"
    },
    {
        id:"53",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13883317-8014988987514489.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13883317-1054988987594853.jpg",
        title:"Olaplex Ultimate Essentials Kit (Worth $33.00)",
        buttonTitle:"Save 25% + Extra 10% with code: EXTRA10",
        reviews:"8 Reviews",
        price:"$21.00"
    },


    ///
    {
        id:"54",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/15063313-7995107367332152.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15063313-2045107367391651.jpg",
        title:"VIRTUE Limited Edition Smooth Bundle with Towel (Worth $121)",
        buttonTitle:"DOUBLE POINTS + $16 VIRTUE Gift",
        price:"$97.00"

    },
    {
        id:"55",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15063312-2105107367176548.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15063312-1745107367222907.jpg",
        title:"VIRTUE Limited Edition Smooth Bundle with Towel (Worth $121)",
        buttonTitle:"DOUBLE POINTS + $16 VIRTUE Gift",
        price:"$97.00"

    },
    {
        id:"56",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15063315-2185107367589846.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15063315-1565107367629854.jpg",
        title:"VIRTUE Limited Edition Smooth Bundle with Towel (Worth $121)",
        buttonTitle:"DOUBLE POINTS + $16 VIRTUE Gift",
        price:"$97.00"

    },
    {
        id:"57",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13279360-1414893006489666.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/13279360-3924893006541752.jpg",
        title:"VIRTUE Flourish Density Booster 120ml",
        price:"$50.00"

    },
    {
        id:"58",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/15058818-8375105851492404.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/15058818-3975105850968913.jpg",
        title:"VIRTUE Quick-Dry Healthy Hair Towel",
        buttonTitle:"New Arrival",
        price:"$35.00"
    },
    {
        id:"59",
        image:"	https://static.thcdn.com/images/small/webp//productimg/original/14020190-1695043681335013.jpg",
        hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14020190-7205036421880785.jpg",
        title:"VIRTUE SMOOTH Un-Frizz Cream 2 fl. oz",
        price:"$32.00"
    },
    {
        id:"60",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13938587-1455002659983370.jpg",
        // hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14020190-7205036421880785.jpg",
        title:"Oribe Gold Lust Repair and Restore Shampoo and Conditioner Bundle",
        reviews:"235 Reviews",
        price:"$101.00"
    },
    {
        id:"61",
        image:"https://static.thcdn.com/images/small/webp//productimg/original/13556032-2984949337854859.jpg",
        // hoverImage:"https://static.thcdn.com/images/small/webp//productimg/original/14020190-7205036421880785.jpg",
        title:"Eminence Strawberry Rhubarb Hyaluronic Hydrator",
        reviews:"14 Reviews",
        price:"$65.00"
    }
]

// JSON.stringify(totalProducts)
// export default totalProducts
// export function total(){
//     // console.log(JSON.stringify(totalProducts))
//     return JSON.stringify(totalProducts)
// }
// export default total

