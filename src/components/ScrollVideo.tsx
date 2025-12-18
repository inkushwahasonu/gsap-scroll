// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const imageData =[
//     'https://plus.unsplash.com/premium_photo-1765305862962-f2074bcec56a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
//     'https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8'
// ]

// const TOTAL_FRAMES = 10; // Number of frames for demo
// const FRAME_URLS = Array.from({ length: TOTAL_FRAMES }, (_, i) =>
//   `${imageData[i]}`
// );

// export default function ScrollCanvasHero() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const animRef = useRef({ frame: 0 });
//   const imagesRef = useRef<HTMLImageElement[]>([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const context = canvas.getContext("2d");
//     if (!context) return;

//     canvas.width = 1280;
//     canvas.height = 720;

//     // Preload images
//     const images: HTMLImageElement[] = [];
//     let loadedCount = 0;

//     FRAME_URLS.forEach((url) => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => {
//         loadedCount++;
//         // Draw first frame when loaded
//         if (loadedCount === 1) context.drawImage(img, 0, 0, canvas.width, canvas.height);
//       };
//       images.push(img);
//     });

//     imagesRef.current = images;

//     // GSAP ScrollTrigger animation
//     gsap.to(animRef.current, {
//       frame: TOTAL_FRAMES - 1,
//       snap: "frame",
//       ease: "none",
//       scrollTrigger: {
//         trigger: canvas,
//         start: "top top",
//         end: "+=2000", // Scroll distance
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//       onUpdate: () => {
//         const frameIndex = Math.floor(animRef.current.frame);
//         const img = imagesRef.current[frameIndex];
//         if (img) {
//           context.clearRect(0, 0, canvas.width, canvas.height);
//           context.drawImage(img, 0, 0, canvas.width, canvas.height);
//         }
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div style={{ position: "relative", width: "100%", height: "100vh" }}>
//       {/* Canvas animation */}
//       <canvas
//         ref={canvasRef}
//         style={{ display: "block", width: "100%", height: "100%" }}
//       />
//     </div>
//   );
// }
// =============================================================================

import React, { useEffect, useRef } from "react";

const ScrollVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return; // avoid null

    const ctx = canvas.getContext("2d"); // ctx is CanvasRenderingContext2D | null
    if (!ctx) return; // extra safety

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawFrame = () => {
      if (video.readyState >= 2) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 0, 150, 0.25)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      requestAnimationFrame(drawFrame);
    };

    const onPlay = () => requestAnimationFrame(drawFrame);
    video.addEventListener("play", onPlay);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      video.removeEventListener("play", onPlay);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <picture>
        <source
          //   srcSet="desktop-large.jpg 1920w, desktop-medium.jpg 1280w, desktop-small.jpg 768w"
          srcSet="https://plus.unsplash.com/premium_photo-1765305862962-f2074bcec56a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          media="(min-width: 768px)"
        />
        <source
          //   srcSet="mobile-large.jpg 1024w, mobile-medium.jpg 640w, mobile-small.jpg 420w"
          srcSet="https://plus.unsplash.com/premium_photo-1765305862962-f2074bcec56a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          media="(max-width: 767px)"
        />
        <img
          //   src="desktop-medium.jpg"
          srcSet="https://plus.unsplash.com/premium_photo-1765305862962-f2074bcec56a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </picture>

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source
          src="https://storage.googleapis.com/portfolio-cdn.teckat.com/medium_2x.webm"
          type="video/mp4"
        />
      </video>

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
};

export default ScrollVideo;
