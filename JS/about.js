/*Variables*/

/**/
new fullpage("#fullpage", {
    scrollingSpeed: 1250,
});

/*Parallax effect*/

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".intro-object").forEach(
    (introObjects) => {
      const speed = introObjects.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 70;
      const y = (window.innerHeight - e.pageY * speed) / 70;

      introObjects.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
  );
}