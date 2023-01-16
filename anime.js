
let header = gsap.from('.header', {
  duration: 1,
  transform: 2,
  y: -10,
  ease: "sine"
});

header.isActive();

let first = gsap.to('.firstSection', {
  y: -10,
  duration: 1,
  ease: "slow",
  scrollTrigger: {
    trigger: ".firstSection",
    toggleActions: "restart pause reume none"
  }
});

first.isActive();


let third = gsap.from(".item", {
  y: -10,
  duration: 5,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".item",
    toggleActions: "restart pause reume none"
  }
});

third.isActive();

let smoother = ScrollSmoother.create({
  smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true,           // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

smoother.isActive();