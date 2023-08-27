let bannerList = [
    {
        imgUrl: "http://cms-contents.pharmeasy.in/banner/93051e0bc77-MEGA20_App.jpg",
    },
    {
        imgUrl: "http://cms-contents.pharmeasy.in/banner/dc5281c821e-GRAND1000_App.jpg",
    },
    {
        imgUrl: "http://cms-contents.pharmeasy.in/banner/86df3a0dc37-HP.jpg",
    },
];

// let bannerContainer = document.querySelector(".banner");
// console.log(bannerContainer)

// function createOfferList(list, container){
//     list.forEach(function(el){
//         let img = document.createElement("img")
//         img.setAttribute("src", el.imgUrl)
//         container.append(img)
//     })
// }
// createOfferList(bannerList, bannerContainer)
// console.log(bannerContainer)

let newLaunchesList = [
    {
        name: "Kotex Overnight Period Panties - Medium / Large Size, Pack of 2 Panties",
        imgUrl : "https://cdn01.pharmeasy.in/dam/products_otc/W66447/kotex-overnight-period-panties-medium-large-size-pack-of-2-panties-2-1652778799.jpg?dim=1024x0",
        mrp : 95,
        discount : 15,
    },
    {
        name: "Pharmeasy Posture Corrector - Corrects Bad Posture - Eases, Back & Shoulder Pain - Small",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G63237/pharmeasy-posture-corrector-corrects-bad-posture-eases-neck-back-shoulder-pain-small-2-1656420762.jpg?dim=1024x0",
        mrp: 999,
        discount: 50,
    },
    {
        name: "Manforce Epic Desire Super Thin Premium Condoms, Silk Chocolate Flavor, Disposable Pouch (3 Counts)",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G89746/manforce-epic-desire-super-thin-premium-condoms-silk-chocolate-flavor-disposable-pouch-3-counts-6.1-1652957426.jpg?dim=1024x0",
        mrp: 80,
        discount: 15,
    },
    {
        name: "Sugar Pop Nourishing Lip Balm - 02 Cherry",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T31617/sugar-pop-nourishing-lip-balm-02-cherry-2-1653658203.jpg?dim=320x320&dpr=1&q=100",
        mrp: 149,
        discount: 5,
    },
    {
        name: "Kellogg's Froot Loops Original 285g Box",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/E65383/kelloggs-froot-loops-original-285g-box-2-1644845403.jpg?dim=1024x0",
        mrp: 185,
        discount: 0,
    },
    {
        name: "Lacto Calamine Aloe Vera Gel With Vitamin E And Glycerin No Parabens, No Sulphates",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/U05418/lacto-calamine-aloe-vera-gel-with-vitamin-e-and-glycerin-no-parabens-no-sulphates-2-1649248955.jpg?dim=1024x0",
        mrp: 240,
        discount: 25,
    },
]

// let newLaunchesContainer = document.querySelector(".new-launches > .product-cards")
// createProductList(newLaunchesList, newLaunchesContainer)
// function createProductList(list, container){
//     list.forEach(function(el){
//         let div = document.createElement("div")
//         let div2 = document.createElement("div")
//         let img = document.createElement("img")
//         let name = document.createElement("h4")
//         let mrp = document.createElement("p")
//         let price = document.createElement("h4")

//         img.setAttribute("src", el.imgUrl)
//         name.innerText = el.name
//         name.setAttribute("class", "name")
//         mrp.innerHTML = "MRP <span>Rs."+el.mrp+"</span>"
//         let p = (el.mrp/100)*(100-el.discount)
//         p = (Math.round(p*100)/100).toFixed(2)
//         price.innerHTML = "Rs."+p+"<span>"+el.discount+"% OFF"
//         div2.append(name, mrp, price)
//         div.append(img, div2)
//         container.append(div)
//     })
// }

