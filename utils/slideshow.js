export default function slideshow() {
  const slides = document.querySelector("section.slides");
  const slidesTitle = document.getElementById("slide_title");
  let toggle = true;
  let iterations = 0;
  const animation = setInterval(() => {
    iterations++;
    if (iterations === 4) {
      clearInterval(animation);
    }
    if (toggle) {
      slides.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('./assets/slides/slide_two.jpg')";
      slidesTitle.innerText = ".Color.";
    } else {
      slides.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('./assets/slides/slide_one.jpg')";
      slidesTitle.innerText = ".Extend.";
    }

    toggle = !toggle;
  }, 5000);
}
