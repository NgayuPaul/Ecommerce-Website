// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// The checkout Page Styles
var mainImg = document.getElementById("img-main");
var subImg = document.getElementsByClassName("small-img");

subImg[0].addEventListener("click", function () {
  mainImg.src = subImg[0].src;
});
subImg[1].addEventListener("click", function () {
  mainImg.src = subImg[1].src;
});
subImg[2].addEventListener("click", function () {
  mainImg.src = subImg[2].src;
});
subImg[3].addEventListener("click", function () {
  mainImg.src = subImg[3].src;
});
subImg[4].addEventListener("click", function () {
  mainImg.src = subImg[4].src;
});

// New Page Navigation

// var newPage = document.querySelector(".new-page");
// newPage.addEventListener("click", redirectToNewPage);

// function redirectToNewPage() {
//   window.location.href = "singleprodct.html";
// }
