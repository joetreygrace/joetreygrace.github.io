const donut = document.querySelector(".donut--info");
const donutImg = document.querySelector(".donut--img");
const blog = document.querySelector(".blog--info");
const blogImg = document.querySelector(".blog--img");
const pet = document.querySelector(".pet--info");
const petImg = document.querySelector(".pet--img");
const aboutMe = document.querySelector(".about--me");
const navAboutMe = document.querySelector(".nav--about--me");
const skills = document.querySelector(".skills");
const navSkills = document.querySelector(".nav--skills");
const projects = document.querySelector(".projects");
const navProjects = document.querySelector(".nav--projects");
const connect = document.querySelector(".connect");
const navConnect = document.querySelector(".nav--connect");

observerMe = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        navAboutMe.classList.add("on--page");
      } else {
        navAboutMe.classList.remove("on--page");
      }
    },
    { threshold: 1 }
  );
});

observerSkills = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        navSkills.classList.add("on--page");
      } else {
        navSkills.classList.remove("on--page");
      }
    },
    { threshold: 1 }
  );
});

observerProjects = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        navProjects.classList.add("on--page");
      } else {
        navProjects.classList.remove("on--page");
      }
    },
    { threshold: 1 }
  );
});

observerConnect = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        navConnect.classList.add("on--page");
      } else {
        navConnect.classList.remove("on--page");
      }
    },
    { threshold: 1 }
  );
});

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

observerMe.observe(aboutMe);
observerSkills.observe(skills);
observerProjects.observe(projects);
observerConnect.observe(connect);
