import { lerp } from "../functions/functions.js";

const positionX = {
  target: 0,
  current: 0,
};
const positionY = {
  target: 0,
  current: 0,
};

const cursor = document.querySelector(".cursor");
const circles = cursor.querySelectorAll(".circle");

const rootStyles = getComputedStyle(document.documentElement);
const primaryColor = rootStyles.getPropertyValue("--primary-color");
const secondaryColor = rootStyles.getPropertyValue("--secondary-color");

window.addEventListener("mousemove", (e) => {
  positionX.target = e.x;
  positionY.target = e.y;
});

const update = () => {
  const element = document.elementFromPoint(positionX.target, positionY.target);

  const magnetic = element.hasAttribute("magnetic-cursor");

  circles.forEach((circle) => {
    circle.style.backgroundColor = magnetic ? primaryColor : secondaryColor;
  });

  cursor.classList.toggle("magnetic", magnetic);

  if (magnetic) {
    cursor.style.mixBlendMode = "multiply";
  } else {
    cursor.style.mixBlendMode = "normal";
  }

  positionX.current = lerp(positionX.current, positionX.target, 0.1);
  positionY.current = lerp(positionY.current, positionY.target, 0.1);
  cursor.style.transform = `translate(${positionX.current}px, ${positionY.current}px)`;
};

export const animateCursor = () => {
  update();
  requestAnimationFrame(animateCursor);
};

animateCursor();

export const initCursor = () => {
  console.log("Cursor initialized");
};
