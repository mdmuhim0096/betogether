// MatrixRain.jsx
import React, { useRef, useEffect, useCallback } from "react";

const MatrixRain = ({
  speed = 1.0,
  fontSize = 16,
  alphaFade = 0,
  color = "#000",
  chars = "01",
  backgroundFill = `rgba(0, 0, 0, ${alphaFade})`,
  style = {},
  density = 1.0,      // controls how many columns
  columnGap = 1.2,    // horizontal spacing between columns
  lineHeight = 1.2,   // vertical spacing between characters
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const columnsRef = useRef([]);
  const ctxRef = useRef(null);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctxRef.current = ctx;

    // calculate number of columns based on font size, gap, and density
    const cols = Math.floor((w / (fontSize * columnGap)) * density);
    columnsRef.current = new Array(cols).fill(0).map(() => ({
      y: Math.floor(Math.random() * -20),
      speed: (Math.random() * 1.2 + 0.4) * speed,
      changeInterval: Math.floor(Math.random() * 30 + 10),
      tick: 0,
    }));

    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = "top";
  }, [fontSize, speed, density, columnGap]);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = ctxRef.current || canvas.getContext("2d");
    ctxRef.current = ctx;

    const randChar = () => chars[Math.floor(Math.random() * chars.length)];

    function draw() {
      const ctx = ctxRef.current;
      if (!ctx) return;

      // fade previous frame
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      const cols = columnsRef.current;

      for (let i = 0; i < cols.length; i++) {
        const col = cols[i];
        col.tick++;
        if (col.tick % (col.changeInterval || 20) === 0) {
          col.speed = (Math.random() * 1.2 + 0.4) * speed;
        }

        const colColor =
          typeof color === "function" ? color(i) : color;

        const x = i * fontSize * columnGap;
        const yPx = col.y * fontSize * lineHeight;

        // bright head
        ctx.fillStyle = "#ff0066";
        ctx.fillText(randChar(), x, yPx);

        // trailing characters
        for (let t = 1; t < 6; t++) {
          const trailY = yPx - t * fontSize * lineHeight;
          if (trailY < 0) break;
          const alpha = Math.max(0, 1 - t * 0.15);
          ctx.fillStyle = applyAlphaToColor(colColor, alpha);
          ctx.fillText(randChar(), x, trailY);
        }

        col.y += col.speed;
        if (col.y * fontSize * lineHeight > canvas.clientHeight + Math.random() * 1000) {
          col.y = Math.floor(Math.random() * -20);
          col.speed = (Math.random() * 1.2 + 0.4) * speed;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    function applyAlphaToColor(colorStr, alpha) {
      if (colorStr.startsWith("rgba"))
        return colorStr.replace(/rgba\(([^)]+),\s*([01]?\.?\d*)\)/, `rgba($1, ${alpha})`);
      if (colorStr.startsWith("rgb("))
        return colorStr.replace("rgb(", "rgba(").replace(")", `, ${alpha})`);
      if (colorStr.startsWith("#")) {
        try {
          const hex = colorStr.slice(1);
          const bigint = parseInt(
            hex.length === 3 ? hex.split("").map(c => c + c).join("") : hex,
            16
          );
          const r = (bigint >> 16) & 255;
          const g = (bigint >> 8) & 255;
          const b = bigint & 255;
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        } catch {
          return colorStr;
        }
      }
      return colorStr;
    }

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [chars, speed, fontSize, color, backgroundFill, columnGap, lineHeight]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        background: "transparent", // transparent background
        ...style,
      }}
    />
  );
};

export default MatrixRain;
