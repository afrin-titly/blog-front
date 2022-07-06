import React from 'react'
import TextInput from './TextInput'
import TextArea from './TextArea'

const PostForm = ({handlePost, setPost, text, post}) => {

  return (
    <div className='flex justify-center'>
      <div className='p-10 w-2/3'>
        <p className='font-bold text-3xl text-emerald-700 mb-5'> {text} </p>
        <div className=''>
          <form onSubmit={handlePost}>
          <div className="mb-5">
            <label
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Title
            </label>
            <TextInput
              onChange={(e)=>setPost({...post, title: e.target.value})}
              type="text"
              value={post?.title}
              placeholder="Post title"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Description
            </label>
            <TextArea
              onChange={(e)=>setPost({...post, description: e.target.value})}
              // onChange={(e)=>setPost((prev)=>{prev.description = e.target.value; return prev})}
              value={post?.description}
              rows="4"
              placeholder="Description..."
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></TextArea>
          </div>
            <button
              type="submit"
              className="text-center font-bold p-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
            >{text} </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostForm