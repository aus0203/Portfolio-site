
const handler = document.querySelector(".handler");

$('.handler').attr('data-text', '0');


if(windowMedia.matches){
    new fullpage("#fullpage", {
        scrollingSpeed: 1200,
        onLeave: function (origin, destination, direction){
    
            handler.style.marginBottom = 10 - (destination.index * 4) +"rem";
            $('.handler').attr('data-text', destination.index)
            /*Project shift*/
            projectShift();
        }
    });
    const tilt = $('.js-tilt').tilt();
    tilt.on('change');  // parameters: event, transforms
    tilt.on('tilt.mouseLeave'); // parameters: event
    tilt.on('tilt.mouseEnter'); // parameters: event
};




function projectShift() {
    let t1 = gsap.timeline({defaults:{duration:.5}})

    t1.to('.workSectionShift', {scale:.5})
    .to('.project-pop', {scale:.8},'-=0.3')   
    .to('.workSectionShift',{scale:1})
    .to('.project-pop', {scale:1},'-=0.3')
    .from('.handler',{ease: "back.out(1.7)", scale:.5},'-=1.3')
};

var rule = CSSRulePlugin.getRule(".guilding-line::before");

let t1 = gsap.timeline({defaults:{duration:1},repeat:-1})
t1.from(rule, {cssRule:{scale:0, transformOrigin:"center center"}})
.to(rule,{cssRule:{scale:1.5,x:135}}, "-=0.8")
.to(rule,{cssRule:{scale:0}}, "-=0.5")