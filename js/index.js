var htmlAndBody = $('html,body');
var homeOffsetTop = $("#Home-Section").offset().top;
var aboutOffsetTop = $("#About-Section").offset().top;
var projectsOffsetTop = $("#Projects-Section").offset().top;
var contactOffsetTop = $("#Contact-Section").offset().top;

//Code for smooth scrolling 
function smoothScrollTo(offsetTop) {
  event.preventDefault();
  htmlAndBody.animate({
    scrollTop: offsetTop
  }, 1000);
}




