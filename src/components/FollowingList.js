import React from 'react'
import { Link } from 'react-router-dom'

const FollowingList = ({following, followers}) => {
  const renderFollowingList = following.map((l)=>(
    <Link to={`/users/${l[0]}`} key={l[0]}>
      <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {l[1]} </li>
    </Link>
  ))

  const renderFollowerList = followers.map((l)=>(
    <Link to={`/users/${l[0]}`} key={l[0]}>
      <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"> {l[1]} </li>
    </Link>
  ))
  return (
    <div className="">
      <p className='mb-2 font-bold text-amber-600'>Following</p>
      <ul className="max-h-64 overflow-y-auto bg-white rounded-lg border border-gray-200 w-full text-gray-900">
        { renderFollowingList }
      </ul>

      <p className='mb-2 mt-2 font-bold text-amber-600'>My followers</p>
      <ul className="max-h-64 overflow-y-auto bg-white rounded-lg border border-gray-200 w-full text-gray-900">
        { renderFollowerList }
      </ul>
      <Link to="/posts/new">
        <button type="button" className="mt-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Create Post </button>
      </Link>
    </div>
  )
}

export default FollowingList