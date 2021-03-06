const aboutMe = document.querySelector(".about--me");
const navAboutMe = document.querySelector(".nav--about--me");
const skills = document.querySelector(".skills");
const navSkills = document.querySelector(".nav--skills");
const projects = document.querySelector(".projects");
const navProjects = document.querySelector(".nav--projects");
const connect = document.querySelector(".connect");
const navConnect = document.querySelector(".nav--connect");
const resume = document.querySelector(".resume");
const navResume = document.querySelector(".nav--resume");

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

observerResume = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        navResume.classList.add("on--page");
      } else {
        navResume.classList.remove("on--page");
      }
    },
    { threshold: 1 }
  );
});

observerMe.observe(aboutMe);
observerSkills.observe(skills);
observerProjects.observe(projects);
observerConnect.observe(connect);
observerResume.observe(resume);
