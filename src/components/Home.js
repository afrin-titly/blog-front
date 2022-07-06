import React from 'react'
import { posts } from '../lib/posts'
import { Link } from 'react-router-dom'
import { users } from '../lib/users'
import { PostCard } from './PostCard'

const Home = () => {
  const [ allposts, setAllPosts] = React.useState([])
  const [suggestedUsers, setSuggestedUsers] = React.useState([])

  React.useEffect(()=>{
    getAllPosts()
    getSuggestedUsers()
  }, [])

  const getAllPosts = async () => {
    const res = await posts()
    setAllPosts(res)
  }

  const getSuggestedUsers = async () => {
    const res = await users()
    setSuggestedUsers(res)
  }
  const renderPosts = allposts.map((post)=>(
    <PostCard key={post.id} post={post} />
  ))
  const renderSuggestedUsers = suggestedUsers.suggest_to_follow?.map((user) =>(
    <Link to={`/users/${user.id}`} key={user.id}>
      <li > {user.name} </li>
    </Link>
  ))

  return (
    <>
      <div className='flex'>
        <div className='flex flex-col space-y-8 p-5 w-2/3'>
          { renderPosts }
        </div>
        <div className='p-5 w-1/3'>
          <h3 className='text-center font-bold text-2xl'> You may also follow (replace by most popular) </h3>
          <ul className='text-center'>
            { renderSuggestedUsers}
          </ul>
        </div>
      </div>
    </>

  )
}

export default Home