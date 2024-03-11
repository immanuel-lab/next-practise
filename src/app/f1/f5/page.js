import Link from 'next/link'
import React from 'react'

function f5() {
  return (
    <div>
      <p>this is f5 page </p>
      <p><Link href={'/cart'}>go to cart page</Link></p>
    </div>
  )
}

export default f5
