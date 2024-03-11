import Link from 'next/link'
import React from 'react'

function f1() {
  return (
    <div>
      <p>this is f1 and  <span className='underline'><Link href='f1/f2' >go to f2</Link> </span> </p>
    </div>
  )
}

export default f1
