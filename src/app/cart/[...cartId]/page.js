
"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

function  cart({params}) {
  const path=usePathname()
  console.log(params)
  return (
    <>
    <p>this is cart :{params.cartId[0]}</p>
    <p>this is name :{params.cartId[1]}</p>
    <p>{path}</p>
      
    </>
  )
}

export default  cart



