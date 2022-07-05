/*================Show menu=============*/
const navToggle = document.querySelector('.nav-toggle');
const navmenu = document.querySelector('.nav-menu');
const navClose = document.querySelector('.nav-close');


console.log(navToggle);
console.log(navmenu);

if (navToggle) {
    navToggle.addEventListener('click', function () {

        navmenu.classList.add('show-link');
    })

    if (navClose) {
        navClose.addEventListener('click', function () {
            navmenu.classList.remove('show-link');
        })

    }
}

/*==================remove menu mobile======*/

const navList = document.querySelectorAll('.nav-link');

console.log(navList);

navList.forEach(n => n.addEventListener('click', function () {
    // const navmenu = document.querySelector('.nav-menu')
    navmenu.classList.remove('show-link')
})
)

/*==================Scroll active section==============*/

const sections = document.querySelectorAll('section[id]')

// console.log(sections);


/*======================map data=========================== */

const productData = [{
    id: 'rec43w3ipXvP28vog',
    title: 'Cacti Plant',
    company: 'Naturals',
    image:
        'https://res.cloudinary.com/sportryfitshop/image/upload/v1656424965/plant-shop/product1_i4lbim.png',
    price: 499.99,
},
{
    id: 'rec4f2RIftFCb7aHh',
    title: 'Cactus Plant',
    company: 'Naturals',
    image:
        'https://res.cloudinary.com/sportryfitshop/image/upload/v1656424965/plant-shop/product2_lj19ie.png',
    price: 346.99,
},
{
    id: 'rec8kkCmSiMkbkiko',
    title: 'Aloe Vera Plant',
    company: 'Naturals',
    image:
        '	https://res.cloudinary.com/sportryfitshop/image/upload/v1656424964/plant-shop/product3_xjxkcj.png',
    price: 429.99,
},
{
    id: 'recBohCqQsot4Q4II',
    title: 'Succulent Plant',
    company: 'Naturals',
    image:
        'https://res.cloudinary.com/sportryfitshop/image/upload/v1656424964/plant-shop/product4_bkocbl.png',
    price: 145.99,
},
{
    id: 'recDG1JRZnbpRHpoy',
    title: 'Green Plant',
    company: 'Naturals',
    image:
        'https://res.cloudinary.com/sportryfitshop/image/upload/v1656424964/plant-shop/product6_ei4fkg.png',
    price: 236.99,
},
{
    id: 'recNWGyP7kjFhSqw3',
    title: 'Succulent Plant',
    company: 'Naturals',
    image:
        'https://res.cloudinary.com/sportryfitshop/image/upload/v1656424964/plant-shop/product5_wdkczo.png',
    price: 369.99,
}]

const products = [...productData]
// console.log(products);

const productDom = document.querySelector('.product-container');
// console.log(productDom);

const displayProduct = () => {

    productDom.innerHTML = products.map(function (productList) {
        const { id, title, image, price } = productList;
        // console.log(productList);

        return `<a href="./cartproduct.html?id=${id}" class="click">
        <div class="product-card" data-id=${id}>
           <div class="product-circle"></div>
           <img src="${image}"
            alt="" class="product-img">
           <h3 class="product-tittle">${title}</h3>
           <span class="product-price">&#x20B9;${price}</span>
        </div></a>`
    }).join('');
}

displayProduct();















/*==================Scroll reveal section==============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset:true
})

sr.reveal(`.home-data, .shop-now`)
sr.reveal(`.home-img`, { delay: 500 },)
sr.reveal(`.social-icon`, { delay: 400 })
sr.reveal(`.about-img, .contact-box`, { origin: 'left' })
sr.reveal(`.about-data, .contact-form`, { origin: 'right' })
sr.reveal(`.step-card, .product-card, .footer`, { interval: 100 })
