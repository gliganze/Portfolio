/* https://codepen.io/cgrkzlkn/pen/yLjzPmp */

window.onload = parallaxFunction;

function parallaxFunction() {
  const parallax = document.getElementsByClassName("projectScroll");
  console.log(parallax);

  let i = 0;

  while (i < parallax.length) {
    let currentParallax = parallax[i];
    console.log(currentParallax);
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      currentParallax.style.backgroundPositionY = offset * 0.1 + "px";
    });
    i++;
  }
}
