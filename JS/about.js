
const handler = document.querySelector(".handler");

$('.handler').attr('data-text', '0');

/*fullpage*/
if (windowMedia.matches) {
    new fullpage('#fullpage', {
        licenseKey: 'rJt@#oW@z8',
        scrollingSpeed: 1200,
        onLeave: function (origin, destination, direction) {

            /*Side bar handler*/
            handler.style.marginBottom = 6 - (destination.index * 6) + "rem";
            $('.handler').attr('data-text', destination.index);

            /*Section shift*/
            aboutShift();

            /*Section nav*/
            if (destination.index > 0) {
                sectionNav.style.opacity = 0
            } else {
                sectionNav.style.opacity = 1
            }
        },
    })
}


/*Project transition*/
function aboutShift() {
    let t1 = gsap.timeline({ defaults: { duration: .5 } })

    t1.to('.shift-section', { scale: .7 })
        .to('.shift-section', { scale: 1 })
};

/*Opening animation*/
if (windowMedia.matches) {
    let t2 = gsap.timeline({ defaults: { duration: .8 } })
    t2.from(".main-img", { y: 100, opacity: 0.5, delay: 1.3 })
        .from('.intro-text', { x: -50, opacity: 0 }, "-=0.8")
        .from('.intro-list', { x: 50, opacity: 0, stagger: 0.3 }, "-=0.6")
}
