import React, { useEffect } from 'react';

export const WebSocketComponent: React.FC<{
  id: string;
  token: string;
  onCaveDataReceived: (data: { left: number; right: number }) => void;
}> = ({ id, token, onCaveDataReceived }) => {
  useEffect(() => {
    const socket = new WebSocket('wss://cave-drone-server.shtoa.xyz/cave');

    socket.addEventListener('open', () => {
      const playerInfo = `player:${id}-${token}`;
      socket.send(playerInfo);
    });

    socket.addEventListener('message', event => {
      console.log(event.data);
      if (event.data) {
        const [left, right] = event.data.split(',');
        onCaveDataReceived({ left, right });
        if (left === 'finished') {
          socket.close(); // Закрыть соединение после получения "finished"
        }
      }
    });

    socket.addEventListener('close', () => {
      // Соединение закрыто
    });

    // return () => {
    //   socket.close();
    // };
  }, [id, token]);
  return null;
};
