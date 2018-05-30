function toggleMenu(){
    console.log("hej")
    var element = document.querySelector(".menu");
    element.classList.toggle("menu_hidden");
    
    element = document.querySelector("main");
    element.classList.toggle("fade");
}