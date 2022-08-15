import React from 'react';
import User from './User';

const Users = () => {
    const handleAddUser=(): void=>{

    }
    return (
        <div>
            <h1>This is user</h1>
            <User name='Anirban' age={35} addUser={handleAddUser}></User>
        </div>
    );
};

export default Users;