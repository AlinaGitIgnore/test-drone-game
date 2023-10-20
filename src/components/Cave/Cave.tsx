import React from 'react';

const Cave: React.FC<{ caveData: { left: number; right: number } }> = ({
  caveData,
}) => {
  const caveWidth = 500; // Ширина пещеры (можете настраивать)
  const wallHeight = 10; // Высота стен пещеры (можете настраивать)

  return (
    <div style={{ backgroundColor: 'grey', width: '100%', height: '100vh' }}>
      <svg width={caveWidth} height={wallHeight}>
        {/* Визуализация пещеры на основе caveData */}
        <rect
          x={caveData.left}
          y={0}
          width={caveData.right - caveData.left}
          height={wallHeight}
          fill="green"
        />
        {/* Визуализация дрона */}
        <polygon points="droneX1,0 droneX2,0 droneX3,droneHeight" fill="blue" />
      </svg>
    </div>
  );
};

export default Cave;
