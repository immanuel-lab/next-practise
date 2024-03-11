import React from 'react'


 async function notification() {
     await new Promise(resolve=>setTimeout(resolve,3000))

  return (
    <>
    <p className='text-center text-2xl'>This is notification page</p>
      
    </>
  )
}

export default notification





