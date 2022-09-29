const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const typingText = (words = []) => {
  let cursor = gsap.to(".cursor", {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1,
  });
  let masterTl = gsap.timeline({ repeat: -1 }).pause();
  let boxTl = gsap.timeline();

  boxTl.to(".box", {
    duration: 1,
    onComplete: () => masterTl.play(),
  });
  words.forEach((word) => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tl.to(".text", { duration: 1, text: word });
    masterTl.add(tl);
  });
};

typingText(["Thanh Minh.", "A Student.", "A Web Developer."]);

const sections = $$(".section");
const panes = $$(".pane");

// const tl = gsap.timeline({
//   defaults: { duration: 0.5, opacity: 0 },
// });

// tl.from(".left", {
//   height: "0",
// })
//   .from(".avatar", {
//     height: "0",
//   })
//   .from(".circle-1", {
//     height: "0",
//   }, 0)
//   .from(".circle-2", {
//     height: "0",
//   }, 0)
//   .from(".name", {
//     height: "0",
//   })
//   .from(".description", {
//     height: "0",
//   }, '<')
//   .from(".section", {
//     height: "0",
//   });

// tl.from('.right', {
//   height: "0",
// }, )
// .from('.title', {
//   height: "0",
// }, '<')

sections.forEach((item, index) => {
  const pane = panes[index];
  item.onclick = function() {
    $(".section.active").classList.remove("active");
    $(".pane.active").classList.remove("active");

    pane.classList.add("active");
    item.classList.add("active");

    const tl = new TimelineLite();
    tl.from(pane, 0.5, {
      x: '-30px',
      opacity: 0
    })
    // .from('.skill-item', {
    //   x:'30px',
    //   // y:'50px',
    //   opacity: 0,
    //   width: '0',
    // }, 0)
    .from('.showcase', {
      x: '30px',
      y: '50px',
    }, 0)
    .from('.skill-icon', {
      rotate: '180deg',
      scale: 0,
    }, 0)

  };
});
