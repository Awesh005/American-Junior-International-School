import React from 'react';
import { motion } from 'framer-motion';

interface ShapeProps {
  type: 'blob' | 'star' | 'circle' | 'square';
  color: string;
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  duration?: number;
}

const Shape: React.FC<ShapeProps> = ({ type, color, size, top, left, right, bottom, delay = 0, duration = 10 }) => {
  const shapeClass = {
    blob: 'shape-blob',
    star: 'shape-star',
    circle: 'shape-circle',
    square: 'shape-square',
  }[type];

  return (
    <motion.div
      className={`cartoon-shape ${shapeClass}`}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ delay, duration: 1 }}
    />
  );
};

const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <Shape type="blob" color="#FF6B6B" size="300px" top="-100px" left="-50px" delay={0.2} />
      <Shape type="circle" color="#4D96FF" size="150px" top="20%" right="5%" delay={0.5} />
      <Shape type="star" color="#FFD93D" size="100px" bottom="15%" left="10%" delay={0.8} />
      <Shape type="square" color="#6BCB77" size="120px" bottom="10%" right="15%" delay={1.1} />
      <Shape type="blob" color="#9F7AEA" size="250px" top="40%" left="80%" delay={1.4} />
      <Shape type="circle" color="#F6AD55" size="80px" top="60%" left="5%" delay={1.7} />
    </div>
  );
};

export default FloatingShapes;
