import { useEffect, useRef } from "react";

const AudioVisualizer = ({ completed, songDuration }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (completed === 0) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      return;
    }

    let barWidth = songDuration / context.canvas.width;
    let barHeight =
      Math.floor((Math.random() * context.canvas.height) / 2) +
      context.canvas.height / 4;
    let startY = context.canvas.height - barHeight;

    context.fillStyle = "#0fd55a";
    context.fillRect(completed + barWidth, startY, barWidth, barHeight);
  }, [completed]);

  return <canvas ref={canvasRef} />;
};

export default AudioVisualizer;
