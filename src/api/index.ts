import axios from 'axios';

export const initGame = async (name: string, complexity: number) => {
  const res = await axios.post('https://cave-drone-server.shtoa.xyz/init', {
    name,
    complexity,
  });
  return res.data.id;
};

export const getTokenChunk = async (id: string, chunkNo: number) => {
  const res = await axios.get(
    `https://cave-drone-server.shtoa.xyz/token/${chunkNo}`,
    {
      params: { id },
    },
  );

  return res.data;
};
