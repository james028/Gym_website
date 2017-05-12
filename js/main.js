
function add() {
var btn_up = document.createElement("button");
btn_up.classList.add("up", "up-opa");
document.body.appendChild(btn_up);
return btn_up;
}


 var btn_add = function add();

window.addEventListener("scroll", function() {
    
   
    
    if (this.scrollY >= 400) {
        add_btn.classList.remove("up-opa");
    } else {
        document.body.classList.add("up-opa");
    }
}, false);