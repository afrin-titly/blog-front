import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { onePost } from '../lib/posts'
import { newComment, postComments } from '../lib/comments'
import Comment from './Comment'
import toast from 'react-hot-toast'

const Post = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [currentPost, setCurrentPost] = React.useState({})
  const [ userComment, setUserComment ] = React.useState({
    post_id: parseInt(params.id, 10),
    comment: ''
  })
  const [comments, setComments] = React.useState([])
  const [error, setError] = React.useState('')

  const goBack = () => {
    navigate(`/mypage`)
  }

  const getPost = async () => {
    const p = await onePost(parseInt(params.id, 10))
    setCurrentPost(p)
  }

  React.useEffect(()=>{
    getPost()
  }, [])

  const makeComment = async (e) => {
    e.preventDefault()
    try {
      const response = await newComment(userComment)
      const ac = await postComments(parseInt(params.id, 10))
      setComments(ac)
    } catch (err) {
      console.log(err.response.data.errors)
      setError(err.response.data.errors)
    }
    setUserComment({
      post_id: parseInt(params.id, 10),
      comment: ''
    })
  }

  React.useEffect(()=>{
    if(error.length > 0) {
      toast.error(error)
    }
  },[error])

  React.useEffect(()=>{
    getPostComments()
  },[])

  const getPostComments = async () => {
    const c = await postComments(parseInt(params.id, 10))
    setComments(c)
  }

  const disPlayComments = comments.map((comment)=>(
    <div key={comment}>
      <strong>{comment[0]}</strong>
      <p className="text-xs sm:text-sm">{comment[1]}</p>
    </div>
  ))


  return (
    <div className='flex flex-col justify-center'>
      <div className='p-10'>
        <h2 className='text-3xl text-center font-bold text-blue-600'>{currentPost.title}</h2>
        <h5 className='font-bold text-gray-500 text-center'>
          By {currentPost.name}
        </h5>
        <p className='text-gray-400 text-center mb-5'> {currentPost.created_at}</p>
        <p >
        {currentPost.description}
        </p>
        <button type="button" onClick={goBack} className="mt-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Go back </button>
      </div>
      <Comment makeComment={makeComment} userComment={userComment} setUserComment={setUserComment} />
      {
        disPlayComments.length > 0 && (
        <div className='m-10 flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed'>
          { disPlayComments}
        </div>
        )
      }

    </div>
  )
}

export default Post