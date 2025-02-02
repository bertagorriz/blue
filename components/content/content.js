gsap.registerPlugin(SplitText, ScrollTrigger);

// HERO
const letters = document.querySelectorAll(".letter");

export const animateText = () => {
  gsap.set(letters[0], { y: -300, opacity: 0 });
  gsap.set(letters[1], { y: 300, opacity: 0 });
  gsap.set(letters[2], { y: -300, opacity: 0 });
  gsap.set(letters[3], { y: 300, opacity: 0 });

  gsap.to(letters, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power4.out",
    stagger: 0.2,
  });
};

// ABOUT
const text = document.querySelector("#about-section p");
let split;

const createSplit = () => {
  if (split) split.revert();

  split = new SplitText(text, { type: "chars" });

  gsap.from(split.chars, {
    opacity: 0,
    y: 50,
    stagger: 0.05,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about-section",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
    },
  });
};

createSplit();

export const initContent = () => {
  console.log("Content initialized");
};
