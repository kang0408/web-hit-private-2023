let mySideNav = document.querySelector('.side-nav');
let myExit = document.querySelector('.exit-bar');
// When click button open bar, show exit bar and side nav
function showSideNav() {
    if(mySideNav.style.left === "-100%" && myExit.style.display === "none") {
        mySideNav.style.left = "0";
        myExit.style.display = "flex";
    } else {
        mySideNav.style.left = "-100%";
        myExit.style.display = "none";
    }
    // When click content, undisplay exit bar and side nav
    if(mySideNav.style.left === "0" && myExit.style.display === "flex") {
        mySideNav.style.left = "-100%";
        myExit.style.display = "none";
    }
}

let myScroll = document.querySelector('.scroll');
// When scroll down 20px from the top of the document, show the scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myScroll.style.display = "flex";
    } else {
        myScroll.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}