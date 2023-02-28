import React, { useRef, useEffect } from 'react';

type Props = {};

function sf({}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(https://steamuserimages-a.akamaihd.net/ugc/930437282871892098/434BA38F50B7EBAB6AC19ABB9D7282452D1E8A75/)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      />
      <div style={{ zIndex: 1 }}>
        <h1>sf</h1>
      </div>
    </div>
  );
}

export default sf;