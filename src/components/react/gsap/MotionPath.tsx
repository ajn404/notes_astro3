import gsap from "gsap";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    import("gsap/MotionPathPlugin").then((res) => {
      const MotionPathPlugin = res.default;
      gsap.registerPlugin(MotionPathPlugin);
      gsap.set(".astronaut", { scale: 0.5, autoAlpha: 1 });
      const anim = gsap.to(".astronaut", {
        duration: 5,
        ease: "power1.inOut",
        immediateRender: true,
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: 90,
        },
      });

      import("gsap/ScrollTrigger").then((res) => {
        const ScrollTrigger = res.default;
        ScrollTrigger.create({
          trigger: `.astronaut`,
          animation: anim,
          start: "top 400px",
          end: "top 150px",
          scrub: true,
          // markers: true,
          id: "astronaut",
        });
      });
    });
  });
  return (
    <div>
      <svg
        id="motionPath"
        className="h-full w-full overflow-visible"
        viewBox="-20 0 557 190"
      >
        <path
          id="path"
          fill="none"
          d="M8,102 C15,83 58,25 131,24 206,24 233,63 259,91 292,125 328,155 377,155 464,155 497,97 504,74"
        />
        <g className="astronaut ">
          <path
            fill="#CCC"
            d="M25 127.7h.5v-16.1H4.1c.9 3.7 2.8 6.9 5.6 9.8 4.3 4.2 9.4 6.3 15.3 6.3m69.9 0h.1c5.9 0 11-2.1 15.2-6.3 2.9-2.9 4.7-6.1 5.6-9.8H94.4v16.1h.5M31.8 31.4c-4.3.9-8.1 2.9-11.4 6.2-4.5 4.5-6.7 9.9-6.7 16.2v13.6c3.3-2.1 7.1-3.2 11.3-3.2.9 0 1.7 0 2.6.1-1.5-3.9-2.3-8.2-2.3-12.7 0-7.6 2.2-14.3 6.5-20.2m74.5 36V53.8c0-6.3-2.2-11.7-6.7-16.2-3-3-6.5-5.1-10.4-6l-.2.8c3.9 5.6 5.8 12 5.8 19.2 0 4.2-.7 8.1-2 11.8l.1.8c.7-.1 1.4-.1 2.2-.1 4.1.1 7.8 1.2 11.2 3.3z"
          />
          <path
            fill="#FFF"
            d="M59.9 17.1h-.1c-9.5 0-17.6 3.4-24.3 10.1-1.3 1.3-2.5 2.7-3.6 4.2-4.3 5.9-6.5 12.6-6.5 20.3 0 4.6.8 8.8 2.3 12.7.2.6.5 1.2.8 1.8 1.7 3.6 4 6.9 7.1 9.9 3.3 3.3 6.8 5.7 10.7 7.4.1 0 .2.1.2.1.8.3 1.6.7 2.5.9 3.4 1.1 7.1 1.7 11 1.7 9.5 0 17.7-3.4 24.4-10.1 3.6-3.6 6.2-7.5 7.9-11.8l.3-.9c1.3-3.6 1.9-7.6 1.9-11.7 0-7.2-1.9-13.5-5.7-19.1l-.2-.2s0-.1-.1-.1l-.1-.1-.1-.1-.1-.1c0-.1-.1-.1-.1-.2 0 0 0-.1-.1-.1-1.1-1.5-2.3-2.9-3.7-4.3-6.8-6.9-14.9-10.3-24.4-10.3m50.2 53.4c-1.2-1.2-2.5-2.3-3.9-3.1-3.3-2.1-7.1-3.2-11.3-3.2-.7 0-1.5 0-2.2.1h-.4l-.3-.1c-1.7 4.3-4.3 8.3-7.9 11.8-6.7 6.7-14.9 10.1-24.4 10.1-3.9 0-7.6-.6-11-1.7-.8-.3-1.7-.6-2.5-.9-.1 0-.2-.1-.2-.1-3.9-1.7-7.5-4.2-10.7-7.4-3-3-5.4-6.3-7.1-9.9-.3-.6-.5-1.2-.8-1.8-.8-.1-1.7-.1-2.6-.1-4.2 0-8 1.1-11.3 3.2-1.4.9-2.7 1.9-3.9 3.1-4.2 4.2-6.3 9.2-6.3 15.2v20.6c0 1.9.2 3.7.6 5.4h21.4V89.1 145c.6 3.3 2.2 6.2 4.7 8.7 3.3 3.4 7.3 5 12 5s8.9-1.8 12.7-5.3c2.8-2.6 4.5-5.5 5-8.7v-15.9H47h26-13v15.9c.5 3.2 2.2 6.1 5 8.7 3.8 3.5 8 5.3 12.7 5.3 4.7 0 8.7-1.7 12-5 2.5-2.5 4-5.4 4.7-8.7V89v22.6h21.4c.4-1.7.6-3.5.6-5.4V85.6c0-5.8-2.1-10.9-6.3-15.1M60 118.1V88v30.1z"
          />
          <path
            fill="#2D2D2D"
            d="M59.7 2.5c-1.1 0-2 .4-2.7 1.1-.7.7-1.1 1.6-1.1 2.7s.4 2 1.1 2.7c.7.7 1.6 1.1 2.7 1.1s2-.4 2.7-1.1c.7-.7 1.1-1.6 1.1-2.7s-.4-2-1.1-2.7c-.7-.8-1.6-1.1-2.7-1.1z"
          />
          <path
            fill="none"
            stroke="#2D2D2D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M115.8 111.6c.4-1.7.6-3.5.6-5.4V85.6c0-5.9-2.1-11-6.3-15.2-1.2-1.2-2.5-2.3-3.9-3.1-3.3-2.1-7.1-3.2-11.3-3.2h0c-.7 0-1.5 0-2.2.1h-.4m-.2.1c-1.7 4.3-4.3 8.3-7.9 11.8-6.7 6.7-14.9 10.1-24.4 10.1-3.9 0-7.6-.6-11-1.7-.8-.3-1.7-.6-2.5-.9-.1 0-.2-.1-.2-.1-3.9-1.7-7.5-4.2-10.7-7.4-3-3-5.4-6.3-7.1-9.9-.3-.6-.5-1.2-.8-1.8-.8-.1-1.7-.1-2.6-.1h0c-4.2 0-8 1.1-11.3 3.2-1.4.9-2.7 1.9-3.9 3.1-4.2 4.2-6.3 9.2-6.3 15.2v20.6c0 1.9.2 3.7.6 5.4h21.4V89.2m80.9-21.8V53.8c0-6.3-2.2-11.7-6.7-16.2-3-3-6.5-5.1-10.4-6m-.3.8c3.9 5.6 5.8 12 5.8 19.2 0 4.2-.7 8.1-2 11.8m-33-53.3c-1.1 0-2-.4-2.7-1.1-.7-.7-1.1-1.6-1.1-2.7s.4-2 1.1-2.7c.7-.7 1.6-1.1 2.7-1.1s2 .4 2.7 1.1c.7.7 1.1 1.6 1.1 2.7s-.4 2-1.1 2.7c-.7.7-1.6 1.1-2.7 1.1v7.1h.1c9.5 0 17.7 3.4 24.4 10.1 1.4 1.4 2.6 2.8 3.7 4.3 0 0 0 .1.1.1 0 .1.1.1.1.2l.1.1s0 0 0 0l.1.1s0 0 0 0 0 0 0 0l.1.1h0l.1.1.2.2c3.8 5.6 5.7 12 5.7 19.1 0 4.2-.6 8.1-1.9 11.7l-.3.9m-3-32.6h0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.3-.1-.6-.1-.8-.2h-.2s0 .1.1.1v.1c.1.1.2.3.3.4 0 0 0 0 0 0h0c.1.1.2.3.3.4 0 0 0 0 0 0m-57.1-1c1.1-1.4 2.3-2.8 3.6-4.2 6.7-6.7 14.8-10.1 24.3-10.1m-46 50.3V53.8c0-6.3 2.2-11.7 6.7-16.2 3.3-3.3 7.1-5.4 11.4-6.2-4.3 5.9-6.5 12.6-6.5 20.3 0 4.6.8 8.8 2.3 12.7m65.1-.9s0 0 0 0h0v.2l-.2.5c0 .1-.1.1-.1.2m2.3 63.3h.3c5.9 0 11-2.1 15.2-6.3 2.9-2.9 4.7-6.1 5.6-9.8H94.4v16.1h.2m0 0h0m-47.3 1.1H73m-13 16c.5 3.2 2.2 6.1 5 8.7 3.8 3.5 8 5.3 12.7 5.3 4.7 0 8.7-1.7 12-5 2.5-2.5 4-5.4 4.7-8.7v-17.3m-68.8-.1V145c.6 3.3 2.2 6.2 4.7 8.7 3.3 3.4 7.3 5 12 5s8.9-1.8 12.7-5.3c2.8-2.6 4.5-5.5 5-8.7v-15.9m-34.4-1.1s0 0 0 0h-.3s0 0 0 0H25c-5.9 0-11-2.1-15.2-6.3-2.9-2.9-4.7-6.1-5.6-9.8m21.4 0v16.1m68.8-38.6v22.6M60 118.1V88"
          />
          <path
            fill="#7592A0"
            d="M84.5 68.6c6.8-4.3 10.2-9.5 10.2-15.5 0-5.1-2.4-9.6-7.2-13.4H32c-4.8 3.8-7.3 8.3-7.3 13.4 0 6.1 3.4 11.2 10.2 15.5C41.7 72.9 50 75 59.6 75c9.8 0 18-2.1 24.9-6.4z"
          />
          <path
            fill="none"
            stroke="#2D2D2D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M94.7 53.1c0 6.1-3.4 11.2-10.2 15.5-6.8 4.3-15.1 6.4-24.7 6.4-9.7 0-17.9-2.1-24.7-6.4-6.8-4.3-10.2-9.5-10.2-15.5 0-5.1 2.4-9.6 7.3-13.4h55.5c4.6 3.8 7 8.3 7 13.4z"
          />
          <path
            fill="none"
            stroke="#E6E6E6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M83.5 47.6c2.4 3.5 2.4 7.8 0 12.7M35.8 47.6c-2.4 3.5-2.4 7.8 0 12.7"
          />
          <path
            fill="#1668B2"
            stroke="#EF3D43"
            strokeMiterlimit="10"
            strokeWidth="1.439"
            d="M70.9 95.9c0-4.807 3.893-8.7 8.7-8.7 4.807 0 8.7 3.893 8.7 8.7 0 4.807-3.893 8.7-8.7 8.7a8.698 8.698 0 0 1-8.7-8.7z"
          />
          <path
            fill="#FFF"
            d="M79.6 101.7c-1.7 0-2.8-.9-2.6-1.9.5-2.6.9-5.2 1.4-7.8.2-1 .4-2.8 1.2-2.8.8 0 1 1.8 1.2 2.8.5 2.6.9 5.2 1.4 7.8.3 1-.9 1.8-2.6 1.9z"
          />
          <path
            fill="#FFF"
            d="M76.4 101.2c-.4 0-.8-.3-.8-.8v-3.3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v3.3c0 .5-.3.8-.8.8zm6.4 0c-.4 0-.7-.3-.7-.7v-3.3c0-.4.3-.7.7-.7.4 0 .7.3.7.7v3.3c.1.4-.3.7-.7.7z"
          />
          <g fill="#FFF">
            <path d="M73.3 95.3a.7.7 0 1 1 1.4 0 .7.7 0 0 1-1.4 0z" />
            <path d="M73.9 95.3c0-.663.045-1.2.1-1.2.055 0 .1.537.1 1.2 0 .663-.045 1.2-.1 1.2-.055 0-.1-.537-.1-1.2z" />
            <path d="M72.7 95.3c0-.055.582-.1 1.3-.1.718 0 1.3.045 1.3.1 0 .055-.582.1-1.3.1-.718 0-1.3-.045-1.3-.1z" />
          </g>
          <g fill="#FFF">
            <path d="M84.1 93.4a.7.7 0 1 1 1.4 0 .7.7 0 0 1-1.4 0z" />
            <path d="M84.7 93.4c0-.663.045-1.2.1-1.2.055 0 .1.537.1 1.2 0 .663-.045 1.2-.1 1.2-.055 0-.1-.537-.1-1.2z" />
            <path d="M83.5 93.4c0-.055.582-.1 1.3-.1.718 0 1.3.045 1.3.1 0 .055-.582.1-1.3.1-.718 0-1.3-.045-1.3-.1z" />
          </g>
        </g>
      </svg>
    </div>
  );
};
export default App;
