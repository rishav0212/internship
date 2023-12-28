import React from 'react';
import Link from 'next/link';

export default function Login(){
    return (
        <div>
            Login
            <Link href ="/"> Go to Home Page</Link> <br />
            <Link href ="/aboutus"> Go to AboutUS Page</Link>
        </div>
    )
}