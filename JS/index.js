const introVideo = document.getElementById("introVideo");
const handler = document.querySelector(".handler");
const projectListButton = document.querySelector(".project-list-button");
const projectListTitle = document.querySelector(".list-button-title");
const listLine = document.querySelectorAll(".list-line");
const listLine1 = document.querySelector(".list-line1");
const listLine2 = document.querySelector(".list-line2");
const projectListScreen = document.querySelector(".project-list-screen")
const listItems = document.querySelectorAll(".list-item")

$('.handler').attr('data-text', '0');


/*fullpage*/
if (windowMedia.matches) {
    new fullpage("#fullpage", {
        licenseKey: 'rJt@#oW@z8',
        scrollingSpeed: 1200,
        anchors: ['Home', 'SUPPER', 'WBETU', 'VX', 'MHJ', 'Contact'],
        onLeave: function (origin, destination, direction) {

            /*Side bar handler*/
            $('.handler').attr('data-text', destination.index);

            if (windowMedia.matches) {
                handler.style.marginBottom = 10 - (destination.index * 3.9) + "rem";
                if (bigwindowMedia.matches) {
                    handler.style.marginBottom = 20 - (destination.index * 7.8) + "rem";
                }
            }


            /*Project shift*/
            projectShift();

            if (destination.index > 0 && destination.index < 5) {
                sectionNav.innerHTML = "Touch the image or title";
                sectionNav.style.opacity = 1;
            } else if (destination.index >= 5) {
                sectionNav.style.opacity = 0;
            }
            else {
                sectionNav.innerHTML = "Scroll down";
                sectionNav.style.opacity = 1;
            }
        }
    });
};

/*Project-list-button*/

projectListButton.addEventListener('click', () => {
    projectListScreen.classList.toggle('project-list-screen-clicked');
    listLine1.classList.toggle("list-line1-clicked");
    listLine2.classList.toggle("list-line2-clicked");
    if (projectListTitle.innerHTML === "Project list") {
        projectListTitle.innerHTML = "Close list"
    } else if (projectListTitle.innerHTML === "Close list") {
        projectListTitle.innerHTML = "Project list"
    } else {
        projectListTitle.innerHTML = "Project list"
    }
});

listItems.forEach(x => {
    x.addEventListener('click', () => {
        projectListScreen.classList.remove('project-list-screen-clicked')
        listLine1.classList.remove("list-line1-clicked");
        listLine2.classList.remove("list-line2-clicked");
        projectListTitle.innerHTML = "Project list"
    })
})

if (windowMedia.matches) {
    /*3D tilt animation*/
    const tilt = $('.js-tilt').tilt();
    tilt.on('change');  // parameters: event, transforms
    tilt.on('tilt.mouseLeave'); // parameters: event
    tilt.on('tilt.mouseEnter'); // parameters: event
    /*Landing animation*/
    let landingT1 = gsap.timeline({ defaults: { duration: 1 } });
    landingT1.from(".intro-sphere", { scale: 0, delay: 1.3 })
        .from('.intro-strip', { y: 50, opacity: 0 }, "-=0.5");
}

/*Project shift animation*/
function projectShift() {
    let t1 = gsap.timeline({ defaults: { duration: .5 } })

    t1.to('.workSectionShift', { scale: .5 })
        .to('.project-pop', { scale: .8 }, '-=0.3')
        .to('.workSectionShift', { scale: 1 })
        .to('.project-pop', { scale: 1 }, '-=0.3')
        .from('.handler', { ease: "back.out(1.7)", scale: .5 }, '-=1.3');
};


