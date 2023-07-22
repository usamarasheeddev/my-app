import React from 'react'
import { fetchUserPosts } from '../../../../utils/users'

export default async function posts({params}) {

    const posts =await fetchUserPosts(params)
  return (
    <div>{
        posts?.map((post)=>{
            return <p key={post.title}>{post.title}</p>
        })
    }
      
    </div>
  )
}
