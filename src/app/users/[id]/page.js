import React, { Suspense } from 'react'
import { fetchUser } from '../../../../utils/users'
import Post from './posts'
export default async function page({ params }) {

    console.log(params.id)
    const user = await fetchUser(params.id)
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
