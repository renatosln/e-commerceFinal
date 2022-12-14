//Espacio para las variables.
//usar alt + z, para mejorar la lectura de algunas explicaciones sobre el código.
const body = document.querySelector("body");
const productContainer = document.querySelector(".products__content");
const header = document.querySelector(".header");
const showMenu = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
const closeMenu = document.querySelector(".nav__close");
const modeNight = document.querySelector("#theme-button");
const shopIcon = document.querySelector(".nav__shop")
const cart = document.querySelector(".cart")
const closeCart = document.querySelector("#cart-close");
let products = [
    {
        id: 1,
        name: "Hoodies",
        price: 14.00,
        image: "./assets/img/featured1.png",
        category: "hoodies",
        stock: 10,
    },

    {
        id: 2,
        name: "Shirts",
        price: 24.00,
        image: "./assets/img/featured2.png",
        category: "shirts",
        stock: 15,
    },

    {
        id: 3,
        name: "Sweatshirts",
        price: 24.00,
        image: "./assets/img/featured3.png",
        category: "sweatshirts",
        stock: 20,
    },
];

const productsOriginal = [
    {
        id: 1,
        name: "Hoodies",
        price: 14.00,
        image: "./assets/img/featured1.png",
        category: "hoodies",
        stock: 10,
    },

    {
        id: 2,
        name: "Shirts",
        price: 24.00,
        image: "./assets/img/featured2.png",
        category: "shirts",
        stock: 15,
    },

    {
        id: 3,
        name: "Sweatshirts",
        price: 24.00,
        image: "./assets/img/featured3.png",
        category: "sweatshirts",
        stock: 20,
    },
];


const arrayStockOriginal = [

    {
        id: 1,
        stock: 10,
    },

    {
        id: 2,
        stock: 15,
    },

    {
        id: 3,
        stock: 20,
    },

];

const cartContainer = document.querySelector(".cart__container");
const cartPrice = document.querySelector(".cart__prices");
const cartShopItems = document.querySelector(".cart__card");
const cartItemsCount = document.querySelector("#items-count");
const cartCount = document.querySelector("#cart-count");
const cartPriceTotal = document.querySelector("#cart-total");
const sellWear = document.querySelector(".cart__checkout");
let objCartShop = {};
const productShow = document.querySelector(".products__filters");



//ahora hacemos que al recargarse se guarden los cambios.

//para que la página se quede como estaba cuando recargue usaremos localStorage


function saveChances(){
    document.addEventListener("DOMContentLoaded", (e) => {
        //con localStorage se puede hacer aunq luego si es cierto que no lo recomiendan por problemas con el frontEnd.
        const doClick = String(JSON.parse(localStorage.getItem("doClick")));
        if(localStorage.getItem("stock") !== null && doClick === "click"){
            //preguntamos si existe esa clase, y ya existe un click, si es así, declaramos nuestra variable wearIncartCoppy, claro que es bastante necesario agregar nuestras constantes arrayStockOriginal y productsOriginal, por si en algún momento deseemos a volver a los valores iniciales.
            const wearInCartCoppy = JSON.parse(localStorage.getItem("stock"));
            //Ahora el bucle es bastante sencillo, un for, mejor q un forEach, porque así acceso a la posición de products(variable declarada como let) y también acceso a la posición de wearInCartCoppy, ahora vayamos hasta casi el final del código para la explicación de por qué coloqué los localStorages en el sellWear.addListener...
            for(let i = 0; i < wearInCartCoppy.length; i++){
                products[i].stock = wearInCartCoppy[i].stock;
            }
            printWears();
        }

    });
}
saveChances();

//Hacemos que muestre un fondo de academlo mientras la página "carga" por 3 segundos
loading1();
function loading1(){
    const load = document.querySelector(".loading");
    window.addEventListener("load", function(){
        
        setTimeout(() => {
            load.style.display = "none";
        }, 3000);
    });
}

//Hacemos la trancisión de fondo transparente a fondo claro, esto pasará cuando el scroll es 0, entonces:
//usaremos window.scrollY; para saber el valor del scroll
//luego es bastante sencillo hallar los parámetros en los que el header será transparente. en este caso desde 0 hasta 144.4, observamos que en la guía masomenos por esa altura es que empieza el cambio. 

//pintamos a los productos en el body