let trendingProductList = [
    {
        name: "Shelcal 500mg Strip Of 15 Tablets",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-2-1679999355.jpg?dim=1024x0",
        mrp: 131,
        discount: 10,
    },
    {
        name: "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1680172214.jpg?dim=1024x0",
        mrp: 300,
        discount: 48,
    },
    {
        name: "Dr Morepen Gluco One Bg 03 Glocometer Test Strips Box Of 50",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1024x0",
        mrp: 840,
        discount: 24,
    },
    {
        name: "Supradyn Daily Multivitamin Tablet With Essential Zinc, Vitamins, For Daily Immunity & Energy",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablet-with-essential-zinc-vitamins-for-daily-immunity-energy-2-1677155713.jpg?dim=1024x0",
        mrp: 194.6,
        discount: 7,
    },
    {
        name: "Liveasy Essentials Copper Bottle - Ayurvedic health Benefits - Leak Proof Cap - 950ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/W00450/liveasy-essentials-copper-bottle-ayurvedic-health-benefits-leak-proof-cap-950ml-1-1641793079.jpg?dim=1024x0",
        mrp: 1100,
        discount: 30,
    },
    {
        name: "Pharmeasy Digital Thermometer",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/W16773/pharmeasy-digital-thermometer-2-1681796833.jpg?dim=1024x0",
        mrp: 85,
        discount: 11,
    },
    {
        name: "Evion 400mg Strip Of 20 Capsule",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1683208555.jpg?dim=1024x0",
        mrp: 78.08,
        discount: 10,
    },
    {
        name: "Liveasy Foods Healthy Roasted Seed Mix - Blend Of 6 Fibre Rich Healthy Roasted Seeds - 200 Gms",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/D52223/liveasy-foods-healthy-roasted-seed-mix-blend-of-6-fibre-rich-healthy-roasted-seeds-200-gms-2-1656420865.jpg?dim=1024x0",
        mrp: 300,
        discount: 45,
    },
    {
        name: "Accu-Chek Active Glucometer Test Strips Box Of 50",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1669655023.jpg?dim=1024x0",
        mrp: 1040,
        discount: 7,
    },
    {
        name: "Calcimax Forte Plus Strip Of 30 Tablets",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1671741016.jpg?dim=1024x0",
        mrp: 285,
        discount: 12,
    },
    {
        name: "Bd Ultra Fine Iii Nano Pen Needles 4mm 32g 1*5",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/021870/bd-ultra-fine-iii-nano-pen-needles-4mm-32g-15-1-1674214391.jpg?dim=1024x0",
        mrp: 96,
        discount: 0,
    },
    {
        name: "Abzorb Antifungal Dusting Powder 100gm",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/000591/abzorb-antifungal-dusting-powder-100gm-2-1671741341.jpg?dim=1024x0",
        mrp: 142,
        discount: 10,
    },
    {
        name: "Scalpe Plus Anti Dandruff Shampoo Bottle Of 75 Ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/270382/scalpe-plus-anti-dandruff-shampoo-bottle-of-75-ml-2-1671741035.jpg?dim=1024x0",
        mrp: 280,
        discount: 10,
    }
]

let freqBookedLabTestsList = [
    {
        discount: 63,
        name: "Comprehensive Full Body Checkup with Vitamin D & B12",
        description: "Measures Vitamin D & B12 levels and other essential parameters",
        mrp: 4599,
        price: 1699,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/c4162b4ec00938379d15b2719577457e.png?dim=256x0",
    },
    {
        discount: 65,
        name: "Healthy 2023 Full Body Checkup",
        description: "Diagnostic tool for screening and monitoring of your health",
        mrp: 3299,
        price: 1149,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/4ff607383fad35e4af5639c3e7709734.png?dim=256x0",
    },
    {
        discount: 54,
        name: "Diabetes Care",
        description: "Specially designed package to cover the preventive care aspects for diabetics",
        mrp: 1109,
        price: 549,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/01abb07c5b233f90b2cd0b64a7ebccee.png?dim=256x0",
    },
    {
        discount: 62,
        name: "Basic Health Check up",
        description: "Assesses health of 47 essential body parameters",
        mrp: 2240,
        price: 849,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/01abb07c5b233f90b2cd0b64a7ebccee.png?dim=256x0",
    },
]


// let freqBookedLabTestsContainer = document.querySelector(".freq-booked-lab-tests > .product-banner");

// createProductBannerList(freqBookedLabTestsList, freqBookedLabTestsContainer);

// function createProductBannerList(list, container){
//     list.map((item)=>{
//         let div = document.createElement("div");
//         let div2 = document.createElement("div");
//         let img = document.createElement("img");
//         let name = document.createElement("h4");
//         // let mrp = document.createElement("p");
//         let discount = document.createElement("h4");
//         let description = document.createElement("p");
//         let price = document.createElement("h4");

//         if(typeof(item.discount) == "number") {
//             discount.innerText = item.discount + "% OFF";
//             price.innerHTML = "<span>Rs"+item.mrp + "</span><br>" + "Rs" + item.price;
//         } else{
//             discount.innerText = item.discount;
//             discount.setAttribute("class", "no-discount");
//             price.innerHTML = "Rs" + item.price;
//         }
//         name.innerText = item.name;
//         description.innerText = item.description;
//         img.setAttribute("src", item.imgUrl);
//         div2.append(price, img)
//         div.append(discount, name, description, div2);
//         container.append(div)
//     })
//     // (".freq-booked-lab-tests > .product-banner").innerHTML(container)
// }

let paymentOfferList = [
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/a93d45ef9eb-HSBC.jpg?dim=1024x0"
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/b11c184fdef-PAYMENT_BANNER.jpg?dim=1024x0"
    },
]

// let paymentOfferContainer = document.querySelector(".payment-offers > div");
// createOfferList(paymentOfferList, paymentOfferContainer)

