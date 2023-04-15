import React from 'react'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'

export default async function UsersPage() {
  const userData: Promise<User[]> = getAllUsers()
  const users = await userData

    
  return (
    <div className="text-center  ">      
    <h2 className="text-sm text-right m-5"><Link href='/'>Back to Home</Link></h2>
        
      <section >
        <div className="flex justify-center bg-blue-900">
          <h1 className="text-xl font-extrabold divide-y my-5"> Authors List </h1>
        </div>
        
        <div className="divide-y w-9/10 white"></div>

        { users.map( user => (
          <div key={user.id} className="my-2 py-2">
            <Link href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </div>
        ))}

      </section>    
    </div>
  )
}
