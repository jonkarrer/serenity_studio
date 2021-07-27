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
      slides.className = "slides_two";
      slidesTitle.style.animation = "translate_left 1s";
      slidesScript.style.animation = "translate_down_reset 1s";
      slidesSubtext.style.animation = "translate_up_reset 1s";
    } else {
      slides.className = "slides";
      slidesTitle.style.animation = "translate_right 2s";
      slidesScript.style.animation = "translate_down 1s";
      slidesSubtext.style.animation = "translate_up 1s";
    }

    toggle = !toggle;
  }, 5000);
}
