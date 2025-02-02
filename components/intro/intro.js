const svg = document.querySelector("svg");
const intro = document.querySelector(".intro");

const primaryColor = "var(--primary-color)";
const secondaryColor = "var(--secondary-color)";

const tl = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

tl.to(svg, {
  scale: 0.8,
  duration: 0.8,
  ease: "power1.inOut",
}).to(intro, {
  duration: 0.4,
  color: secondaryColor,
  backgroundColor: primaryColor,
  ease: "power1.inOut",
});

export const animateIntro = () => {
  gsap.to(intro, {
    y: "-100%",
    duration: 1.5,
    ease: "power2.inOut",
    onComplete: () => {
      intro.style.display = "none";
    },
  });
};

window.addEventListener("click", () => {
  tl.pause();
  animateIntro();
});

export const initIntro = () => {
  console.log("Intro initialized");
};