// function createOfferList(list, container){
//     list.map((item)=>{
//         let img = document.createElement("img")
//         img.setAttribute("src", item.imgUrl)
//         container.append(img)
//     })
// }

let wellnessEssentialsList = [
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/M77768/fastup-creatine-monohydrate-essentials-for-longer-workout-muscle-recovery-83-servingunflavored-2-1671742322.jpg?dim=1024x0",
        name: "Fast&Up Creatine Monohydrate Essentials-For Longer Workout Muscle Recovery-83 Serving(Unflavored)",
        mrp: 1600,
        // price: 916.95,
        discount: 46,
    },
    {
        discount: 7,
        name: "Omron Hem 6161 Fully Automatic Wrist Blood Pressure Monitor With Intellisense Technology",
        mrp: 2346,
        // price: 2180.85,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/V95116/omron-hem-6161-fully-automatic-wrist-blood-pressure-monitor-with-intellisense-technology-1-1671744043.jpg?dim=1024x0",
    },
    {
        discount: 2,
        name: "Owash Ultra Mild Oily Skin Wash",
        mrp: 600,
        // price: 588,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/334110/owash-ultra-mild-oily-skin-wash-2-1669655281.jpg?dim=1024x0",
    },
    {
        discount: 35,
        name: "Nutrabay Pro Fish Oil Omega 3 (Triple Strength) - 1000mg - 60 Capsules",
        mrp: 770,
        // price: 504.01,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/B68988/nutrabay-pro-fish-oil-omega-3-triple-strength-1000mg-60-capsules-2-1671742342.jpg?dim=1024x0",
    },
    {
        discount: 34,
        name: "Nutrabay Wellness Fish Oil Omega 3 - 1000mg - 60 ",
        mrp: 450,
        // price: 304,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G34072/nutrabay-wellness-fish-oil-omega-3-1000mg-60-capsules-2-1641792196.jpg?dim=1024x0",
    },
    {
        discount: 35,
        name: "Nutrabay Pro With Electrolytes 7g Vegan Bcaas 1000 Mg Electrolytes - 250g Lemon Lime 25 Servings",
        mrp: 1600,
        // price: 1043.99,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/V93846/nutrabay-pro-with-electrolytes-7g-vegan-bcaas-1000-mg-electrolytes-250g-lemon-lime-25-servings-2-1671744584.jpg?dim=1024x0",
    },
    {
        discount: 30,
        name: "Nutrabay Pure 100% Micronised Creatine Monohydrate - Unflavoured - 250g",
        mrp: 900,
        // price: 704,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/Y51433/nutrabay-pure-100-micronised-creatine-monohydrate-unflavoured-250g-2-1641792194.jpg?dim=1024x0",
    },
    {
        discount: 4,
        name: "Beardo Whisky Smoke Edp - 100 Ml",
        mrp: 800,
        // price: 671.04,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/D42790/beardo-whisky-smoke-edp-100-ml-2-1671742745.jpg?dim=1024x0",
    },
    {
        discount: 30,
        name: "Nutrabay Pure 100% Micronised Creatine Monohydrate - Unflavoured - 250g",
        mrp: 900,
        // price: 704,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I34562/glutone-1000mg-tablet-15s-1-1669710439.jpg?dim=1024x0",
    },
    {
        discount:15,
        name: "Nivea Body Milk Nourishing Lotion Bottle Of 200 Ml",
        mrp: 200,
        // price: 177.65,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I40904/nivea-body-milk-nourishing-lotion-bottle-of-200-ml-2-1679372239.jpg?dim=1024x0",
    },
    {
        discount: 10,
        name: "Shelcal 500mg Strip Of 15 Tablets",
        mrp: 131,
        // price: 118.17,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-2-1679999355.jpg?dim=1024x0",
    },
    {
        discount: 5,
        name: "Sugar Free Gold Sweetener Powder Jar Of 100 G",
        mrp: 160,
        // price: 142.50,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I44597/sugar-free-gold-sweetener-powder-jar-of-100-g-2-1688468351.jpg?dim=1024x0",
    },
    {
        discount: 15,
        name: "Mintop Forte (Minoxidil) 5% Bottle Of 120ml Solution",
        mrp: 1664.25,
        // price: 1414.61,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products/I03306/mintop-forte-5-bottle-of-120ml-solution-1-1664871934.jpg?dim=1024x0",
    },
    {
        discount: 5,
        name: "Nivea Smooth Milk With Shea Butter Bottle Of 200 Ml",
        mrp: 235,
        // price: 223.25,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I40907/nivea-smooth-milk-with-shea-butter-bottle-of-200-ml-2-1679372238.jpg?dim=1024x0",
    },
]

// let wellnessEssentialsContainer = document.querySelector(".wellness-essentials > .product-cards2")
// createProductList(wellnessEssentialsList, wellnessEssentialsContainer)


