import React from 'react'

type Props = {
  promise: Promise<Post[]>
}

export default async function UserPosts( { promise }: Props ) {
  const posts = await promise;
  return (
    

    //create a new div element with 3 columns grid for large screen, 1 column for small screen and mouse hover effect on the cards
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 hover:shadow-lg">    
      
      { 
        posts.map( post => (
          // create a new article element with a card effect
          <div className="max-w-sm p-3" key={post.id}>
            <article 
              className="mx-2 p-2  bg-gray-900 divide-y
                  hover:bg-gray-800 hover:scale-x-15 hover:scale-y-105  transition-all duration-500
                  border-2 border-slate-700 rounded-lg shadow-lg "
            >            
                <h2 className="font-bold text-gray-200 text-xl my-2 ">title: {post.title}</h2>
                
                <p className="text-gray-400 pt-2">
                  {post.body}
                </p>            
            </article>          
          </div>
        ))
      }

    </div>
  )
}
