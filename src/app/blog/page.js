// contains ways to navigate
// using link tag
// use useRouter
// native History API


// 'use client'

// import React from 'react'
// import { usePathname,useRouter } from 'next/navigation'



// function page() {
//     const pathname=usePathname();
//     const router=useRouter();
//   return (
//     <>
//       <h1>The current pathname is: {pathname}</h1>
//       {pathname === '/blog' && <p>You're on the blog page!</p>}
//       <button  
//       className="p-3 bg-green-600 text-white"
//       type="button" 
//       onClick={() => router.push('/home')}>
//       go to home
//     </button>
//     </>
//   )
// }

// export default page



// import React from 'react'
// import Link from 'next/link'

// function page() {
//   return (
//     <>
//     <h1>go to home page </h1>
//     <button className="p-3 bg-green-600 text-white">
//         <Link href="/home">
//         back to home
//       </ Link>
//       </button>
//     </>
//   )
// }

// export default page



// 'use client'
 
// import { useSearchParams } from 'next/navigation'
 
// export default function page() {
//   const searchParams = useSearchParams()
 
//   function updateSorting(sortOrder) {
//     const params = new URLSearchParams(searchParams.toString())
//     params.set('sort', sortOrder)
//     window.history.pushState(null, '', `?${params.toString()}`)
//   }
 
//   return (
//     <>
//       <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
//       <button onClick={() => updateSorting('desc')}>Sort Descending</button>
//     </>
//   )
// }

      
      




 

 