let featuredBrandList = [
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/5fd66ffb18a-Good-Skyn.jpg?dim=1024x0",
        name: "Good Skyn",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/201210bc27d-App_Huggies.jpg?dim=1024x0",
        name: "Huggies",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/9ce464f0f3f-upglam.jpg?dim=1024x0",
        name: "Upglam",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/1151b7d7c0e-LivEasy-min.png?dim=1024x0",
        name: "LivEasy",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/f9d13fa5364-Teddy.jpg?dim=1024x0",
        name: "Teddy",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/98de77fb574-Groviva.jpg?dim=1024x0",
        name: "Grovia",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/e642f1b8237-Glucon_D.jpg?dim=1024x0",
        name: "Glucon-D",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/88d71d2fad4-App_Featured-brand.jpg?dim=1024x0",
        name: "Friends",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/2f3e832e341-Everherb-min.png?dim=1024x0",
        name: "EverHerb",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/68720375299-FastandUp.jpg?dim=1024x0",
        name: "Fast & Up",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/d3481485e73-App_stayfree.jpg?dim=1024x0",
        name: "Stayfree",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/c3203a5c98f-Onetouch.jpg?dim=1024x0",
        name: "OneTouch",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/2d70b0c95c3-Contour.jpg?dim=1024x0",
        name: "Contour",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/40facc7fa28-Pharmeasy-App.jpg?dim=1024x0",
        name: "Pharmeasy",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/215726c495b-Healthkart.jpg?dim=1024x0",
        name: "HealthKart",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/68b9d82403b-Nivea.jpg?dim=1024x0",
        name: "Nivea",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/carousel_item/cbd16e3b586-Mintop.jpg?dim=1024x0",
        name: "Mintop",
    },
]

let featuredofferList = [
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/51b4db297e2-DIABETES.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/0cfa3ee8144-IMMUNITY-BOOSTER.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/ed8a7b7c99a-SEXUAL-WELLNESS.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/9c5159faed8-ORTHO-CARE.jpg?dim=1024x0",
    },
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/6d299c4f832-UPGLAM-RANGE.jpg?dim=1024x0",
    },
]

// let featuredBrandContainer = document.querySelector(".featured-brands > .brand-promo")
// createFeaturedBrandsList(featuredBrandList, featuredBrandContainer)

// let featuredBrandOfferContainer = document.querySelector(".featured-brands > .brand-offer") 
// createOfferList(featuredofferList, featuredBrandOfferContainer)

// function createFeaturedBrandsList(list, container){
//     list.map((item)=>{
//         let div = document.createElement("div")
//         let img = document.createElement("img")
//         let name = document.createElement("h4")
//         img.setAttribute("src", item.imgUrl)
//         name.innerText = item.name
//         div.append(img, name)
//         container.append(div)
//     })
// }

