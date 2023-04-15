
export default async function getUser( userId: string) {
  const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
  
  const res = await fetch(userUrl,  { next: { revalidate: 60}})
  
  if ( !res.ok ) return undefined
    //throw new Error('Failed to fetch user' )

  return res.json()  
}