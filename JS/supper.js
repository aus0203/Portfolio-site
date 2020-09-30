const topScreen = document.querySelector(".top-screen");
const screen = document.querySelector(".screen");
const projectHeadline = document.querySelector(".project-headline");
const projectNav = document.querySelector(".project-nav");
const popUp = document.querySelector(".pop-up");
const banner = document.querySelector(".banner");

/*Project topscreen*/
function onScroll(event) {
  if (window.pageYOffset > 0) {
    topScreen.style.height = Math.max(360, 480 - window.pageYOffset * 1) + "px";
    screen.style.marginTop = Math.max(20, 0 - window.pageYOffset * 1) + "px";
  }
}

/*Project navigation*/
const topScreenOptions = {
  rootMargin: "-200px 0px 0px 0px",
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

/*Pop up picture*/

const bannerOptions = {
  rootMargin: "-500px 0px 0px 300px",
};
const bannerObserver = new IntersectionObserver(function (
  entries,
  bannerObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      popUp.style.paddingBottom = 8 + "rem";
      banner.style.marginBottom = 0 + "rem";
    } else {
      popUp.style.paddingBottom = 0 + "rem";
      banner.style.marginBottom = 5 + "rem";
    }
  });
},
bannerOptions);

bannerObserver.observe(banner);

/*Scroll up*/

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}