let dealsOfTheDayList = [
    {
        discount: 15,
        name: "Suntris Spf 50 Plus Tube Of 50gm Silicone Gel",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products/T58414/suntris-spf-50-plus-tube-of-50gm-silicone-gel-1-1689659535.jpg?dim=1440x0",
        mrp: 650,
        price: 552.50,
    },
    {
        discount: 14,
        name: "Wow Life Science Omega 3 Capsules Bottle Of 60",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G00067/wow-life-science-omega-3-capsules-bottle-of-60-2-1658483968.jpg?dim=1024x0",
        mrp: 890,
        price: 796,
    },
    {
        discount: 5,
        name: "Oziva Plant Based Hair Vitamins 60 Capsules | Hair Vitamins For Hair Growth",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/O71204/oziva-plant-based-hair-vitamins-60-capsules-hair-vitamins-for-hair-growth-2-1671742462.jpg?dim=1024x0",
        mrp: 899,
        price: 853.96,
    },
    {
        discount: 21,
        name: "Fast&Up Charge Vitamin C & Zinc Effervescent Tablets With Natural Amla -Orange Flavour (20 Tablets)",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I42125/fastup-charge-vitamin-c-zinc-effervescent-tablets-with-natural-amla-orange-flavour-20-tablets-2-1687346721.jpg?dim=1024x0",
        mrp: 390,
        price: 309,
    },
    {
        discount: 25,
        name: "Baidyanath Nagpur Sitopaladi Churna - 60 Gm (Pack Of 2) For Dry Wet And Allergic Cough",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/L67783/baidyanath-nagpur-sitopaladi-churna-60-gm-pack-of-2-for-dry-wet-and-allergic-cough-2-1671744529.jpg?dim=1024x0",
        mrp: 300,
        price: 225,
    },
    {
        discount: 20,
        name: "Reverzo Activated Charcoal Face Wash - 100 Gm",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/C39520/reverzo-activated-charcoal-face-wash-100-gm-2-1671743205.jpg?dim=1024x0",
        mrp: 199,
        price: 159.20,
    },
    {
        discount: 8,
        name: "Soulflower Almond Oil For Glowing Skin & Healthy Hair 100% Pure Natural Coldpressed Herbal 120ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/M00289/soulflower-almond-oil-for-glowing-skin-healthy-hair-100-pure-natural-coldpressed-herbal-120ml-2-1671743278.jpg?dim=1024x0",
        mrp: 650,
        price: 598,
    },
    {
        discount: 1,
        name: "Cheerio 0.35% Oral Gel 75gm",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/191873/cheerio-035-oral-gel-75gm-1-1669655250.jpg?dim=1024x0",
        mrp: 144.50,
        price: 143.06,
    },
    {
        discount: 32,
        name: "Wow Skin Science Caffeine Face Serum - 30 Ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/D92885/wow-skin-science-caffeine-face-serum-30-ml-2-1658483316.jpg?dim=1024x0",
        mrp: 599,
        price: 409,
    },
    {
        discount: 5,
        name: "Alograce Cream 50gm",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/239643/alograce-cream-50gm-1-1671740927.jpg?dim=1024x0",
        mrp: 176,
        price: 167.20,
    },
    {
        discount: 15,
        name: "Daffy Bar 75gm",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/226603/daffy-bar-75gm-1-1669655064.jpg?dim=1024x0",
        mrp: 191,
        price: 162.35,
    },
    {
        discount: 43,
        name: "Liveasy Ortho Care Acupressure Slippers - Men (Black) Size 10",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/X29203/liveasy-ortho-care-acupressure-slippers-men-black-size-10-2-1674619038.jpg?dim=1024x0",
        mrp: 599,
        price: 341.43,
    },
    {
        discount: 10,
        name: "Shelcal 500mg Strip Of 15 Tablets",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-2-1679999355.jpg?dim=1440x0",
        mrp: 131,
        price: 118.17,
    },
    {
        discount: 15,
        name: "I-Know Ovulation Testing Strips | For Women Planning Pregnancy, 5 Strips",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/269382/i-know-ovulation-testing-strips-for-women-planning-pregnancy-5-strips-2-1674139364.jpg?dim=1024x0",
        mrp: 540,
        price: 466.65,
    },
    {
        discount:47 ,
        name: "Zingavita Multivitamin + Omega 3 Fish Oil For Men & Women 120 Capsules",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/B60519/zingavita-multivitamin-omega-3-fish-oil-for-men-women-120-capsules-2-1681204745.jpg?dim=1440x0",
        mrp: 1000,
        price: 580.05,
    },
    {
        discount: 15,
        name: "Nivea Body Milk Nourishing Lotion Bottle Of 200 Ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I40904/nivea-body-milk-nourishing-lotion-bottle-of-200-ml-2-1679372239.jpg?dim=1440x0",
        mrp: 200,
        price: 177.65,
    },
    {
        discount: null,
        name: "Equalstwo Baby Moisturizer 200 Ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/V02361/equalstwo-baby-moisturizer-200-ml-2-1680589428.jpg?dim=1440x0",
        mrp: 649,
        price: 649,
    },
    {
        discount: 18,
        name: "Healthkart Hk Vitals Skin Radiance Collagen Powder, Marine Collagen With Biotin (Orange, 200g)",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/Q97016/healthkart-hk-vitals-skin-radiance-collagen-powder-marine-collagen-with-biotin-orange-200g-2-1691051012.jpg?dim=1440x0",
        mrp: 1000,
        price: 899.97,
    },
    {
        discount: 0,
        name: "Oz-M3 Bottle Of 50'S Capsules",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/D98360/oz-m3-bottle-of-50s-capsules-1-1684316183.jpg?dim=1440x0",
        mrp: 1240,
        price: 1249,
    },
    {
        discount: 15,
        name: "Mintop Forte (Minoxidil) 5% Bottle Of 120ml Solution",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products/I03306/mintop-forte-5-bottle-of-120ml-solution-1-1664871934.jpg?dim=1440x0",
        mrp: 1664.25,
        price: 1414.61,
    },
]


