const params = new URLSearchParams(window.location.search);
const idGet = params.get('id');
// console.log(idGet);

const cartDisplay = document.querySelector('.product-display');
// console.log(cartDisplay);

const displayCart = () => {

    productData.forEach(function (data) {

        const { id, image, price, title, company, description } = data;

        if (id == idGet) {
            cartDisplay.innerHTML = `<div class="product-round"></div>
                <img src="${image}"
                   alt="" class="cart-img">
               <div class="product-info">
                   <h2 class="product-title">${title}</h2>
                    <h5 class="product-company">${company}</h5>
                    <span class="item-price">&#x20B9;${price}</span>
                    <p class="product-desciption">${description}</p>
                    <a href="" class="button">Add to cart</a>
                </div>`
        }



        console.log(id);
    });


}

displayCart();


