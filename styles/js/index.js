const navButtonMenu = document.getElementById("nav-button-menu");
const navMobileContainer = document.getElementById("nav-mobile");
const navMobileButtonClose = document.getElementById("nav-mobile-close");

navButtonMenu.addEventListener("click", function () {
  navMobileContainer.style.left = "0px";
});

navMobileButtonClose.addEventListener("click", function () {
    navMobileContainer.style.left = "100%";
  });
