gsap.registerPlugin(ScrollTrigger, Flip);

const sections = gsap.utils.toArray(".section");
const contents = gsap.utils.toArray(".content");

const doFlip = (target) => {
    const state = Flip.getState(".bar");
    target.appendChild(document.querySelector(".bar"));
    Flip.from(state, {
        duration: 1, // Feel free to adjust the duration
        ease: "power1.inOut", // And the easing
        absolute: true
    });
};

sections.forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        id: i + 1,
        onEnter: () => doFlip(contents[i]),
        onEnterBack: () => doFlip(contents[i])
    });
});