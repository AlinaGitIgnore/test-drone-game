import axios from 'axios';

export const initGame = (name: string, complexity: number) => {
  return axios.post('https://cave-drone-server.shtoa.xyz/init', { name, complexity });
};

export const getTokenChunk = (id: string, chunkNo: number) => {
  return axios.get(`https://cave-drone-server.shtoa.xyz/token/${chunkNo}`, { params: { id } });
};