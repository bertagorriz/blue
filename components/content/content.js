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

export const initContent = () => {
  console.log("Content initialized");
};
