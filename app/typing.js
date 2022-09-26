export const typingText = (words = []) => {
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
