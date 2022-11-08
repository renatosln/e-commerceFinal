const loading1 = () =>{
    console.log("Hola")
    const load = document.querySelector(".loading");
    window.addEventListener("load", function(){
        
        setTimeout(() => {
            load.style.display = "none";
        }, 3000);
    });
}
console.log("hola")
loading1();
