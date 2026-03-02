"use client";

import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  type: "triangle" | "circle" | "hexagon";
  size: number;
  rotation: number;
  rotationSpeed: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

function getParticleRgb(): string {
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue("--particle-rgb")
      .trim() || "37, 99, 235"
  );
}

function drawTriangle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();
  for (let i = 0; i < 3; i++) {
    const angle = (i * 2 * Math.PI) / 3 - Math.PI / 2;
    const px = Math.cos(angle) * size;
    const py = Math.sin(angle) * size;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function drawHexagon(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  rotation: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * 2 * Math.PI) / 6 - Math.PI / 6;
    const px = Math.cos(angle) * size;
    const py = Math.sin(angle) * size;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function drawCircle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number
) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.stroke();
}

export default function FloatingShapes({ count = 12 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const actualCount = hasFinePointer ? count : Math.min(count, 5);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let shapes: Shape[] = [];
    let rgb = getParticleRgb();

    const observer = new MutationObserver(() => {
      rgb = getParticleRgb();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const types: Shape["type"][] = ["triangle", "circle", "hexagon"];

    const resize = () => {
      const dpr = window.devicePixelRatio;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      shapes = Array.from({ length: actualCount }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        type: types[Math.floor(Math.random() * types.length)],
        size: Math.random() * 10 + 8,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.008,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.12 + 0.05,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (const s of shapes) {
        s.x += s.speedX;
        s.y += s.speedY;
        s.rotation += s.rotationSpeed;
        s.pulse += s.pulseSpeed;

        if (s.x < -30) s.x = canvas.offsetWidth + 30;
        if (s.x > canvas.offsetWidth + 30) s.x = -30;
        if (s.y < -30) s.y = canvas.offsetHeight + 30;
        if (s.y > canvas.offsetHeight + 30) s.y = -30;

        const currentOpacity = s.opacity * (0.5 + 0.5 * Math.sin(s.pulse));
        ctx.strokeStyle = `rgba(${rgb}, ${currentOpacity})`;
        ctx.lineWidth = 0.8;

        if (s.type === "triangle") {
          drawTriangle(ctx, s.x, s.y, s.size, s.rotation);
        } else if (s.type === "hexagon") {
          drawHexagon(ctx, s.x, s.y, s.size, s.rotation);
        } else {
          drawCircle(ctx, s.x, s.y, s.size);
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ willChange: "auto", contain: "strict" }}
    />
  );
}
