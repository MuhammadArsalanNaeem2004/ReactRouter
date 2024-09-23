import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //    fetch('https://api.github.com/users/MuhammadArsalanNaeem2004') 
    //    .then(response => response.json())
    //    .then(data =>{
    //     console.log(data);
    //     setData(data)
    //    })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-300 rounded-3xl text-black p-4 text-3xl'>
      GitHub Followers: {data.followers}
      <img className='text-center rounded-full' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/MuhammadArsalanNaeem2004')
    return response.json()
}
