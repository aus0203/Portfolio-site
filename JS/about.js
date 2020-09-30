/*Variables*/
const backIntro = document.querySelectorAll(".backintro");
const frontIntro = document.querySelectorAll(".frontintro");
const farFrontIntro = document.querySelectorAll(".farfrontintro");

/*Fullpage*/
new fullpage("#fullpage", {
  scrollingSpeed: 1250,
  responsiveWidth: 700,
  
  onLeave: function (origin, destination, direction) {

    handler.style.marginTop = -8 + destination.index * 8 + "rem";


    if (destination.index === 1) {
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

