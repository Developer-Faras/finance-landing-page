
// Header Active Class Toggle
window.addEventListener("scroll", function(e){
    let scrollTop = window.pageYOffset;
    let header = document.getElementById("main-header");

    if(scrollTop > 160){
        header.classList.add('active');

    }else{
        header.classList.remove('active');
    }
});

// Nav Toggler
let navToggler = document.getElementById("nav-toggler");
let mobileMenu = document.getElementById("mobile-menu");
let menuOverlay = document.getElementById("mobile-menu-overlay");

navToggler.addEventListener("click", function(){
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});

