/*fullpage transition effect*/
new fullpage("#fullpage", {
  autoScrolling: true,
  dragAndMove: true,
});

/*parallax effect*/
document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

/*header transition*/

const header = document.querySelector('.header');
const sectionOne = document.querySelector('.s1');

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneObserver){
    entries.forEach(entry=>{
       console.log(entry.target)
    })
},sectionOneOptions);

sectionOneObserver.observe(sectionOne);