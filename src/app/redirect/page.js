"use client"
import React, { useEffect }  from 'react'
import { useRouter } from 'next/navigation';

function redirect() {
    const Router=useRouter()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          Router.push('/home'); // Replace '/home' with the desired target path
        }, 3000); // Delay in milliseconds
    
        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
      }, []); // Empty dependency array to run the effect only once

    
  return (
    <div>
      <p>this is redirect page</p>
    </div>
  )
}

export default redirect;