let spotlightlist = [
    {
        discount: 48,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1680172214.jpg?dim=256x0",
        name: "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
        mrp: 300,
        price: 207.48,
    },
    {
        discount: 40,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/E16289/pharmeasy-orthopaedic-electric-heat-belt-regular-2-1671742418.jpg?dim=256x0",
        name: "Pharmeasy Orthopaedic Electric Heat Belt Regular",
        mrp: 949,
        price: 569.40,
    },
    {
        discount: 45,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/F38650/liveasy-foods-roasted-peri-peri-makhana-rich-in-protein-fibre-assists-weight-loss-100-grams-2-1671742787.jpg?dim=256x0",
        name: "Liveasy Foods Roasted Peri Peri Makhana - Rich In Protein & Fibre - Assists Weight Loss - 100 Grams",
        mrp: 299,
        price: 164.45,
    },
    {
        discount: 48,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/E07034/liveasy-wellness-diabetic-protein-blood-sugar-weight-management-french-vanilla-400g-jar-2-1654169670.jpg?dim=256x0",
        name: "Liveasy Wellness Diabetic Protein - Blood Sugar & Weight Management -French Vanilla 400g Jar",
        mrp: 999,
        price: 519.48,
    },
    {
        discount: 18,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/B39499/pharmeasy-hot-water-bag-relieves-pain-relaxes-sore-muscles-improves-blood-supply-blue-2l-2-1671777719.jpg?dim=256x0",
        name: "Pharmeasy Hot Water Bag - Relieves Pain - Relaxes Sore Muscles - Improves Blood Supply - Blue - 2l",
        mrp: 340,
        price: 286.18,
    },
    {
        discount: 45,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/D52223/liveasy-foods-healthy-roasted-seed-mix-blend-of-6-fibre-rich-healthy-roasted-seeds-200-gms-2-1656420865.jpg?dim=256x0",
        name: "Liveasy Foods Healthy Roasted Seed Mix - Blend Of 6 Fibre Rich Healthy Roasted Seeds - 200 Gms",
        mrp: 399,
        price: 219.45,
    },
    {
        discount: 43,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1675775391.jpg?dim=256x0 1x, https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1675775391.jpg?dim=360x0 2x",
        name: "Pharmeasy Multivitamin Multimineral - Immunity Booster - Complete Nutrition - Bottle Of 60",
        mrp: 699,
        price: 398.49,
    },
    {
        discount: 49,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1685623949.jpg?dim=256x0",
        name: "Pharmeasy All-In -One Vaporizer",
        mrp: 599,
        price: 305.49,
    },{
        discount: 40,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/G67452/pharmeasy-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-2-1672137118.jpg?dim=256x0",
        name: "Pharmeasy Calcium Magnesium Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60",
        mrp: 599,
        price: 349.40,
    },
    {
        discount: 40,
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=256x0",
        name: "Liveasy Wellness Calcium Magnesium Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
        mrp: 599,
        price: 359.40,
    },
]

let spotlightpromo = [
    {
        imgUrl: "https://cdn01.pharmeasy.in/dam/banner/banner/df29c329f51-Huggies.jpg?dim=1024x0",
    },
    {
        imgUrl: 'https://cdn01.pharmeasy.in/dam/banner/banner/9452a363f7f-covid-19.jpg?dim=1024x0',
    },
    {
        imgUrl: 'https://cdn01.pharmeasy.in/dam/banner/banner/cea76587546-Personal-care_c.jpg?dim=1024x0',
    },
    {
        imgUrl: 'https://cdn01.pharmeasy.in/dam/banner/banner/9b42ab4d9ab-home-page-banner_nutrition-.jpg?dim=1024x0',
    },
    {
        imgUrl: 'https://cdn01.pharmeasy.in/dam/banner/banner/041c47e32a2-CB_Beauty.jpg?dim=1024x0',
    },
    {
        imgUrl: 'https://cdn01.pharmeasy.in/dam/banner/banner/d91d8a17483-b80e93634e8-Now-never_CB.jpg?dim=1024x0',
    },
    {
        imgUrl: 'https://cdn01.pharmeasy.in/dam/banner/banner/03b538c95bb-abcfd6435fe-FragSB.jpeg?dim=1024x0',
    },
    {
        imgUrl: 'https://cdn01.pharmeasy.in/dam/banner/banner/03b538c95bb-abcfd6435fe-FragSB.jpeg?dim=1024x0',
    },
    {
        imgUrl: 'https://cdn01.pharmeasy.in/dam/banner/banner/ee420d12d95-category_Sexual-wellnes.jpg?dim=1024x0',
    },
    {
        imgUrl: 'https://cdn01.pharmeasy.in/dam/banner/banner/ed87375d79f-DiabeticCare-min.png?dim=1024x0',
    },
    {
        imgUrl: 'https://cdn01.pharmeasy.in/dam/banner/banner/5e9dc201ab9-DevicesClearanceStore.jpg?dim=1024x0',
    },
    {
        imgUrl: 'https://cdn01.pharmeasy.in/dam/banner/banner/810889b6613-babycare-min.png?dim=1024x0',
    },
]

