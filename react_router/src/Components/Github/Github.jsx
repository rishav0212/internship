import React, { useEffect, useState } from 'react';


function Github() {
    const [user, setuser] = useState('rishav0212')    
    const [data, setdata] = useState([])

    useEffect(()=>{
        const url = 'https://api.github.com/users/' + user
        fetch(url).then(res=>res.json()
        .then(data=>{
            setdata(data)
        }))
    },[user])


    return ( 
        <div className=' text-2xl p-28 text-center h-72 text-gray-100 bg-orange-400'>
            <input type="text" onChange={(e)=>{setuser(e.target.value)}} className='text-gray-700' />
            <h2>NAME : {user}</h2>
            <h2>FOLLOWERS : {data.followers}</h2>
        </div>
     );
}

export default Github;