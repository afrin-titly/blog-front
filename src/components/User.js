import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { posts } from '../lib/posts'
import { PostCard } from './PostCard'
import { user } from '../lib/users'
import { RiUserFollowFill, RiUserUnfollowFill } from 'react-icons/ri'
import { startFollow, unfollow } from '../lib/followers'

const User = ({id = null, mypage=false}) => {
  const params = useParams()
  const navigate = useNavigate()
  const [userPosts, setUserPosts] = React.useState([])
  const [userInfo, setUserInfo] = React.useState({})
  const uid = id ? id : parseInt(params.id, 10)

  const goBack = () => {
    // navigate('/home')
    navigate(-1)
  }

  const getUserPosts = async () => {
    const res = await posts(uid)
    setUserPosts(res)
  }

  const getUserInfo = async () => {
    const res = await user(uid)
    setUserInfo(res)
  }

  React.useEffect(()=>{
    getUserPosts()
    if (!mypage){
      getUserInfo()
    }

  },[userPosts])

  const renderPosts = userPosts?.map((post)=>(
    <PostCard key={post.id} post={post} mypage={mypage} />
  ))

  const startToFollow = async () => {
    const res = await startFollow(parseInt(params.id), 10)
    setUserInfo({...userInfo, user:{...userInfo.user, is_following: res.user.is_following}})
  }

  const startUnfollow = async () => {
    const res = await unfollow(parseInt(params.id), 10)
    setUserInfo({...userInfo, user:{...userInfo.user, is_following: res.user.is_following}})
  }

  return (
    <div className='flex flex-col'>
      <div className='p-10 w-full space-y-8'>
        <div className='flex justify-center space-x-3' >
          { !mypage &&
          <>
          <h2 className='text-3xl font-bold text-blue-600'> {userInfo.user?.name} </h2>
          { userInfo.user?.is_following ? (
              <button type='button' onClick={startUnfollow}> <span> <RiUserUnfollowFill size={40} className='text-red-500'/></span> </button>
            ) : (<button type='button' onClick={startToFollow}><span> <RiUserFollowFill size={40} className='text-green-500'/> </span></button>)}
          </>
          }
        </div>

        { renderPosts }
      </div>
      <div className='p-10'>
        <button type="button" onClick={goBack} className="mt-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Go back </button>
      </div>

    </div>
  )
}

export default User