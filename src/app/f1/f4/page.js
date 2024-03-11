import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <p>this is f4 pgae </p>
      <p><Link href={'/f1/f3'}>go to f3 page</Link></p>
    </div>
  )
}

export default page
