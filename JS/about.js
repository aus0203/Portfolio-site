

if(windowMedia.matches){
    new fullpage ('#fullpage', {
        scrollingSpeed: 1200,
        onLeave:function(origin, destination, direction){
            aboutShift()
        },
    })
}




function aboutShift() {
    let t1 = gsap.timeline({defaults:{duration:.5}})

    t1.to('.shift-section', {scale:.7})
    .to('.shift-section',{scale:1})
};

var rule = CSSRulePlugin.getRule(".guilding-line::before");

let t1 = gsap.timeline({defaults:{duration:1},repeat:-1})
t1.from(rule, {cssRule:{scale:0, transformOrigin:"center center"}})
.to(rule,{cssRule:{scale:1.5,x:-130}}, "-=0.8")
.to(rule,{cssRule:{scale:0}}, "-=0.5")


if(windowMedia.matches){
    let t2 = gsap.timeline({defaults:{duration:.8}})
    t2.from(".main-img",{y:100, opacity:0.5, delay:1.3})
    .from('.intro-text', {x:-50, opacity:0}, "-=0.8")
    .from('.intro-list', {x:50, opacity:0, stagger:0.3}, "-=0.6")
}
