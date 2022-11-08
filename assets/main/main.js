//Espacio para las variables.
const body = document.querySelector("body");
const header = document.querySelector(".header");
const showMenu = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
const closeMenu = document.querySelector(".nav__close");
const modeNight = document.querySelector("#theme-button");
const shopIcon = document.querySelector(".nav__shop")
const cart = document.querySelector(".cart")
const closeCart = document.querySelector("#cart-close");



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
    cart.classList.toggle("show-cart")
});

//ocultamos el carrito de compras
closeCart.addEventListener("click", function(){
    cart.classList.remove("show-cart");
    cart.classList.add("cart");
})











