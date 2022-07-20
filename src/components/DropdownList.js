import React from 'react'
import { Link } from 'react-router-dom'

const DropdownList = ({post, deletepost, inputRef}) => {

  return (
    <ul className={`dropdown-menu absolute text-gray-700 pt-1`} ref={inputRef}>
      <li className="">
        <Link to={`/posts/edit/${post.id}`} className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
          Edit
        </Link>
      </li>
      <li className="">
        <button onClick={deletepost} className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
          Delete </button>
      </li>
    </ul>
  )
}

export default DropdownList