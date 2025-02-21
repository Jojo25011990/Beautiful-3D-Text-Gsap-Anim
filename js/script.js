'use strict';
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');

gsap.from([text1, text2, text3, text4], {
  autoAlpha: 0,
  y: -300,
  scale: 0,
  duration: 1,
  stagger: 0.2,
});
