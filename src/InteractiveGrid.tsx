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
    let baseOffsetX = 0;
    let baseOffsetY = 0;
    let gridRadius = 0;
    
    // Global mouse tracking
    let mouseX = -1000;
    let mouseY = -1000;
    let lastHoveredKey = '';
    
    const updateSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      baseOffsetX = width / 2;
      baseOffsetY = height / 2;
      
      // Calculate how many tiles we need to draw to cover the screen
      gridRadius = Math.ceil(Math.max(width / (TILE_W / 2), height / (TILE_H / 2))) + 2;
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    const activeCells = new Map<string, { color: string, alpha: number }>();
    let animationFrameId: number;

    const drawPolygon = (r: number, c: number, fillStyle: string, alpha: number, currentOffsetY: number) => {
      const sx = (c - r) * (TILE_W / 2) + baseOffsetX;
      const sy = (c + r) * (TILE_H / 2) + currentOffsetY;

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

    const activateCell = (sx: number, sy: number, currentOffsetY: number) => {
      if (sx < 0 || sy < 0) return;
      
      const dx = (sx - baseOffsetX) / (TILE_W / 2);
      const dy = (sy - currentOffsetY) / (TILE_H / 2);

      const c = Math.floor((dx + dy) / 2);
      const r = Math.floor((dy - dx) / 2);

      const key = `${r},${c}`;
      
      // Only activate if we moved to a new cell
      if (key !== lastHoveredKey) {
        lastHoveredKey = key;
        activeCells.set(key, {
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 0.8,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Create a subtle parallax scroll effect (grid moves slower than the page)
      const currentOffsetY = baseOffsetY - (window.scrollY * 0.5);

      // Check which cell is currently under the mouse, taking scroll into account
      activateCell(mouseX, mouseY, currentOffsetY);

      // Draw active cells first (filled)
      activeCells.forEach((cell, key) => {
        const [r, c] = key.split(',').map(Number);
        drawPolygon(r, c, cell.color, cell.alpha, currentOffsetY);
        
        cell.alpha -= 0.015; // fade out speed
        if (cell.alpha <= 0) {
          activeCells.delete(key);
        }
      });

      // Calculate visible center based on scroll
      const center_dy = (window.scrollY * 0.5) / (TILE_H / 2);
      const center_c = Math.floor(center_dy / 2);
      const center_r = Math.floor(center_dy / 2);

      // Draw Grid Lines
      ctx.globalAlpha = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let i = -gridRadius; i <= gridRadius; i++) {
        const r_idx = center_r + i;
        const c_start = center_c - gridRadius;
        const c_end = center_c + gridRadius;
        
        // Line along row r_idx
        const sx1 = (c_start - r_idx) * (TILE_W / 2) + baseOffsetX;
        const sy1 = (c_start + r_idx) * (TILE_H / 2) + currentOffsetY;
        const sx2 = (c_end - r_idx) * (TILE_W / 2) + baseOffsetX;
        const sy2 = (c_end + r_idx) * (TILE_H / 2) + currentOffsetY;
        ctx.moveTo(sx1, sy1);
        ctx.lineTo(sx2, sy2);

        const c_idx = center_c + i;
        const r_start = center_r - gridRadius;
        const r_end = center_r + gridRadius;

        // Line along col c_idx
        const sx3 = (c_idx - r_start) * (TILE_W / 2) + baseOffsetX;
        const sy3 = (c_idx + r_start) * (TILE_H / 2) + currentOffsetY;
        const sx4 = (c_idx - r_end) * (TILE_W / 2) + baseOffsetX;
        const sy4 = (c_idx + r_end) * (TILE_H / 2) + currentOffsetY;
        ctx.moveTo(sx3, sy3);
        ctx.lineTo(sx4, sy4);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      lastHoveredKey = '';
    };

    // Attach to window so it captures mouse events globally, even if canvas is under other elements
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
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
