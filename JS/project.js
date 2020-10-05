
const logoG = document.querySelectorAll(".logo-g");
const line = document.querySelectorAll(".line");
const navText = document.querySelectorAll(".nav-text");
const topScreen = document.querySelector(".top-screen");
const projectNav = document.querySelector(".project-nav");
const scrollIcon = document.querySelector(".scrollicon");
const menu = document.querySelectorAll(".menu");
const elevaSec = document.querySelector(".eleva-sec");
const videoStrip = document.querySelector(".video-strip");


/*Project topscreen*/


function onScroll(event) {
  if (window.pageYOffset > 0) {
    header.style.backgroundColor = "#0a0a0a";
    logoG.forEach(x => {
      x.classList.add("log-g-scroll");
    });
    menu.forEach(x => {
      x.style.color = "#e0e0e0";
    });
    if (window.pageYOffset > 100) {
      scrollIcon.style.opacity = 0;
    };
  } else {
    header.style.backgroundColor = "transparent";
    logoG.forEach(x => {
      x.classList.remove("log-g-scroll");
    });
    menu.forEach(x => {
      x.style.color = "#0a0a0a";
    });
    scrollIcon.style.opacity = 1;
  }
};

/*Project navigation*/
const topScreenOptions = {
  rootMargin: "-300px 0px 0px 0px",
};

const topScreenObserver = new IntersectionObserver(function (
  entries,
  topScreenObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      projectNav.style.opacity = 1;
    } else {
      projectNav.style.opacity = 0;
    }
  });
},
  topScreenOptions);
topScreenObserver.observe(topScreen);

/*Scroll up*/

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

