const left = document.getElementById("left") as HTMLButtonElement;
const right = document.getElementById("right") as HTMLButtonElement;
const slides = document.getElementById("slides") as HTMLDivElement;

var slidesLength = slides.childElementCount;
var slidesIndex = 0;
const carousel = () => {
  const autoSlide = () => {
    const next = slidesIndex === slidesLength - 1 ? 0 : slidesIndex + 1;
    if (slidesIndex < 0) slidesIndex = slidesLength - 1;
    slides.children[next].classList.add("carouselVisible");
    slides.children[slidesIndex].classList.remove("carouselVisible");
    slidesIndex++;
    if (slidesIndex === slidesLength) slidesIndex = 0;
  };

  const createInterval = () => setInterval(autoSlide, 3000);

  var interval = createInterval();

  left.addEventListener("click", () => {
    clearInterval(interval);
    slides.children[slidesIndex].classList.remove("carouselVisible");

    slidesIndex--;
    if (slidesIndex < 0) slidesIndex = slidesLength - 1;
    slides.children[slidesIndex].classList.add("carouselVisible");

    interval = createInterval();
  });

  right.addEventListener("click", () => {
    clearInterval(interval);
    slides.children[slidesIndex].classList.remove("carouselVisible");

    slidesIndex++;
    if (slidesIndex === slidesLength) slidesIndex = 0;
    slides.children[slidesIndex].classList.add("carouselVisible");

    interval = createInterval();
  });
};

export default carousel;
