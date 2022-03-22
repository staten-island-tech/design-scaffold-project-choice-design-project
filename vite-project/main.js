import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const attractionsfade = gsap.utils.toArray('.attractions');
attractionsfade.forEach((attractions, i) => {
  const anim = gsap.fromTo(attractions, {
    autoAlpha: 0,
    y: 50
  }, {
    duration: 1,
    autoAlpha: 1,
    y: 0
  });
  ScrollTrigger.create({
    trigger: attractions,
    animation: anim,
    toggleActions: 'play none none none',
    once: true
  });
});

const foodfade = gsap.utils.toArray('.food');
foodfade.forEach((food, i) => {
  const anim = gsap.fromTo(food, {
    autoAlpha: 0,
    y: 50
  }, {
    duration: 1,
    autoAlpha: 1,
    y: 0
  });
  ScrollTrigger.create({
    trigger: food,
    animation: anim,
    toggleActions: 'play none none none',
    once: true

  });
});

const boroughfade = gsap.utils.toArray('.borough');
boroughfade.forEach((borough, i) => {
  const anim = gsap.fromTo(borough, {
    autoAlpha: 0,
    y: 50
  }, {
    duration: 1,
    autoAlpha: 1,
    y: 0
  });
  ScrollTrigger.create({
    trigger: borough,
    animation: anim,
    toggleActions: 'play none none none',
    once: true

  });
})
const tl = gsap.timeline({ delay: 0.2 });

tl.from(".header-text", {opacity: 0, duration: 0.2});

// document.getElementById("change").addEventListener("click", function () {
//    if (document.body.classList.contains("light")) {
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
//     this.innerText = "Theme 2";
// } else {
//     document.body.classList.add("light");
//     document.body.classList.remove("dark");
//     this.innerText= "Theme 1";
//   }
// });