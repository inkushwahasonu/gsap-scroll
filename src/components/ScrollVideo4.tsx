import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FRAME_FILES } from "../data/frames";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo4() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const playhead = useRef({ frame: 0 });

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images = imagesRef.current;
    const frameCount = FRAME_FILES.length;

    let imagesLoaded = 0;

    // Preload images progressively
    FRAME_FILES.forEach((file, i) => {
      const img = new Image();
      img.src = `/videos/frames/${file}`;
      img.onload = () => {
        imagesLoaded++;
        images[i] = img;

        // Render first loaded frame immediately
        if (imagesLoaded === 1) renderFrame(0);
      };
      images[i] = null;
    });

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(Math.round(playhead.current.frame));
    };

    const renderFrame = (frameIndex: number) => {
      // Find the closest loaded frame
      let index = frameIndex;
      while (index > 0 && !images[index]) {
        index--;
      }
      const img = images[index];
      if (!img) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = canvas.width / 2 - (img.width * scale) / 2;
      const y = canvas.height / 2 - (img.height * scale) / 2;

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Initialize ScrollTrigger immediately
    gsap.to(playhead.current, {
      frame: frameCount - 1,
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "+=3000", // adjust scroll distance
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
      onUpdate: () => renderFrame(Math.round(playhead.current.frame)),
    });

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div>
      <div>
        {/* Your long content goes here */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </div>

      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          display: "block",
        }}
      />
    </div>
  );
}
