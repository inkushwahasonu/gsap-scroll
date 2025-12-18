import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videoData = [
  {
    title: "Component One",
    video: "https://cdn.shopify.com/videos/c/o/v/fae886f3855441b699f1f50830bc11dc.mp4",
    poster: "https://placehold.co/600x400/orange/white?text=Image+One",
    start: "center center",
    end: "+=600",
  },
  {
    title :"Component Two",
    video: '/public/videos/medium_2x.webm',
    poster: "https://placehold.co/600x400/green/white?text=Image+Two",
    start: "top",
    end: "100%",
  },
  {
    title: "Component Three",
    video: "https://assets.codepen.io/39255/output_960.mp4",
    poster: "https://placehold.co/600x400/green/white?text=Image+Two",
    start: "top",
    end: "100%",
  },
  {
    title: "Component Three",
    video: "https://assets.codepen.io/39255/output_960.mp4",
    poster: "https://placehold.co/600x400/red/white?text=Image+Three",
    start: "top",
    end: "100%",
  },
  {
    title: "Component Four",
    video: "https://cdn.shopify.com/videos/c/o/v/fae886f3855441b699f1f50830bc11dc.mp4",
    poster: "https://placehold.co/600x400/yellow/white?text=Image+Four",
    start: "center center",
    end: "+=600",
  },
];

const ScrollVideo3: React.FC = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

 useEffect(() => {
  videoRefs.current.forEach((video, index) => {
    if (!video) return;

    const prepVideo = () => {
      video.play();
      video.pause();
    };

    const once = (el: HTMLElement | Document, event: string, fn: () => void) => {
      const handler = () => {
        el.removeEventListener(event, handler);
        fn();
      };
      el.addEventListener(event, handler);
    };

    once(document, "touchstart", prepVideo);

    const tween = gsap.fromTo(
      video,
      { currentTime: 0 },
      {
        currentTime: video.duration || 1,
        ease: "none",
        paused: true,
        immediateRender: false,
        scrollTrigger: {
          trigger: video,
          start: videoData[index].start,
          end: videoData[index].end,
          scrub: true,
          pin: true,
          markers: true,
        },
      }
    );

    const resetTime = () => {
      tween.vars.currentTime = video.duration || 1;
      tween.invalidate();
    };

    // ✅ Use if-else instead of ternary for side effects
    if (video.readyState) {
      resetTime();
    } else {
      once(video, "loadedmetadata", resetTime);
    }
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);


  return (
    <div>
      {videoData.map((item, i) => (
        <div
          key={i}
          className={
            i === 0 || i === videoData.length - 1
              ? "scroll-through-hero st-hero-animate sth-fadein-off"
              : "immersive-scroll-video"
          }
          style={{ backgroundColor: "inherit", padding: "50px 0" }}
        >
          <div style={{ fontSize: "50px", textAlign: "center" }}>{item.title}</div>
          <div
            className={
              i === 0 || i === videoData.length - 1
                ? "scroll-through-hero-pin"
                : "immersive-pin"
            }
            style={{ marginTop: "20px" }}
          >
            <div className="video-container" style={{ position: "relative" }}>
              <video
                ref={(el) => {
                  if (el) videoRefs.current[i] = el;
                }}
                src={item.video}
                playsInline
                webkit-playsinline="true"
                preload="auto"
                muted
                poster={item.poster}
                className="video-background"
                style={{ width: "100%", display: "block" }}
              ></video>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollVideo3;
