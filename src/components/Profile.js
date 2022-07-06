import React from 'react'
import User from './User'
import ProfileSidebar from './ProfileSidebar'
import { followingNFollowers } from '../lib/followers'
import FollowingList from './FollowingList'

const Profile = () => {
  const [uid, setUid] = React.useState(null)
  const [followingList, setFollowingList] = React.useState([])
  const [followerList, setFollowerList] = React.useState([])

  React.useEffect(()=>{
    getUid()
    myFollowingNFollowersList()
  }, [])

  const getUid = async () => {
    const id = await localStorage.getItem("user")
    setUid(id)
  }

  const myFollowingNFollowersList = async () => {
    const res = await followingNFollowers()
    setFollowingList(res.i_am_following)
    setFollowerList(res.my_followers)
  }

  return (
    <div className='flex'>
      <div className='basis-1/4 p-10'>
        {
          uid && <ProfileSidebar id={uid} FollowingList={<FollowingList following={followingList} followers={followerList} />} />
        }
      </div>
      <div className='basis-3/4 mt-6'>
        {
          uid && <User id={uid} mypage={true} />
        }
      </div>
    </div>


  )
}

export default Profile