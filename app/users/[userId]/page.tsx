import React from 'react'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  return {
      title: user.name,
      description: `This is the page of ${user.name}`
  }

}


export default async function UserPage( { params: { userId } }: Params) {
  const userData: Promise<User> = getUser( userId )
  const userPostsData: Promise<Post[]> = getUserPosts( userId )

  //const [user, userPosts] = await Promise.all ( [userData, userPostsData ])
  const user: User = await userData

  return (
    <div>
      <section className="m-10">
        <div className="flex justify-end m-5 text-sm">
          <Link href={`/users/`} >back to authors</Link>
        </div>
        <h2 className="text-center mt-5 text-xl font-extrabold">Author : {user.name}</h2>
        <br/>
        <Suspense fallback={ <h2>Loading ...</h2> }>
           {/* @ts-expect-error Server Component */}
          <UserPosts promise={userPostsData} />
        </Suspense>

        {/* { userPosts.map( post => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title} 
              
            </Link><br />
            {post.body}
          </div>
        ))} */}

      </section>    
    </div>
  )
}
