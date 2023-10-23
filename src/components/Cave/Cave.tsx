import React from 'react';
import styles from './Cave.module.scss';

const Cave: React.FC<{ caveData: { left: number; right: number }[] }> = ({
  caveData,
}) => {
  const caveWidth = 500; // Ширина пещеры (можете настраивать)
  const wallHeight = 10; // Высота стен пещеры (можете настраивать)

  // Вычисление высоты svg на основе количества caveData элементов и wallHeight
  const svgHeight = caveData.length * wallHeight;

  return (
    <div className={styles.wrapper}>
      <svg width={caveWidth} height={svgHeight}>
        {/* Визуализация пещеры на основе caveData */}
        <rect x={0} y={0} width={caveWidth} height={svgHeight} fill="gray" />
        {caveData.length > 0 &&
          caveData.map((data, index) => {
            const rectY = index * wallHeight; // Определение текущего смещения по y

            // Проверяем, что data.left является числом
            const isNumericLeft = !isNaN(data.left);

            // Создаем серый rect, который покрывает всю ширину svg
            const grayRect = (
              <rect
                x={0}
                y={rectY}
                width={caveWidth}
                height={wallHeight}
                fill="gray"
                key={`${index}-gray`}
              />
            );

            // Создаем зеленый rect только в области между data.left и data.right
            const greenRect = (
              <rect
                x={
                  isNumericLeft
                    ? data.left < 0
                      ? caveWidth / 2 - Math.abs(data.left)
                      : caveWidth / 2 + Number(data.left)
                    : 0 // Значение по умолчанию, если data.left не является числом
                }
                y={rectY}
                width={isNumericLeft ? data.right - data.left : 0}
                height={wallHeight}
                fill="green"
                key={index}
              />
            );

            return [grayRect, greenRect];
          })}
      </svg>
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
