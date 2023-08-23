const menuItem = document.getElementsByClassName("nav-btn");
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

