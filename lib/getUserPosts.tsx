
export default async function getUserPosts( userId: string) {
  const userPostsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  
  const res = await fetch( userPostsUrl , { next: { revalidate: 60}})
  
  if ( !res.ok ) return undefined
  //throw new Error('Failed to fetch users' )

  return res.json()  
}