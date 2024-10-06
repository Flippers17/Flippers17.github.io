const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu");

hamburger.addEventListener("click", mobileMenu);
for(var i = 0; i < navItems.length; i++)
{
    navItems[i].addEventListener("click", mobileMenu);
}


function mobileMenu() 
{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}