import { useEffect, useState } from 'react';
import { WebSocketComponent } from '../WebSocketComponent/WebSocketComponent';
import { getTokenChunk, initGame } from '../../api';
import Cave from '../Cave/Cave';

const Game = () => {
  const [playerId, setPlayerId] = useState<string>('');
  const [playerToken, setPlayerToken] = useState<string>('');
  const [caveData, setCaveData] = useState<{ left: number; right: number }>({
    left: 0,
    right: 0,
  });

  useEffect(() => {
    // Инициализация игры и получение данных о токене
    initGame('PlayerName', 5).then(id => {
      setPlayerId(id);
      const tokenPromises = [1, 2, 3, 4].map(chunkNo =>
        getTokenChunk(id, chunkNo),
      );
      Promise.all(tokenPromises).then(chunks => {
        const token = chunks.map(data => data.chunk).join('');
        console.log(token);
        setPlayerToken(token);
      });
    });
  }, []);

  const handleCaveDataReceived = (data: { left: number; right: number }) => {
    setCaveData(data);
    // Дополнительная логика обработки данных о пещере
  };

  return (
    <div>
      <WebSocketComponent
        id={playerId}
        token={playerToken}
        onCaveDataReceived={handleCaveDataReceived}
      />
      <Cave caveData={caveData} />
    </div>
  );
};

export default Game;
