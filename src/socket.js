import { io } from 'socket.io-client';

const URL = 'https://localhost:4000/coin';

export const socket = io(URL);
