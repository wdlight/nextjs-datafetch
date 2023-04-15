
export default async function getUserPosts( userId: string) {
  const userPostsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  console.log ( " 🔴🔴🔴", userPostsUrl )
  const res = await fetch( userPostsUrl )
  
  if ( !res.ok ) throw new Error('Failed to fetch users' )

  return res.json()  
}