var listItems = document.querySelectorAll("#menu li a");

listItems.forEach(
    function(item){
        item.onclick = function(e){
            for(var i=0; i<listItems.length; i++){
                listItems[i].classList.remove("active-menu-item");
            }
            item.classList.add("active-menu-item");
        }
    }
);

var listSubItems = document.querySelectorAll("#submenu li a");

listSubItems.forEach(
    function(item){
        item.onclick = function(e){
            for(var i=0; i<listSubItems.length; i++){
                listSubItems[i].classList.remove("active-menu-item");
            }
            item.classList.add("active-menu-item");
        }
    }
);

/* var clickImage = document.getElementById("toggle-user-account");
var userLogInOut = document.getElementById("user-account");
clickImage.addEventListener(
    "click",
    function(){
        console.log("dsad");
        userLogInOut.classList.toggle("display-user-account");
    }
); */
var userLogInOut = document.getElementById("user-account");
function openLogInOut(){
    userLogInOut.style.display = "block";
}
function closeLogInOut(){
    userLogInOut.style.display = "none";
}

