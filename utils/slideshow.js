export default function slideshow() {
  const slides = document.querySelector("section.slides");
  const slidesTitle = document.getElementById("slide_title");
  const slidesScript = document.getElementById("slide_script");
  const slidesSubtext = document.getElementById("slide_subtext");
  let toggle = true;
  let iterations = 0;
  const animation = setInterval(() => {
    iterations++;
    if (iterations === 4) {
      clearInterval(animation);
    }
    if (toggle) {
      slides.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('../assets/slides/slide_two.jpg')";
      slidesTitle.innerText = ".Color.";
      slidesTitle.style.animation = "translate_left 1s";
      slidesScript.style.animation = "translate_down_reset 1s";
      slidesSubtext.style.animation = "translate_up_reset 1s";
    } else {
      slides.style.backgroundImage =
        "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('../assets/slides/slide_one.jpg')";
      slidesTitle.innerText = ".Extend.";
      slidesTitle.style.animation = "translate_right 2s";
      slidesScript.style.animation = "translate_down 1s";
      slidesSubtext.style.animation = "translate_up 1s";
    }

    toggle = !toggle;
  }, 5000);
}
