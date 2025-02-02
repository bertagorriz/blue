import { map } from "../functions/functions.js";

gsap.registerPlugin(ScrollTrigger);

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

// VARIETY
const texts = ["Dark", "Light", "Navy", "Denim"];

const createBands = () => {
  const wrapper = document.getElementById("variety-section");

  texts.forEach((text) => {
    const bandWrapper = document.createElement("div");
    bandWrapper.classList.add("band-wrapper");

    const band = document.createElement("div");
    band.classList.add("band");

    const p = document.createElement("p");
    p.textContent = text;

    band.appendChild(p);
    bandWrapper.appendChild(band);
    wrapper.appendChild(bandWrapper);

    positionBand(bandWrapper);
  });
};

const positionBand = (band) => {
  const width = window.innerWidth * 0.2;
  const height = window.innerHeight * 0.2;

  const x = map(Math.random(), 0, 1, -width, width);
  const y = map(Math.random(), 0, 1, -height, height);
  const rotation = Math.random() * 360;

  gsap.set(band, {
    x,
    y,
    rotation,
  });
};

const animateBands = () => {
  gsap.set(".band", {
    xPercent: 100,
  });

  const tl = gsap.timeline({
    paused: true,
  });

  tl.to(".band", {
    xPercent: -100,
    duration: 8,
    ease: "power4.inOut",
    stagger: 0.05,
    scrollTrigger: {
      trigger: "#variety-section",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
};

const initBands = () => {
  createBands();
  animateBands();
};

initBands();

export const initContent = () => {
  console.log("Content initialized");
};
