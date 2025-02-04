import { useGSAP } from "@gsap/react";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import hero from "./assets/hero.png";
import bg from "./assets/bg.svg";
import $ from "jquery";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  useGSAP(() => {
    const loopTl = gsap.timeline({ repeat: -1, yoyo: true, paused: true });
    loopTl.to(".hero-image", {
      y: "-1rem",
      duration: 1,
      ease: "power1.inOut",
    });
    loopTl.to(".hero-image", {
      y: "0rem",
      duration: 1,
      ease: "power1.inOut",
    });

    const loadTimeline = gsap.timeline();
    // gsap.from(".small", {
    //   scale: 0,
    //   stagger: {
    //     // each: 0.5, // 每一个间隔 0.5s 出现
    //     amount: 0.5, // 所有间隔时间加起来总计是 0.5s
    //     from: "random",
    //   },
    //   duration: 1,
    //   // borderRadius: "3rem",
    //   // ease: "power4.inOut",
    // });

    // gsap.from(".title-wrapper", {
    //   opacity: 0,
    //   y: "6rem",
    //   duration: 1,
    // });

    // gsap.from(".hero-image", {
    //   opacity: 0,
    //   scale: 0.8,
    //   duration: 2,
    // });
    loadTimeline.from(".title-wrapper", {
      opacity: 0,
      y: "6rem",
      duration: 1,
    });
    loadTimeline.from(".small", {
      scale: 0,
      stagger: {
        // each: 0.5, // 每一个间隔 0.5s 出现
        amount: 0.5, // 所有间隔时间加起来总计是 0.5s
        from: "random",
      },
      duration: 1,
      // borderRadius: "3rem",
      // ease: "power4.inOut",
    });

    // 0.5 是绝对时间
    // < 前一个的开始时间
    // <0.5 前一个开始时间 0.5s 后
    // > 前一个的结束时间
    // >-0.5 前一个结束前的 0.5s
    loadTimeline.from(
      ".hero-image",
      {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        onComplete: () => {
          loopTl.play();
        },
      },
      // 0.5
      "<0.5"
    );

    // const scrollTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".about-section",
    //     // start: "top center",
    //     // start: "10% 40%",
    //     // end: "bottom bottom",

    //     markers: true,
    //     // scrub: true,
    //     // scrub: 2,
    //     // start: "top 40%",
    //     // end: "bottom bottom",
    //     // toggleActions: "play none none none",
    //     start: "top bottom",
    //     end: "top 50%",
    //     toggleActions: "none play none reset",
    //   },
    // });

    // scrollTl.from(".about-img", {
    //   opacity: 0,
    //   scale: 0.8,
    //   duration: 0.15,
    //   stagger: {
    //     each: 0.4,
    //   },
    // });

    $(".about-section").each(function () {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          // start: "top center",
          // start: "10% 40%",
          // end: "bottom bottom",
          // markers: true,
          // scrub: true,
          // scrub: 2,
          // start: "top 40%",
          // end: "bottom bottom",
          // toggleActions: "play none none none",
          start: "top bottom",
          end: "top 50%",
          toggleActions: "none play none reset",
        },
      });
      scrollTl.from($(this).find(".about-img"), {
        opacity: 0,
        scale: 0.8,
        duration: 0.15,
        stagger: {
          each: 0.4,
        },
      });
    });
  });
  return (
    <div className="w-[100vw] ">
      <header className=" flex w-full  justify-between px-6 pt-6 pb-20 absolute top-0 left-0">
        <div className="nav cart">cart</div>
        <div className="title text-3xl">shopster</div>
        <div className="nav menu">menu</div>
      </header>

      <div className="content min-h-dvh flex flex-col lg:flex-row lg:mb-60">
        <img className="absolute w-[150%] h-full" src={bg} alt="" />
        <div className="title-wrapper lg:flex-1  px-6">
          <div className="content-title text-[6.5vw] uppercase leading-[60px]  lg:leading-[120px] mt-40 lg:mt-60 ">
            introducing <br />
            TP–7 field <br />
            recorder
          </div>
          <div className="tag uppercase border-black border inline-block px-1  rounded-lg mt-6">
            product details
          </div>

          <div className="grid grid-cols-4 gap-4 mt-50">
            <img className="small" src={image1} alt="" />
            <img className="small" src={image2} alt="" />
            <img className="small" src={image3} alt="" />
            <img className="small" src={image4} alt="" />
            {/* <img
              src="https://cdn.prod.website-files.com/67a1dc90ca6567ffe36777af/67a1dc90ca6567ffe3677811_thumb1-p-500.jpg"
              alt=""
            /> */}
          </div>
        </div>
        <div className="right lg:flex-1 relative">
          <img
            className="hero-image w-[80%] py-40 lg:py-0 lg:w-[90%]  lg:absolute lg:top-[-2vw]"
            src={hero}
            alt=""
          />
        </div>
      </div>

      <div className="about-section  min-h-full flex flex-col">
        <p className="text-[3.5vw]  relative z-10">
          We believe that technology should not only be functional but also
          seamlessly integrated into your lifestyle. Step into our digital
          emporium and explore a carefully selected array of must-have tech
          essentials.
        </p>

        <div className="grid grid-cols-12 gap-4 flex-1 py-20 min-h-[600px] ">
          <div className="col-span-4 col-end-9  relative">
            <img
              className="absolute about-img max-h-[400px] transform rotate-10"
              src="https://cdn.prod.website-files.com/67a1dc90ca6567ffe36777af/67a1dc90ca6567ffe3677818_about-image-1.jpg"
              alt=""
            />
            <img
              className="absolute about-img max-h-[400px] transform rotate-45"
              src="https://cdn.prod.website-files.com/67a1dc90ca6567ffe36777af/67a1dc90ca6567ffe3677815_about-image-2.jpg"
              alt=""
            />
            <img
              className="absolute about-img max-h-[400px] transform -rotate-30"
              src="https://cdn.prod.website-files.com/67a1dc90ca6567ffe36777af/67a1dc90ca6567ffe3677817_about-image-3.jpg"
              alt=""
            />
            <img
              className="absolute about-img max-h-[400px] transform -rotate-30"
              src="https://cdn.prod.website-files.com/67a1dc90ca6567ffe36777af/67a1dc90ca6567ffe3677816_about-image-4.jpg"
              alt=""
            />
          </div>
          <div className="col-start-10 col-end-13 ">
            <p>
              Our carefully curated collection showcases a fusion of form and
              function, offering a handpicked array of trendy tech products that
              elevate your digital lifestyle
            </p>
            <div className="tag uppercase border-black border inline-block px-1  rounded-lg mt-6">
              Browse Gallery
            </div>
          </div>
        </div>
      </div>

      <div className="about-section  min-h-full flex flex-col">
        <p className="text-[3.5vw]  relative z-10">
          We believe that technology should not only be functional but also
          seamlessly integrated into your lifestyle. Step into our digital
          emporium and explore a carefully selected array of must-have tech
          essentials.
        </p>

        <div className="grid grid-cols-12 gap-4 flex-1 py-20 min-h-[600px] ">
          <div className="col-span-4 col-end-9  relative">
            <img
              className="absolute about-img max-h-[400px] transform rotate-5"
              src={image1}
              alt=""
            />
            <img
              className="absolute about-img max-h-[400px] transform rotate-10"
              src={image2}
              alt=""
            />
            <img
              className="absolute about-img max-h-[400px] transform -rotate-5"
              src={image3}
              alt=""
            />
            <img
              className="absolute about-img max-h-[400px] transform -rotate-10"
              src={image4}
              alt=""
            />
          </div>
          <div className="col-start-10 col-end-13 ">
            <p>
              Our carefully curated collection showcases a fusion of form and
              function, offering a handpicked array of trendy tech products that
              elevate your digital lifestyle
            </p>
            <div className="tag uppercase border-black border inline-block px-1  rounded-lg mt-6">
              Browse Gallery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
