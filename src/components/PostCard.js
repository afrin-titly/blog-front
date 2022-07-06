import React from 'react'
import { Link } from 'react-router-dom'
import MoreMenu from './MoreMenu'
import DropdownList from './DropdownList'
import { deletePost } from '../lib/posts'

export const PostCard = ({post, mypage}) => {

  const deletepost = async () => {
    const response = await deletePost(parseInt(post.id, 10))
    console.log(response)
  }
  return (
    <div className="p-6 max-w-sm md:max-w-3xl bg-white rounded-lg border border-gray-200 shadow-md dark:white dark:border-gray-700">
      <div className='float-right'>
        { mypage && <MoreMenu DropdownList={<DropdownList post={post} deletepost={deletepost} />} /> }
      </div>
      <Link to={`/posts/${post.id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{post.title}</h5>
      </Link>
      <p className="mb-3 font-normal text-gray-900 dark:text-gray-600">{post.description?.slice(0, 150)}...</p>
      <Link to={`/posts/${post.id}`}>
        <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read More
        </button>
      </Link>

    </div>
  )
}
