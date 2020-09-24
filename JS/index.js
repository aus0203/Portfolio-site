


/*fullpage transition effect*/

new fullpage("#fullpage", {
  scrollingSpeed: 1250,
  responsiveWidth: 900,
  onLeave: function (origin, destination, direction) {
    var loadedSection = this;
    
    /*Handler*/
    handler.style.marginTop = -10 + destination.index * 5 + "rem";

    /*Intro section*/
    front.forEach((x) => {
      x.style.bottom = 0 - destination.index * 1250 + "px";
    });
    back.forEach((x) => {
      x.style.bottom = 0 - destination.index * 1050 + "px";
    });
    farBack.forEach((x) => {
      x.style.bottom = 0 - destination.index * 850 + "px";
    });
    mainCharactor.style.bottom = 0 - destination.index * 900 + "px";

    heroLine.style.top = destination.index * 1300 + "px";


    /*Project section background*/
    if (destination.index >= 1 && destination.index <= 3) {
      sectionObjectBack.forEach((x) => {
        x.style.marginTop = 0;
      });
      sectionObjectFront.forEach((x) => {
        x.style.marginTop = 0;
      });
      sectionObjectFarFront.forEach((x) => {
        x.style.marginTop = 0;
      });
    } else {
      sectionObjectBack.forEach((x) => {
        x.style.marginTop = 100 + "rem";
      });
      sectionObjectFront.forEach((x) => {
        x.style.marginTop = 150 + "rem";
      });
      sectionObjectFarFront.forEach((x) => {
        x.style.marginTop = 200 + "rem";
      });
    }

    /*Project section content*/
    if (destination.index === 1) {
      projectSection1.style.top = 0;
      callOfAction.style.marginTop = 100 + "rem";
    } else if (destination.index === 2) {
      projectSection1.style.top = -80 + "rem";
      projectSection2.style.top = 0 + "rem";
    } else if (destination.index === 3) {
      projectSection2.style.top = -80 + "rem";
      projectSection3.style.top = 0 + "rem";
    } else if (destination.index === 4) {
      projectSection3.style.top = -80 + "rem";
    } else {
      projectSection1.style.top = 100 + "rem";
      projectSection2.style.top = 100 + "rem";
      projectSection3.style.top = 100 + "rem";
      callOfAction.style.marginTop = 8 + "%";
    }

    /*Footer section background*/
    if (destination.index === 4) {
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