let healthArticleList = [
    {
        imgUrl: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2023/08/23094203/141.jpg?dim=1024x0',
        description: 'Daikon Radish Benefits: A Comprehensive Guide to Nutritional Advantages',
    },
    {
        imgUrl: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2023/08/23093218/101-2.jpg?dim=1024x0',
        description: 'Radicchio Benefits: Exploring Its Health-Boosting Effects Based on Research',
    },
    {
        imgUrl: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2023/08/23072213/12.jpg?dim=1024x0',
        description: 'Yellow Dragon Fruit: Everything You Need to Know About its Health Benefits',
    },
    {
        imgUrl: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2023/08/22112541/20-1.jpg?dim=1024x0',
        description: 'Silky Strands: Unlocking the Power of Home Remedies for Beautiful Hair',
    },
    {
        imgUrl: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2023/08/22052616/11.jpg?dim=1024x0',
        description: 'Unlocking the Secrets to Gorgeous Hair: Frequently Asked Questions',
    },
    {
        imgUrl: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2023/08/22052136/15-1.jpg?dim=1024x0',
        description: 'Hair Growth - 5 Foods That Can Help!',
    },
]

// let healthArticleContainer = document.querySelector('.health-articles > div');
// createHealthArticleList(healthArticleList, healthArticleContainer)

// function createHealthArticleList(list, container){
//     list.forEach((item)=>{
//         let div = document.createElement('div');
//         let img = document.createElement('img')
//         let title = document.createElement('p')

//         img.setAttribute('src', item.imgUrl)
//         title.innerText = item.description;

//         div.append(img, title)
//         container.append(div)
//     })
// }


let customerReviewList = [
    {
        name: "Nisha Tomar",
        date: "March 22, 2023",
        review: "I love using the PharmEasy app! They have everything related to health, like medicines, lab tests, and other healthcare essentials, at GREAT prices. Their service is amazing and quick, and the app is also easy to use.",
    },
    {
        name: "Arvind Dingwani",
        date: "Feburary 26, 2023",
        review: "I was a bit doubtful about using an online pharmacy, but PharmEasy exceeded my expectations. The discount coupons were great, prices were very reasonable, and the delivery was quick and smooth. I would definitely use it again.",
    },
    {
        name: "Shreya Sharma",
        date: "April 15, 2023",
        review: "I can't recommend the PharmEasy app enough! It's the perfect one-stop shop for my whole family's healthcare needs. The offers you can get here are beyond what other platforms offer. Customer service, including returns, is also very convenient. This app deserves 5 stars.",
    },
    {
        name: "Rajeev Kapoor",
        date: "January 3, 2023",
        review: "I recently started using PharmEasy, and I'm already a fan. They have a vast selection of products at affordable prices, which is a huge relief for my wallet. Their delivery is always prompt, and their customer service is top-notch. Thank you.",
    },
]


// let customerReviewContainer = document.querySelector(".customer-review > .reviews")
// createCustomerReviewList(customerReviewList, customerReviewContainer)


// function createCustomerReviewList(list, container){
//     list.forEach((item)=>{
//         let div = document.createElement('div')
//         let div2 = document.createElement('div')
//         let date = document.createElement('p')
//         let name = document.createElement('h3') 
//         let i = document.createElement('i')
//         let review = document.createElement('p')
        
//         name.innerText = item.name
//         date.innerText = item.date

//         i.setAttribute('class', 'fa-solid fa-quote-left')
//         review.innerText = item.review

//         div2.append(i, review)
//         div.append(name, date, div2)
//         container.append(div)
//     })
// }


