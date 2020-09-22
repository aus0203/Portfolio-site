/*Variables*/
const cursor = document.querySelector(".cursor");
const anchors = document.querySelectorAll(".anchor");
const anchorsProject = document.querySelectorAll(".anchor-project");
const header = document.querySelector(".header");
const sidebar = document.querySelector(".sidebar");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
const farBack = document.querySelectorAll(".farback");
const mainCharactor = document.querySelector(".maincharactor");
const handler = document.getElementById("handler");
const heroLine = document.querySelector(".hero-line");
const footerLine = document.querySelector(".contact-line");
const sectionObjectBack = document.querySelectorAll(".objectback");
const sectionObjectFront = document.querySelectorAll(".objectfront");
const sectionObjectFarFront = document.querySelectorAll(".objectfarfront");
const callOfAction = document.querySelector(".call-of-action");
const projectSection1 = document.getElementById("projectsection1");
const projectSection2 = document.getElementById("projectsection2");
const projectSection3 = document.getElementById("prjoectsection3");

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
}
