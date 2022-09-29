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

sections.forEach((item, index) => {
  const pane = panes[index];
  item.onclick = function () {
    $(".section.active").classList.remove("active");
    $(".pane.active").classList.remove("active");

    pane.classList.add("active");
    item.classList.add("active");
  };
});

const tl = gsap.timeline();

tl.from(".bg_text", {
  opacity: 0,
  y: "-100px",
  duration: 1,
})
  .from("#typing-text", {
    opacity: 0,
    y: "-100px",
  })
  .from(".cubic_side", {
    opacity: 0,
    scale: 0,
    duration: 1,
  });
