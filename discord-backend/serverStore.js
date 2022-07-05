const connectedUsers = new Map();

const addNewConnectedUser = ({socketID,userID}) => {

    connectedUsers.set(socketID,{userID});
    console.log('new connected user');
    console.log(connectedUsers);

};

const removeConnectedUser = (socketId)=>{
    if(connectedUsers.has(socketId)){
        connectedUsers.delete(socketId);
        console.log('new connected User');
        console.log(connectedUsers);
    }
}


module.exports = {
    addNewConnectedUser,
    removeConnectedUser,
};