function printWears(){
    let html = "";
    let stock = [];
    products.forEach((product) => {
        html += `
        <article class="products__card ${product.category}">
            <div class="products__shape">
                <img src="${product.image}" alt="${product.category}" class="products__img">
            </div>
        
            <div class="products__data">
                <h2 class="products__price">$${product.price}.00 <span class="products__quantity">| Stock: ${product.stock}</span></h2>
                <h3 class="products__name">${product.name}</h3>
            
                <button class="button products__button">
                    <i class="bx bx-plus" data-id="${product.id}"></i>
                </button>
            </div>
        </article>
        `;
        stock.push(product.stock);
    });
    productContainer.innerHTML = html;
    return stock;
}

printWears();

function printWearsWithId(idWear){
    const currentWear = products.find((product) => product.id === idWear);
    let html = "";
        html += `
        <article class="products__card ${currentWear.category}">
            <div class="products__shape">
                <img src="${currentWear.image}" alt="${currentWear.category}" class="products__img">
            </div>
        
            <div class="products__data">
                <h2 class="products__price">$${currentWear.price}.00 <span class="products__quantity">| Stock: ${currentWear.stock}</span></h2>
                <h3 class="products__name">${currentWear.name}</h3>
            
                <button class="button products__button">
                    <i class="bx bx-plus" data-id="${currentWear.id}"></i>
                </button>
            </div>
        </article>
        `;
    productContainer.innerHTML = html;
}

function scrollHead(){ 
    window.onscroll = function() {
        if(Number(window.scrollY) > 144.4){
            header.classList.add("scroll-header");
        }
        if(Number(window.scrollY) < 144.4){
            header.classList.remove("scroll-header");
        }
    };
}
scrollHead();

//Ahora mostraremos el menú.
showMenu.addEventListener("click", function(){
    menu.classList.toggle("show-menu");
});

//ahora lo cerraremos.

closeMenu.addEventListener("click", function(){
    menu.classList.remove("show-menu");
    menu.classList.add("nav__menu");
});

//añadimos el modo noche.

modeNight.addEventListener("click", function(){
    body.classList.toggle("dark-theme");
    modeNight.classList.toggle("bx-sun");
});

//mostramos el carrito de compras
shopIcon.addEventListener("click", function(){
    cart.classList.toggle("show-cart");
});

//ocultamos el carrito de compras
closeCart.addEventListener("click", function(){
    cart.classList.remove("show-cart");
    cart.classList.add("cart");
});

//Mostrar los productos de acuerdo a los botones de productos, show all, etc

productShow.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("products__title") || e.target.classList.contains("products__stock")){
        productContainer.innerHTML = "";
        const showWhat = e.target.getAttribute("data-filter");
        if(showWhat === "all"){
            productContainer.innerHTML = "";
            printWears();
        }

        if(showWhat === ".hoodies"){
            productContainer.innerHTML = "";
            printWearsWithId(1);
        }

        if(showWhat === ".shirts"){
            productContainer.innerHTML = "";
            printWearsWithId(2);
        }

        if(showWhat === ".sweatshirts"){
            productContainer.innerHTML = "";
            printWearsWithId(3);
        }
    }

});

//agregar productos al carrito de compras

//crearé la función para pintar el carrito de compras.

function printWearInCart() {
    let html = "";

    const arrayCartShop = Object.values(objCartShop);

    arrayCartShop.forEach(({ id, name, price, image, stock, amount, subTotal }) => {
        subTotal = amount * price;
        html += `
        <div class="cart__card">
            <div class="box">
                <img src="${image}" alt="${name}" class="cart__img">
            </div>
            <div class="cart__details">
                <h3 class="cart__title">${name}</h3>
                <span class="cart__details">
                    Stock: ${stock} | 
                    <span class="cart__price"> $${price}.00</span>
                </span>
                <span class="cart__subtotal"> Subtotal: $${subTotal}.00</span>
                <div class="cart__amount">
                    <div class="cart__amount-content">
                        <span class="cart__amount-box minus" >
                            <i class="bx bx-minus" data-id="${id}">
                            </i>
                        </span>
                        <span class="cart__amount-number">${amount} units</span>
                        <span class="cart__amount-box plus" >
                            <i class="bx bx-plus" data-id="${id}">
                            </i>
                        </span>
                    </div>
                    <i class="bx bx-trash-alt cart__amount" data-id="${id}">
                    </i>
                </div>
            </div>
        </div>
    `;
    });
    cartContainer.innerHTML = html;

    countProduct();
    printTotal();
}

//Ahora agregaré al carrito.

function pintarCarta(e){
    if(e.target.classList.contains("bx-plus")) {
        const idWear = parseInt(e.target.getAttribute("data-id"));

        const currentWear = products.find((product) => product.id === idWear);

        if(!currentWear.stock){
            return alert("Sorry, we are out of stock");
        }

        if(objCartShop[currentWear.id]){
            addWear(idWear);
        }else {
            objCartShop[currentWear.id] = {...currentWear};
            objCartShop[currentWear.id].amount = 1;
        }

        printWearInCart();
    }
}

