import React, { useEffect, useRef } from 'react';

const COLORS = ['#0ea5e9', '#22c55e', '#eab308', '#ef4444', '#8b5cf6', '#ec4899'];

export const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CELL_SIZE = 45;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    const updateSize = () => {
      const maxDim = Math.max(window.innerWidth, window.innerHeight);
      // Make it large enough to cover the screen even when rotated
      width = maxDim * 2.5; 
      height = maxDim * 2.5;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      cols = Math.floor(width / CELL_SIZE);
      rows = Math.floor(height / CELL_SIZE);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    const activeCells = new Map<string, { color: string, alpha: number }>();
    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw active cells
      activeCells.forEach((cell, key) => {
        const [x, y] = key.split(',').map(Number);
        ctx.fillStyle = cell.color;
        ctx.globalAlpha = cell.alpha;
        ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        
        cell.alpha -= 0.015; // fade out speed
        if (cell.alpha <= 0) {
          activeCells.delete(key);
        }
      });

      // Draw grid lines
      ctx.globalAlpha = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let i = 0; i <= cols; i++) {
        ctx.moveTo(i * CELL_SIZE, 0);
        ctx.lineTo(i * CELL_SIZE, height);
      }
      for (let i = 0; i <= rows; i++) {
        ctx.moveTo(0, i * CELL_SIZE);
        ctx.lineTo(width, i * CELL_SIZE);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      const x = Math.floor(e.offsetX / CELL_SIZE);
      const y = Math.floor(e.offsetY / CELL_SIZE);
      
      const key = `${x},${y}`;
      if (!activeCells.has(key)) {
        activeCells.set(key, {
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 0.8, // Initial opacity
        });
      } else {
         const cell = activeCells.get(key);
         if (cell && cell.alpha < 0.5) {
             cell.alpha = 0.8;
             cell.color = COLORS[Math.floor(Math.random() * COLORS.length)];
         }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center bg-[#0a0a0a]">
      {/* Background gradient to fade the edges seamlessly into the body background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_75%)] z-10"></div>
      
      {/* Decorative glows placed over the grid */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/20 blur-[100px] opacity-40 rounded-full z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#caff00]/20 blur-[100px] opacity-20 rounded-full z-10 pointer-events-none"></div>

      <canvas
        ref={canvasRef}
        className="pointer-events-auto absolute top-1/2 left-1/2"
        style={{
          transform: 'translate(-50%, -50%) rotateX(60deg) rotateZ(-45deg)',
          transformStyle: 'preserve-3d',
        }}
      />
    </div>
  );
};
