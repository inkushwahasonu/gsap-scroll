import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 120;
const getFrame = (i: number) =>
  `/frames/frame_${String(i).padStart(4, "0")}.jpg`;

export default function ScrollVideo4() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const animRef = useRef({ frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Prevent null access

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = 1280;
    canvas.height = 720;

    const images: HTMLImageElement[] = [];
    let loaded = 0;

    // Preload frames
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = getFrame(i);

      img.onload = () => {
        loaded++;
        if (loaded === 1) context.drawImage(img, 0, 0);
      };

      images.push(img);
    }

    imagesRef.current = images;

    gsap.to(animRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "200% top",
        scrub: 1,
        pin: true,
      },
      onUpdate: () => {
        const frameIndex = animRef.current.frame;
        const img = imagesRef.current[frameIndex];

        if (img) context.drawImage(img, 0, 0);
      },
    });
  }, []);

  return (
    <div aria-hidden="true" className="jjnta24 hrrf8q0" role="img">
      <video
        muted
        preload="none"
        playsInline
        className="hrrf8q1 hrrf8q3"
        aria-hidden="true"
      />

      <canvas
        ref={canvasRef}
        className="hrrf8q4 hrrf8q6"
        width={1280}
        height={720}
      />

      <picture className="hrrf8q7" aria-hidden="true">
        <source srcSet="/fallback-desktop.jpg" media="(min-width: 768px)" />
        <source srcSet="/fallback-mobile.jpg" media="(max-width: 767px)" />
        <img
          aria-hidden="true"
          draggable="false"
          loading="lazy"
          className="hrrf8q8 _1o231x80"
          src="/fallback-desktop.jpg"
        />
      </picture>
    </div>
  );
}
