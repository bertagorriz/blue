import { initCursor } from "./components/cursor/cursor.js";
import { initIntro } from "./components/intro/intro.js";

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initIntro();
});

gsap.config({
  trialWarn: false,
});
