import React, { useEffect, useRef } from 'react';

const COLORS = ['#0ea5e9', '#22c55e', '#eab308', '#ef4444', '#8b5cf6', '#ec4899'];

export const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    
    // Isometric Tile Dimensions
    const TILE_W = 80;
    const TILE_H = 40;
    let offsetX = 0;
    let offsetY = 0;
    let gridRadius = 0;
    
    const updateSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      offsetX = width / 2; // Center horizontally
      offsetY = height / 2; // Center vertically
      
      // Calculate how many tiles we need to draw to cover the screen
      gridRadius = Math.ceil(Math.max(width / (TILE_W / 2), height / (TILE_H / 2))) + 2;
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    const activeCells = new Map<string, { color: string, alpha: number }>();
    let animationFrameId: number;

    const drawPolygon = (r: number, c: number, fillStyle: string, alpha: number) => {
      const sx = (c - r) * (TILE_W / 2) + offsetX;
      const sy = (c + r) * (TILE_H / 2) + offsetY;

      ctx.globalAlpha = alpha;
      ctx.fillStyle = fillStyle;
      ctx.beginPath();
      ctx.moveTo(sx, sy - TILE_H / 2); // Top
      ctx.lineTo(sx + TILE_W / 2, sy); // Right
      ctx.lineTo(sx, sy + TILE_H / 2); // Bottom
      ctx.lineTo(sx - TILE_W / 2, sy); // Left
      ctx.closePath();
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw active cells first (filled)
      activeCells.forEach((cell, key) => {
        const [r, c] = key.split(',').map(Number);
        drawPolygon(r, c, cell.color, cell.alpha);
        
        cell.alpha -= 0.015; // fade out speed
        if (cell.alpha <= 0) {
          activeCells.delete(key);
        }
      });

      // Draw Grid Lines
      ctx.globalAlpha = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let i = -gridRadius; i <= gridRadius; i++) {
        // Line along row i (constant r)
        const sx1 = (-gridRadius - i) * (TILE_W / 2) + offsetX;
        const sy1 = (-gridRadius + i) * (TILE_H / 2) + offsetY;
        const sx2 = (gridRadius - i) * (TILE_W / 2) + offsetX;
        const sy2 = (gridRadius + i) * (TILE_H / 2) + offsetY;
        ctx.moveTo(sx1, sy1);
        ctx.lineTo(sx2, sy2);

        // Line along col i (constant c)
        const sx3 = (i - (-gridRadius)) * (TILE_W / 2) + offsetX;
        const sy3 = (i + (-gridRadius)) * (TILE_H / 2) + offsetY;
        const sx4 = (i - gridRadius) * (TILE_W / 2) + offsetX;
        const sy4 = (i + gridRadius) * (TILE_H / 2) + offsetY;
        ctx.moveTo(sx3, sy3);
        ctx.lineTo(sx4, sy4);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      const sx = e.clientX;
      const sy = e.clientY;

      // Inverse isometric projection to find grid coordinates (r, c)
      const dx = (sx - offsetX) / (TILE_W / 2);
      const dy = (sy - offsetY) / (TILE_H / 2);

      const c = Math.floor((dx + dy) / 2);
      const r = Math.floor((dy - dx) / 2);

      const key = `${r},${c}`;
      
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

    // Attach to window so it captures mouse events globally, even if canvas is under other elements
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#0a0a0a]">
      <canvas ref={canvasRef} className="block" />
      
      {/* Background gradient to fade the edges seamlessly into the body background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_85%)] z-10"></div>
      
      {/* Decorative glows placed over the grid */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/20 blur-[100px] opacity-40 rounded-full z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#caff00]/20 blur-[100px] opacity-20 rounded-full z-10 pointer-events-none"></div>
    </div>
  );
};
