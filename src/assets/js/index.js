import products from '../../products.json' assert {type: "json" };
console.log(products);


const catalogList = document.querySelector(".catalog-list");
// products.map((el, index) => {
//     catalogList.innerHTML +=
//         `<li class="catalog-item">
//         <img class="catalog-item__image" style="background: url(${el.images[0]}) 0% 0% / cover; display: inline-flex;">
//         <div class="catalog-item__info">
//             <h3 class="catalog-item__title">${el.title}</h3>
//             <p class="catalog-item__brand">${el.brand}</p>
//             <p class="catalog-item__price">€${el.price}</p>
//             <button class="catalog-item__button" type="button">Add to cart</button>
//             <p class="catalog-item__stock">In stock: ${el.stock}</p>
//         </div>
//     </li>`
// })
fetch("../../products.xml").then(response => {
    return response.text();
}).then(xmlString => {
    const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
    const products = xmlDocument.querySelectorAll("row");

    for (const product of products) {
        const id = product.querySelector("id").textContent;
        const images = product.querySelectorAll("images");
        const title = product.querySelector("title").textContent;
        const brand = product.querySelector("brand").textContent;
        const price = product.querySelector("price").textContent;
        const stock = product.querySelector("stock").textContent;
        console.log(id, title, brand, price, stock, images);
        catalogList.innerHTML +=
            `<li class="catalog-item">
        <img class="catalog-item__image" style="background: url(${images[0].textContent}) 0% 0% / cover; display: inline-flex; border-top-right-radius:20px;border-top-left-radius:20px">
        <div class="catalog-item__info">
            <h3 class="catalog-item__title">${title}</h3>
            <p class="catalog-item__brand">${brand}</p>
            <p class="catalog-item__price">€${price}</p>
            <button class="catalog-item__button" type="button">Add to cart</button>
            <p class="catalog-item__stock">In stock: ${stock}</p>
        </div>
    </li>`
    }

})


///// burger menu

const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");

const openMenu = () => {
    nav.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}

burgerMenu.addEventListener('click', openMenu);
