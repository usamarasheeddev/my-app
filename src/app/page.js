import React from 'react'
import {notFound} from 'next/navigation'
import Link from 'next/link'
export default function page() {
  return (
    <div>
    <Link href={'/about'} >About</Link>
    <Link href={'/about/contact'} >Contact</Link>
      
    </div>
  )
}
