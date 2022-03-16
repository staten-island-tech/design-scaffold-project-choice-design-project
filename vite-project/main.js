import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ scrollTrigger: ".attractions", delay: 0.2});

tl.from(".header-text", { opacity: 0, duration: 0.4 });

tl.from(".attractions", { opacity: 0, duration: 0.2, ease:"ease-out" });
