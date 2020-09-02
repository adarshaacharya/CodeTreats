import React from 'react';
import RoomContext from '_context/room/room.context';

const Editor = () => {
    const { room } = React.useContext(RoomContext);
    return (
        <>
            <h1>{room?.roomName}</h1>
        </>
    );
};

export default Editor;
