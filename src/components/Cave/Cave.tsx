import React from 'react';
import styles from './Cave.module.scss';

const Cave: React.FC<{ caveData: { left: number; right: number }[] }> = ({
  caveData,
}) => {
  const caveWidth = 500; // Ширина пещеры (можете настраивать)
  const wallHeight = 10; // Высота стен пещеры (можете настраивать)

  return (
    <div className={styles.wrapper}>
      {caveData.map((data, index) => {
        return (
          <svg width={caveWidth} height={wallHeight} key={index}>
            {/* Визуализация пещеры на основе caveData */}
            <>
              {' '}
              <rect
                x={0}
                y={0}
                width={caveWidth}
                height={wallHeight}
                fill="gray"
              />
              <rect
                x={
                  data.left < 0
                    ? caveWidth / 2 - Math.abs(data.left)
                    : caveWidth / 2 + Number(data.left)
                }
                y={0}
                width={data.right - data.left}
                height={wallHeight}
                fill="green"
              />
            </>
          </svg>
        );
      })}
      <svg
        width="15"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.drone}
      >
        <polygon points="0,0 7.5,15 15,0" fill="blue" />
      </svg>
    </div>
  );
};

export default Cave;
