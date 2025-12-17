"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface MatrixBackgroundProps {
  imageUrl: string;
  imageAlt?: string;
  className?: string;
}

export default function MatrixBackground({
  imageUrl,
  imageAlt = "Background image",
  className = "",
}: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize and run the matrix animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Making the canvas full screen
    const resizeCanvas = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };

    // Handle window resize
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Matrix characters
    const matrix =
      "0123456789abcdefABCDEF₿ΞΨ♦️₮Ł∞☰⧉Ω◈⬢⌘฿◊{}[]()<>_|:;,.+-*/=~!@#$%^&*0x1x2x3xf9b4b2f1c9d8a7e6c5b4a30x1234567890xdefi0xenable0xswap0xabcdef";

    const matrixChars = matrix.split("");

    const font_size = 10;
    const columns = canvas.width / font_size; // Number of columns for the rain

    // An array of drops - one per column
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * canvas.height);
    }

    // Drawing the characters
    const draw = () => {
      // Black BG for the canvas with opacity to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 0.6;
      ctx.fillStyle = "#47D8A3"; // Green primary color theme
      ctx.font = font_size + "px arial";

      // Looping over drops
      for (let i = 0; i < drops.length; i++) {
        // Random character to print
        const text =
          matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        // Sending the drop back to the top randomly after it has crossed the screen
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Incrementing Y coordinate
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 55);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Matrix Canvas Background */}
      <div className='absolute inset-0'>
        <canvas ref={canvasRef} className='w-full h-full rounded-3xl' />
      </div>

      {/* Content Container with Image */}
      <div className='relative container mx-auto px-10 pt-10'>
        <div className='w-full h-auto relative'>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={1296}
            height={670}
            className='object-contain w-full'
            style={{ maxHeight: "calc(100vh - 200px)" }}
          />
        </div>
      </div>
    </div>
  );
}
