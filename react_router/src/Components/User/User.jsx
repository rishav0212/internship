import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {id} = useParams()
    return ( 
        <div className='bg-gray-500 text-3xl text-center text-white'>
        User : {id.toUpperCase()}
        </div>
     );
}

export default User;