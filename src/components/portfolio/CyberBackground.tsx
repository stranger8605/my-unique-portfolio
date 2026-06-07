import React, { useEffect, useRef } from "react";

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      text: string;
      size: number;
      baseAlpha: number;
      alpha: number;
    }> = [];

    // Count dynamically scales with window size
    const particleCount = Math.min(85, Math.floor((width * height) / 14000));
    const mouse = { x: -1000, y: -1000, radius: 180 };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        text: Math.random() > 0.5 ? "1" : "0",
        size: Math.floor(Math.random() * 5) + 11, // 11px to 15px font
        baseAlpha: Math.random() * 0.2 + 0.1, // Subtle baseline opacity
        alpha: 0,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & Draw Particles
      particles.forEach((p) => {
        // Attraction physics
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          // Pull towards mouse slightly
          p.vx += (dx / dist) * force * 0.08;
          p.vy += (dy / dist) * force * 0.08;
          // Increase opacity as it attracts
          p.alpha = Math.min(0.7, p.baseAlpha + force * 0.4);
        } else {
          p.alpha = p.baseAlpha;
        }

        // Apply friction & speed limit
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 1.5;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off screen boundaries
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > height) { p.y = height; p.vy *= -1; }

        // Render binary text
        ctx.font = `500 ${p.size}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = `rgba(14, 165, 233, ${p.alpha})`; // Cyan primary color
        ctx.fillText(p.text, p.x, p.y);
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(p1.x, p1.y - 4); // Center offset
            ctx.lineTo(p2.x, p2.y - 4);
            ctx.stroke();
          }
        }

        // Draw line connections to user cursor
        const p = particles[i];
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 160) {
          const alpha = (1 - dist / 160) * 0.22;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.moveTo(p.x, p.y - 4);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CyberBackground;
