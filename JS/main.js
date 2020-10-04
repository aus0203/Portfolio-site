/*Variables*/
const windowWidth = window.innerWidth;
const cursor = document.querySelector(".cursor");
const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const hamburgerLine1 = document.querySelector(".hamburger-line1");
const hamburgerLine2 = document.querySelector(".hamburger-line2");
const navLinks = document.querySelector('.nav-link');
const anchors = document.querySelectorAll(".anchor");
const anchorsProject = document.querySelectorAll(".anchor-project");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
const farBack = document.querySelectorAll(".farback");
const mainCharactor = document.querySelector(".maincharactor");
const handler = document.querySelector(".handler");
const heroLine = document.querySelector(".hero-line");
const footerLine = document.querySelector(".contact-line");
const callOfAction = document.querySelector(".call-of-action");
const backFooterObject = document.querySelectorAll(".backfooterobject");
const frontFooterObject = document.querySelector(".frontfooterobject");
const farFrontFooterObject = document.querySelector(".farfrontfooterobject");

/*Cursor*/

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + e.pageY  + "px; left: " + e.pageX + "px;"
  );
});

anchors.forEach(link =>{
  link.addEventListener('mouseover', ()=>{
    cursor.classList.add("expand");
  });
  link.addEventListener('mouseleave', ()=>{
    cursor.classList.remove("expand");
  });
})

anchorsProject.forEach(link =>{
  link.addEventListener("mouseover", ()=>{
    cursor.classList.add("expand-project");
  });
  link.addEventListener("mouseleave", ()=>{
    cursor.classList.remove("expand-project");
  });
})

/*Header*/
/*Responsive nav*/

hamburger.addEventListener('click', ()=>{
  navLinks.classList.toggle("nav-link-scroll");
  hamburgerLine1.classList.toggle("hamburger-line1-toggle");
  hamburgerLine2.classList.toggle("hamburger-line2-toggle");
})


/*parallax effect*/

document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
  this.querySelectorAll(".background-object").forEach((backgroundObject) => {
    const speed = backgroundObject.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 70;
    const y = (window.innerHeight - e.pageY * speed) / 70;

    backgroundObject.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
  this.querySelectorAll(".footerBackgroundObject").forEach(
    (footerBackgroundObject) => {
      const speed = footerBackgroundObject.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 70;
      const y = (window.innerHeight - e.pageY * speed) / 70;

      footerBackgroundObject.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
  );
  this.querySelectorAll(".intro-object").forEach((introObjects) => {
    const speed = introObjects.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 70;
    const y = (window.innerHeight - e.pageY * speed) / 70;

    introObjects.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

