import { initCursor } from "./components/cursor/cursor.js";
import { initIntro } from "./components/intro/intro.js";
import { initContent } from "./components/content/content.js";

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initIntro();
  initContent();
});

gsap.config({
  trialWarn: false,
});
