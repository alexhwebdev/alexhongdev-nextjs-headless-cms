import { useState, useEffect } from "react";

interface MousePosition {
  x: number;
  y: number;
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>(
    { x: 0, y: 0 }
  );

  const updateMousePosition = (event: MouseEvent) => {
    setMousePosition({ 
      x: event.clientX, 
      y: event.clientY
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;