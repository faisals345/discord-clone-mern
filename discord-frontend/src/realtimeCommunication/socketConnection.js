import io from 'socket.io-client';

let socket = null;
export const connectWithSocketServer=(userDetails)=>{
    socket = io('http://localhost:5002');

    socket.on('connect',()=>{
        console.log("successfully connected with socket io ");
        console.log(socket.id);
    });
};