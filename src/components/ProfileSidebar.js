import React from 'react'
import { user } from '../lib/users'

const ProfileSidebar = ({ id, FollowingList }) => {
  const [myInfo, setMyInfo] = React.useState({})
  React.useEffect(()=>{
    getMyInfo()
  },[])

  const getMyInfo = async () => {
    const res = await user(id)
    setMyInfo(res)
  }
  return (
    <div>
      <h2 className='mb-5 text-3xl font-bold text-blue-900'> {myInfo.user?.name} </h2>
      { FollowingList }
    </div>
  )
}

export default ProfileSidebar