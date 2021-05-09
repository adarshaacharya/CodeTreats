import io from 'socket.io-client';

const ENDPOINT = process.env.NODE_ENV === 'production' ? 'http://codetreats.herokuapp.com' : 'http://localhost:5000';

const socket = io(ENDPOINT);
export default socket;
