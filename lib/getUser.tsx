
export default async function getUser( userId: string) {
  const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
  console.log ( " 🚀 🚀 🚀", userUrl )
  const res = await fetch(userUrl)
  
  if ( !res.ok ) throw new Error('Failed to fetch user' )

  return res.json()  
}