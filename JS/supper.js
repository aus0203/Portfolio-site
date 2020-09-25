const topScreen = document.querySelector(".top-screen");
const screen = document.querySelector(".screen");
const projectHeadline = document.querySelector(".project-headline");
const projectNav = document.querySelector(".project-nav");

function onScroll(event) {
  if (window.pageYOffset > 96) {
    topScreen.style.height = Math.max(400, 576 - window.pageYOffset * 1) + "px";
    screen.style.marginTop = Math.max(20, 0 - window.pageYOffset * 1) + "px";
  } else {
    screen.style.marginTop = 0;
  }
  // projectHeadline.style.marginTop = Math.max(40, 80 - (window.pageYOffset * 5)) + "px";
}

const topScreenOptions = {};

const topScreenObserver = new IntersectionObserver(function (
  entries,
  topScreenObserver
) {
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      projectNav.style.opacity = 1;
    }else{
      projectNav.style.opacity = 0;

    }
  })
},
topScreenOptions);

topScreenObserver.observe(topScreen);