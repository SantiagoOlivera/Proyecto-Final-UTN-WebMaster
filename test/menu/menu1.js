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
            for(var i=0; i<listItems.length; i++){
                listItems[i].classList.remove("active-menu-item");
            }
            item.classList.add("active-menu-item");
        }
    }
);

