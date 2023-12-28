import React from 'react';
import Link from 'next/link';

function AboutUs() {
    return ( 
        <div>
            <Link href ="/login"> Go to Login Page</Link>
            <Link href ="/"> Go to Home Page</Link>
        </div>
     );
}

export default AboutUs;