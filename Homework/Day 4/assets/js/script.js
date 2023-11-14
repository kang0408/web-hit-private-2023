let mySideNav = document.querySelector('.side-nav');
let myExit = document.querySelector('.exit-bar');

function showSideNav() {
    if(mySideNav.style.left === "-100%" && myExit.style.display === "none") {
        mySideNav.style.left = "0";
        myExit.style.display = "flex";
    } else {
        mySideNav.style.left = "-100%";
        myExit.style.display = "none";
    }
    
    if(mySideNav.style.left === "0" && myExit.style.display === "flex") {
        mySideNav.style.left = "-100%";
        myExit.style.display = "none";
    }
}