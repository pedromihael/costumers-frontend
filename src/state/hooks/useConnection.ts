import axios, { AxiosInstance } from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export const useConnection = (): AxiosInstance => {
  const connection = axios.create({
    baseURL: process.env.API_URL,
  });

  return connection;
};
