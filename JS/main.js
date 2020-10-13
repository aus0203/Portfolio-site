/*Variables*/
const cursor = document.querySelector(".cursor");
const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const hamburgurLine = document.querySelectorAll(".hamburger-line")
const hamburgerLine1 = document.querySelector(".hamburger-line1");
const hamburgerLine2 = document.querySelector(".hamburger-line2");
const navLinks = document.querySelector('.nav-link');
const anchors = document.querySelectorAll(".anchor");
const anchorsProject = document.querySelectorAll(".anchor-project");
const scrollIcon = document.querySelector(".scrollicon");

/*Page link*/
const loadingWrapper = document.querySelector(".loading-wrapper")
const workLink = document.querySelector(".work-state");
const aboutLink = document.querySelector(".about-state");
/*Variables for background*/
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
const farBack = document.querySelectorAll(".farback");
const mainCharactor = document.querySelector(".maincharactor");
const footerLine = document.querySelector(".contact-line");
const callOfAction = document.querySelector(".call-of-action");
const backFooterObject = document.querySelectorAll(".backfooterobject");
const frontFooterObject = document.querySelector(".frontfooterobject");
const farFrontFooterObject = document.querySelector(".farfrontfooterobject");

/*Window media responsive*/
const windowMedia = window.matchMedia('(min-width: 800px)');
/*Touch media responsive*/
const touchMedia = window.matchMedia('(max-width:800px)')


/*Loading Screen*/

window.onload = (e) =>{
  setTimeout(()=>{loadingWrapper.style.opacity = 0;}, 1000)
}


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


/*Page transition*/

/*to About*/
function shiftToAbout(){
  let t1 =gsap.timeline({defaults:{duration:.5, onComplete:jumpToAbout}});
  t1.to('body', {opacity:0})
}

function jumpToAbout(){
  window.location.href = "about.html";
}

/*to Work*/

function shiftToIndex(){
  let t1 =gsap.timeline({defaults:{duration:.5, onComplete:jumpToIndex}});
  t1.to('body', {opacity:0})
}

function jumpToIndex(){
  window.location.href = "index.html";
}

