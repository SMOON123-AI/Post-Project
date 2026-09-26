import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "../Components/Card"

const Feed = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => { 
    const fetchPost = async ()=>{
      const response = await axios.get("http://localhost:3000/feed")
      
      const data=response.data.posts;
      setPosts(data)
    }

    fetchPost()
  }, [])
      

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-full w-full p-5 min-h-screen">
      {posts.length>0? (
      posts.map((post)=>{
        return <Card key={post._id} post={post}/>
      }) ): (
      <h1>No Post Available</h1> ) }
    </div>
  )
}

export default Feed