productContainer.addEventListener("click", pintarCarta);

//crearemos las funciones para añadir y eliminar desde el mismo carro

function addWear(idWear){
    const currentWear = products.find((product) => product.id === idWear);

    if(!currentWear.stock){
        return alert("Sorry, we are out of stock");
    }

    if(currentWear.stock === objCartShop[idWear].amount){
        return alert("Sorry, we are out of stock");
    }
    objCartShop[currentWear.id].amount++;
}

function deletefood(idWear){
    delete objCartShop[idWear];
    cartPriceTotal.textContent = `$0.00`;
}


//Ahora añadiremos, restaremos y eliminaremos desde el mismo carrito

cartContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("bx-minus")){
        const idWear = Number(e.target.getAttribute("data-id"));
        if(objCartShop[idWear].amount === 1){
            deletefood(idWear);
        }else{
            objCartShop[idWear].amount--;
        }
        
    }

    if(e.target.classList.contains("bx-plus")){
        const idWear = Number(e.target.getAttribute("data-id"));
        addWear(idWear);
    }

    if(e.target.classList.contains("bx-trash-alt")){
        const idWear = Number(e.target.getAttribute("data-id"));
        deletefood(idWear);
        
    }
    printWearInCart();
    localStorage.setItem("cart",JSON.stringify(objCartShop));
});

//Contaremos el total de productos que hay en el carrito.

function countProduct(){
    const arrayCartShop = Object.values(objCartShop);

    let total = arrayCartShop.reduce((acum, curr) => {
        //recorremos el vector con curr, que recorrerá cada objeto, luego llamaremos a amount y aumentaremos eso en el acumulador acum
        acum += curr.amount;
        return acum;
    }, 0);

    cartItemsCount.textContent = total;
    cartCount.textContent = total;
    //esta función tenemos que llamarla en el printWearInCart();, para que así se actualice cada q lo usemos.
}

//ahora añadiré la función que para cuando el carrito esté vacio, queremos que nos muestre la clase de carrito vacío.

function printTotal(){
    const arrayCartShop = Object.values(objCartShop);

    if(!arrayCartShop.length){
        return (cartContainer.innerHTML = `
        <div class="cart__empty">
            <img src="./assets/img/empty-cart.png" alt="empty cart">
            <h2>Your cart is empty</h2>
            <p>You can add items to your cart by clicking on the "<i class="bx bx-plus"></i>" button on the product page.</p>
        </div>
        `);
    }

    let montoTotal = arrayCartShop.reduce((acum, curr) => {
        acum += curr.price * curr.amount;
        return acum;
    }, 0);

    cartPriceTotal.textContent = `$${montoTotal}.00`;

    //usamos una lógica bastante similar y de igual manera tenemos que llamarlo en printWearInCart();
}

//ahora usaremos el botón de checkout para vender todos los productos

sellWear.addEventListener("click", (e) => {
    const variable = "click";
    if(e.target.classList.contains("cart__btn")){
        products = products.map((product) => {
            if(objCartShop[product.id]?.id === product.id){
                cartPriceTotal.textContent = `$0.00`;
                return{
                    ...product,
                    stock: (product.stock - objCartShop[product.id].amount),
                };
            }else{
                return product;
            }
            
        });

        objCartShop = {};
        const arrayStock = printWears();
        const objArrayStock = [
            {
                stock: arrayStock[0],
                id: 1,
            },
            {
                stock: arrayStock[1],
                id: 2,
            },
            {
                stock: arrayStock[2],
                id: 3,
            },
        ]

        //la verdad es que tuve que pensar bien que quería guardar o que tipo de cambios haría la tienda, llegué a la conclusión que no es tan complicado, solo necesito que se actualice el stock... entonces declaramos un localStorage.setItem que tenga ese arreglo que observamos arriba, también observar que mi función printWears() devuelve en un arreglo (ordenado), los stocks de cada prenda, esto lo agrego a un objArrayStock que realmente solo necesita el stock, pero vaya que me costó un par de intentos y donde pensé que necesitaría el id, en fin lo dejé así por temas de tiempo, y eso lo pasamos en el localStorage, use un doClick para que entrara a la función siempre y cuando haga click en esta, pero también es inutil.

        localStorage.setItem("stock",JSON.stringify(objArrayStock));
        localStorage.setItem("doClick",JSON.stringify(variable));
        
        printWearInCart();
    }
});
