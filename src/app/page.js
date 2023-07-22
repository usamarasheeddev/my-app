import React from 'react'
import { notFound } from 'next/navigation'
import { fetchUsers } from '../../utils/users'
import Link from 'next/link'
export default async function page() {

  const users = await fetchUsers()
  return (
    <div>
      <Link href={'/about'} >About</Link>
      <Link href={'/about/contact'} >Contact</Link>

      <div style={{ marginTop: '2rem',display:'flex',flexDirection:'column' }}>
        {

          users?.map((user) => {
            return <Link href={`/users/${user.id}`}>{user.name}</Link>
          })
        }

      </div>

    </div>
  )
}
