// import Link from 'next/link'
'use client'
// push replace back forward
import React from 'react'
import { useRouter } from 'next/navigation'

function routerEvents() {
    const router=useRouter()
  return (
    <>
      <div className='flex flex-col items-center'>
        <p>Router events</p>
        <br></br>
        {/* <button className='bg-green-600 p-2 text-white'><Link href="/review">go to review page</Link></button> */}
        <button className='bg-green-600 p-2 text-white' onClick={()=>router.push('/content', { scroll: false })}>go to review page</button>
      {/* router.replace  which doesnt add entry in history stack */}
        {/* <button className='bg-green-600 p-2 text-white' onClick={()=>router.replace('/review')}>go to review page</button> */}
        {/* <button className='bg-green-600 p-2 text-white' onClick={()=>router.back()}>go back</button> */}
        {/* <button className='bg-green-600 p-2 text-white' onClick={()=>router.forward()}>go forward</button> */}
      </div>
    </>
  )
}

export default routerEvents


// 'use client'
 
// import { useRouter } from 'next/navigation'
 
// export default function Page() {
//   const router = useRouter()
 
//   return (
//     <button
//       type="button"
//       onClick={() => router.push('/review', { scroll: false })}
//     >
//       Review
//     </button>
//   )
// }
