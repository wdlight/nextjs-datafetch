
export default async function getAllUsers() {
  const userUrl = 'https://jsonplaceholder.typicode.com/users'
  const res = await fetch(userUrl  , { next: { revalidate: 60}})
  if ( !res.ok ) throw new Error('Failed to fetch users' )

  return res.json()  
}