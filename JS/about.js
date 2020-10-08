/*Variables*/
const backIntro = document.querySelectorAll(".backintro");
const frontIntro = document.querySelectorAll(".frontintro");
const farFrontIntro = document.querySelectorAll(".farfrontintro");

/*loading*/

let aboutT1 = gsap.timeline({defaults:{duration:0.2}});

aboutT1.from('.hero-line', {opacity:0, x:-50, delay:1.4})
.from('.intro-main', {y:150}, "-=0.2")

/*Fullpage*/

if(windowMedia.matches){
  new fullpage("#fullpage", {
    scrollingSpeed: 1250,

    anchors: ['aboutpage', 'cv', 'footer'],   

    onLeave: function (origin, destination, direction) {
  
      handler.style.marginTop = -8 + destination.index * 8 + "rem";
  
      if (destination.index === 1) {
        scrollIcon.style.opacity = 0;
        backIntro.forEach((x) => {
          x.style.marginTop = 100 + "rem";
        });
        frontIntro.forEach((x) => {
          x.style.marginTop = 200 + "rem";
        });
        farFrontIntro.forEach((x) => {
          x.style.marginTop = 300 + "rem";
        });
      } else {
        scrollIcon.style.opacity = 1;
        backIntro.forEach((x) => {
          x.style.marginTop = 0;
        });
        frontIntro.forEach((x) => {
          x.style.marginTop = 0;
        });
        farFrontIntro.forEach((x) => {
          x.style.marginTop = 0;
        });
      }
  
      /*Footer section background*/
      if (destination.index === 2) {
        backFooterObject.forEach((x) => {
          x.style.marginBottom = 0;
        });
        frontFooterObject.style.marginBottom = 0;
        farFrontFooterObject.style.marginBottom = 0;
        footerLine.style.marginTop = 0;
      } else {
        backFooterObject.forEach((x) => {
          x.style.marginBottom = -150 + "rem";
        });
        frontFooterObject.style.marginBottom = -200 + "rem";
        farFrontFooterObject.style.marginBottom = -300 + "rem";
        footerLine.style.marginTop = 300 + "rem";
      }
    },
  });
  
  
}


