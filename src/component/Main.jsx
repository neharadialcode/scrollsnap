import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect } from "react";

const Main = () => {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let hero = gsap.timeline({
      scrollTrigger: {
        trigger: ".bg_dark",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: true,
      },
    });

    hero.from(".heading", {
      xPercent: -100,
      ease: "back(1)",
    });
  }, []);
  return (
    <div className="parent">
      <div className="vh-100 child bg-primary"></div>
      <div className="vh-100 child bg-success"></div>
      <div className="vh-100 child bg-dark bg_dark d-flex flex-column justify-content-center">
        <h2 className="heading text-center">Section One</h2>
      </div>
      <div className="vh-100 child bg-danger"></div>
      <div className="vh-100 child bg-warning"></div>
    </div>
  );
};

export default Main;
