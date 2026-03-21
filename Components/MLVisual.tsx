
"use client";

import { useEffect, useRef } from "react";

export default function MLVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 600,
      y: Math.random() * 300,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
    }));

    function animate() {
      ctx.clearRect(0, 0, 600, 300);

      points.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > 600) p.dx *= -1;
        if (p.y < 0 || p.y > 300) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#6366f1";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <section id="ml" className="min-h-screen max-w-6xl mx-auto py-32">
      <h2 className="text-3xl font-bold mb-10">AI / ML Experiments</h2>

      <p className="mb-8 text-gray-300 max-w-xl">
        Exploring data visualization, exploratory analysis and machine
        learning experimentation.
      </p>

      <canvas ref={canvasRef} width={600} height={300} />
    </section>
  );
}
