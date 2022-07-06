import React from 'react'

const Comment = ({makeComment, userComment, setUserComment}) => {
  return (
    <div className='flex flex-col pl-10'>
        <form onSubmit={makeComment}>
          <textarea
            value={userComment.comment}
            onChange={(e) => setUserComment({...userComment, comment: e.target.value})}
            placeholder='Write comment..'
            className="form-control block w-3/4 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
          <button className="mt-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Comment</button>
        </form>
      </div>
  )
}

export default Comment
