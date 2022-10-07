gsap.registerPlugin(ScrollTrigger);

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

const scrollOnWheel = function (e) {
  window.removeEventListener("wheel", scrollOnWheel);
  let pageHeight = window.innerHeight;
  if (e.deltaY < 0) {
    window.scrollBy(0, -pageHeight);
    setTimeout(() => {
      window.addEventListener("wheel", scrollOnWheel);
    }, 500);
  } else if (e.deltaY > 0) {
    window.scrollBy(0, pageHeight);
    setTimeout(() => {
      window.addEventListener("wheel", scrollOnWheel);
    }, 500);
  }
};

window.addEventListener("wheel", scrollOnWheel);

const isInViewPort = function (e) {
  const bounding = e.getBoundingClientRect();
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= window.innerWidth &&
    bounding.bottom <= window.innerHeight
  ) {
    return true;
  }
  return false;
};

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
  })
  .from(".down-btn", {
    opacity: 0,
    y: "-50px",
    duration: 0.5,
    // yoyo:true,
    // repeat: -1,
    // ease: 'linear'
  });

const tl2 = gsap.timeline();

ScrollTrigger.defaults({
  toggleActions: "restart none reverse none",
  start: "top center",
  end: "bottom top",
  endTrigger: "html",
});

gsap.from(".bg_about", {
  scrollTrigger: {
    trigger: ".bg_about",
    // markers: true,
    id: "about",
  },
  y: "-100px",
  opacity: 0,
  duration: 0.5,
});

gsap.from(".second_circle", {
  scrollTrigger: {
    trigger: ".bg_about",
    toggleClass: {
      targets: [
        ".line-1",
        ".line-2",
        ".second_circle",
        ".second_part",
        ".avatar",
        ".frame-1",
        ".frame-2",
        ".down-btn",
      ],
      className: "active",
    },
  },
  scale: 0,
  opacity: 0,
  rotate: "-360deg",
  duration: 1,
  delay: 0.5,
});

const down_btn = $(".down-btn");
const about = $("#second-section");

down_btn.onclick = function () {
  let pageHeight = window.innerHeight;
  window.scrollBy(0, pageHeight);
};

gsap.from(".bg_skills", {
  scrollTrigger: {
    trigger: ".bg_skills",
    markers: true,
    id: "skill",
  },
  y: "-100px",
  opacity: 0,
  duration: 0.5,
});

gsap.from(".third_main_textbox", {
  scrollTrigger: {
    trigger: ".bg_skills",
  },
  opacity: 0,
  duration: 1,
  delay: 1.5,
});

gsap.from(".sub_texbox_detail", {
  scrollTrigger: {
    trigger: ".bg_skills",
  },
  scale: 0.5,
  opacity: 0,
  duration: 1,
  delay: 1.5,
});

gsap.from(".third_circle", {
  scrollTrigger: {
    trigger: ".bg_skills",
    toggleClass: {
      targets: [
        ".third_circle",
        ".third_part",
        ".third_left_circle",
        ".third_right_circle",
        ".third_main_textbox",
        ".third_sub_textbox",
        ".third_icon",
        ".third_path",
      ],
      className: "active",
    },
  },
  scale: 0,
  opacity: 0,
  rotate: "180deg",
  duration: 1,
  delay: 0.5,
});

const thirdIcons = $$(".third_icon");

const panes = $$(".third_main_textbox");
const thirdParts = $$(".third_part");
const thirdSubs = $$(".third_sub_textbox");

thirdIcons.forEach((item, index) => {
  const pane = panes[index];
  const thirdPart = thirdParts[index];
  const thirdSub = thirdSubs[index];
  item.onclick = function () {
    $(".third_icon.choice").classList.remove("choice");
    $(".third_main_textbox.choice").classList.remove("choice");
    $(".third_part.choice").classList.remove("choice");
    $(".third_sub_textbox.choice").classList.remove("choice");

    thirdPart.classList.add("choice");
    thirdSub.classList.add("choice");
    pane.classList.add("choice");
    item.classList.add("choice");
  };
});