$(document).ready(function(){
    var bannerContainer = ``
    bannerList.forEach((el)=>{
        bannerContainer += `<img src="${el.imgUrl}">`
    })
    $('.banner').html(bannerContainer);
    var newLaunchesContainer = ``
    newLaunchesList.map((item)=>{
        var price = Math.round(item.mrp*(1 - (item.discount/100))).toFixed(2)
        newLaunchesContainer += `<div>
            <img src="${item.imgUrl}" alt="product" style="box-shadow: balck">
        <div>
            <h4 class="name">
            ${item.name}
            </h4>
            <p>MRP <span>Rs.${item.mrp}</span></p>
            <h4>Rs.${price}<span>${item.discount}% OFF</span></h4>
        </div>
        </div>`
    })
    $(".new-launches > .product-cards").html(newLaunchesContainer)
    
    var popularProducts = ``
    trendingProductList.map((item)=>{
        var price = Math.round(item.mrp*(1 - (item.discount/100))).toFixed(2)
        popularProducts += `<div>
            <img src="${item.imgUrl}" alt="product">
            <div>
            <h4 class="name">
            ${item.name}
            </h4>
            <p>MRP <span>Rs.${item.mrp}</span></p>
            <h4>Rs.${price}<span> ${item.discount}% OFF</span></h4>
        </div>
        </div>`
    })
    $(".trending > .product-cards").html(popularProducts)

    var freqBookedLabContainer = ""
    freqBookedLabTestsList.map((item)=>{
        let discount, price
        if(typeof(item.discount) == "number"){
            discount = `${item.discount}% OFF`
            price = `<span>Rs${item.mrp}</span><br>Rs${item.price}`
        } else{
            discount = `${item.discount}`
            $(".freq-booked-lab-tests > .product-banner > div > h4:nth-child(1)").attr('class', 'no-discount')
            price = `Rs + ${item.price}`
        }
        freqBookedLabContainer += `<div>
            <h4>${discount}</h4>
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <div>
                <h4>${price}</h4>
                <img src="${item.imgUrl}" alt="">
            </div>
        </div>`
    })
    $(".freq-booked-lab-tests > .product-banner").html(freqBookedLabContainer)

    var paymentOfferContainer = ``
    paymentOfferList.map((item)=>{
        paymentOfferContainer += `
            <img src="${item.imgUrl}" alt="">
        `
    })
    $(".payment-offers > div").html(paymentOfferContainer)

    var wellnessEssentialsContainer = ``
    wellnessEssentialsList.map((item)=>{
        var price = Math.round(item.mrp*(1 - (item.discount/100))).toFixed(2)
        wellnessEssentialsContainer += `<div>
        <div>
            <img src="${item.imgUrl}" alt="product" style="box-shadow: balck">
        <div>
            <h4 class="name">
            ${item.name}
            </h4>
            <p>MRP <span>Rs.${item.mrp}</span></p>
            <h4>Rs.${price}<span>${item.discount}% OFF</span></h4>
        </div>
        </div>
        <div>
        <img src="${item.imgUrl}" alt="product" style="box-shadow: balck">
        <div>
            <h4 class="name">
            ${item.name}
            </h4>
            <p>MRP <span>Rs.${item.mrp}</span></p>
            <h4>Rs.${price}<span>${item.discount}% OFF</span></h4>
        </div>
        </div>
        </div>`
    })
    $(".wellness-essentials > .product-cards2").html(wellnessEssentialsContainer)

    var featuredBrandContainer = ``
    featuredBrandList.map((item)=>{
        featuredBrandContainer += `<div>
        <img src = "${item.imgUrl}" alt = "">
        <h4>${item.name}</h4>
        </div>`
    })
    $(".featured-brands > .brand-promo").html(featuredBrandContainer)
    var featuredBrandOfferContainer = ``
    featuredofferList.map((item)=>{
        featuredBrandOfferContainer += `
        <img src="${item.imgUrl}" alt="">
        `
    })
    $(".featured-brands > .brand-offer").html(featuredBrandOfferContainer)

    var dealsOfTheDayContainer = ``
    dealsOfTheDayList.map((item)=>{
        var price;
        // alert(typeof(item.discount))
        if(typeof(item.discount) == "number"){
            // alert("hii")
            price = `Rs.${(Math.round(item.mrp*(1-(item.discount)/100))).toFixed(2)}<span> ${item.discount}% OFF</span>`
        } else {
            price = `Rs.${item.mrp}`
        }
        dealsOfTheDayContainer += `<div>
        <img src="${item.imgUrl}" alt="product">
        <div>
        <h4 class="name">
        ${item.name}
        </h4>
        <p>MRP <span>Rs.${item.mrp}</span></p>
        <h4>${price}</h4>
        </div>
        </div>`
    })
    $(".deals-of-the-day > .product-cards").html(dealsOfTheDayContainer)

    var spotlightcontainer = ``
    spotlightlist.forEach((item)=>{
        var price, mrp;
        if(typeof(item.discount) == 'number'){
            mrp = `MRP <span>Rs.${item.mrp}</span>`
            price = `Rs${Math.round(item.mrp*(1-(item.discount/100))).toFixed(2)} <span>(${item.discount})</span>`
        } else {
            mrp = ``
            price = `MRP Rs.${item.mrp}`
        }
        spotlightcontainer += `<div>
        <img src="${item.imgUrl}" alt="Product">
        <div>
        <h4 class="name">${item.name}</h4>
        <p>${mrp}</p>
        <h4>${price}</h4>
        </div>
        </div>`
    })
    $(".spotlight > .product-cards").html(spotlightcontainer)
    var spotlightpromocontainer = ``
    spotlightpromo.forEach((item)=>{
        spotlightpromocontainer += `
        <img src="${item.imgUrl}">
        `
    })
    $(".spotlight > .product-promo").html(spotlightpromocontainer)

    var healthArticleContainer = ``
    healthArticleList.forEach((item)=>{
        healthArticleContainer += `<div>
        <img src="${item.imgUrl}" alt="Article">
        <p>${item.description}</p>
        </div>`
    })
    $(".health-articles > div").html(healthArticleContainer)

    var customerReviewContainer = ``
    customerReviewList.forEach((item)=>{
        customerReviewContainer += `<div>
        <h3>${item.name}</h3>
        <p>${item.date}</p>
        <div>
        <i class="fa-solid fa-quote-left"></i>
        <p>${item.review}</p>
        </div>
        </div>`
    })  
    $('.customer-review > .reviews').html(customerReviewContainer)
})

