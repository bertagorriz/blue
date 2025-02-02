export const map = (x, a1, a2, b1, b2) =>
  ((x - a1) * (b2 - b1)) / (a2 - a1) + b1;

export const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

export const lerp = (v1, v2, alpha) => v1 + (v2 - v1) * alpha;
