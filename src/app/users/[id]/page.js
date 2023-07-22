import React, { Suspense } from 'react'
import { fetchUser } from '../../../../utils/users'
import Post from './posts'
import { notFound } from 'next/navigation'


//disable all dynamic routes
// export const dynamicParams=false

//Static Rendring
export const generateStaticParams = async () => {
    return [
        {
            id: "1"
        },
        {
            id: "2"
        },
        {
            id: "3"
        },
    ]
    //now it will render only ids array statically
}


//Changing metadata 
export const generateMetadata = async ({ params }) => {
    const user = await fetchUser(params.id)
    return { title: `${user.name}'s profile ` }
}

export default async function page({ params }) {
    const user = await fetchUser(params.id)
    if(!user.id){
        return notFound()
    }

    // console.log(params.id)
    return (
        <div>

            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <br />
            <p>posts</p>
            <Suspense fallback={<p>Loading.....</p>}>
                <Post params={params.id} />
            </Suspense>


        </div>
    )
}
