
const logoG = document.querySelectorAll(".logo-g");
const line = document.querySelectorAll(".line");
const navText = document.querySelectorAll(".nav-text");
const topScreen = document.querySelector(".top-screen");
const projectNav = document.querySelector(".project-nav");
const menu = document.querySelectorAll(".menu");
const elevaSec = document.querySelector(".eleva-sec");
const videoStrip = document.querySelector(".video-strip");


/*Scroll event*/
function onScroll(event) {
  if (window.pageYOffset > 0) {
    header.style.backgroundColor = "#0a0a0a";
    logoG.forEach(x => {
      x.classList.add("log-g-scroll");
    });
    if(windowMedia.matches){
      menu.forEach(x => {
        x.classList.add("menu-scroll");
      });
    };
    if(touchMedia.matches){
      hamburgurLine.forEach(x=>{
        x.classList.add('hamburger-line-scroll');
      })
    }
    if (window.pageYOffset > 100) {
      scrollIcon.style.opacity = 0;
      if (window.pageYOffset > 700) {
        header.style.backgroundColor = "transparent";
      };
    };
  } else {
    header.style.backgroundColor = "transparent";
    logoG.forEach(x => {
      x.classList.remove("log-g-scroll");
    });
    if(windowMedia.matches){
      menu.forEach(x => {
        x.classList.remove("menu-scroll");
      });
    };
    if(touchMedia.matches){
      hamburgurLine.forEach(x=>{
        x.classList.remove('hamburger-line-scroll');
      })
    }
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

/*Scroll up in the footer*/

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*Scroll up bar*/
