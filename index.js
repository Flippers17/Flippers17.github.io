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

// (function($) {
// var element = $('#scrollingDiv'),
//     originalY = element.offset().top;

// var socialelement =  $('#social-area'),
//     limitY = socialelement.position().top;

// // Space between element and top of screen (when scrolling)
// var topMargin = 40;

// // Should probably be set in CSS; but here just for emphasis
// element.css('position', 'relative');

// $(window).on('scroll', function(event) {
//     var scrollTop = $(window).scrollTop();
//     var CurrentY = scrollTop + element.outerHeight(true) + topMargin;   
//     var MoveUp = limitY < CurrentY ? CurrentY - limitY : 0 ;

//         element.stop(false, false).animate({
//             top: scrollTop < originalY
//                     ? 0
//                     : scrollTop - originalY + topMargin - (MoveUp / 2)
//         }, 500);
// });

// })(jQuery);