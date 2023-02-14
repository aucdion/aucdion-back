import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.neople.co.kr/df',

  params: {
    apikey: process.env.NEOPLE_API_KEY,
  },
});
