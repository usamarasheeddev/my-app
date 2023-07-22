export  const fetchUsers=async ()=>{
 
  const res=await fetch('https://jsonplaceholder.typicode.com/users')
  if(!res.ok){
    return new Error('some error has been occur')
  }

  return res.json()


}


export  const fetchUser=async (id)=>{
 
  const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  if(!res.ok){
    return new Error('some error has been occur')
  }

  return res.json()


}
export  const fetchUserPosts=async (id)=>{
 
  const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  if(!res.ok){
    return new Error('some error has been occur')
  }

  return res.json()


}