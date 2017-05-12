var btn_up = document.querySelector(".up");

 

function animate() {
    
    if (window.scrollY > 0) {
        scrollBy(0, -40);
        setTimeout(animate,1);
    }
}



btn_up.addEventListener("click", function(e) {
    e.preventDefault();
    
    animate();
    
}, false);


window.addEventListener("scroll", function() {
    
    if (this.scrollY >= 500) {
        btn_up.classList.remove("up-opa");
    } else {
        btn_up.classList.add("up-opa");
    }
    
}, false);