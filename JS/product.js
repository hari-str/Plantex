const productData = [
    {
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
        price: 45.99,
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
    },
    {
        id: 'recZEougL5bbY4AEx',
        title: 'Green Plant',
        company: 'Naturals',
        image:
            'https://res.cloudinary.com/sportryfitshop/image/upload/v1656424964/plant-shop/product6_ei4fkg.png',
        price: 236.99,
    },
    {
        id: 'recjMK1jgTb2ld7sv',
        title: 'Green Plant',
        company: 'Naturals',
        image:
            'https://res.cloudinary.com/sportryfitshop/image/upload/v1656424964/plant-shop/product6_ei4fkg.png',
        price: 236.99,
    },
    {
        id: 'recmg2a1ctaEJNZhu',
        title: 'Aloe Vera Plant',
        company: 'Naturals',
        image:
            '	https://res.cloudinary.com/sportryfitshop/image/upload/v1656424964/plant-shop/product3_xjxkcj.png',
        price: 429.99,
    },
    {
        id: 'recvKMNR3YFw0bEt3',
        title: 'Succulent Plant',
        company: 'Naturals',
        image:
            'https://res.cloudinary.com/sportryfitshop/image/upload/v1656424964/plant-shop/product4_bkocbl.png',
        price: 45.99,
    },
    {
        id: 'recxaXFy5IW539sgM',
        title: 'Cacti Plant',
        company: 'Naturals',
        image:
            'https://res.cloudinary.com/sportryfitshop/image/upload/v1656424965/plant-shop/product1_i4lbim.png',
        price: 499.99,
    },
    {
        id: 'recyqtRglGNGtO4Q5',
        title: 'Cactus Plant',
        company: 'Naturals',
        image:
            'https://res.cloudinary.com/sportryfitshop/image/upload/v1656424965/plant-shop/product2_lj19ie.png',
        price: 346.99,
    },
];


const products = [...productData]
// console.log(products);

const productDom = document.querySelector('.product-container')
// console.log(productDom);

const displayProduct = () => {
    productDom.innerHTML = products.map(function (productList) {
        const { id, title, company, image, price } = productList;
        // console.log(productList);

        return `<a href="/cartproduct.html"
                <div class="product-card" data-id=${id}>
                   <div class="product-circle"></div>
                   <img src="${image}"
                    alt="" class="product-img">
                   <h3 class="product-tittle">${title}</h3>
                   <span class="product-price">&#x20B9;${price}</span>
                </div></a>`
    })
        .join('');
}

displayProduct();






