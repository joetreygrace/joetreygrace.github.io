const donut = document.querySelector(".donut--info");
const donutImg = document.querySelector(".donut--img");
const blog = document.querySelector(".blog--info");
const blogImg = document.querySelector(".blog--img");
const pet = document.querySelector(".pet--info");
const petImg = document.querySelector(".pet--img");

donutImg.onmouseover = function () {
  donut.style.display = "block";
};

donut.onmouseover = function () {
  donut.style.display = "block";
};

donut.onmouseout = function () {
  donut.style.display = "none";
};

blogImg.onmouseover = function () {
  blog.style.display = "block";
};

blog.onmouseover = function () {
  blog.style.display = "block";
};

blog.onmouseout = function () {
  blog.style.display = "none";
};

petImg.onmouseover = function () {
  pet.style.display = "block";
};

pet.onmouseover = function () {
  pet.style.display = "block";
};

pet.onmouseout = function () {
  pet.style.display = "none";
};
