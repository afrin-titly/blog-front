import React from 'react'
import PostForm from './PostForm'
import { useParams, useNavigate } from 'react-router-dom'
import { edit, onePost } from '../lib/posts'

const EditPost = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [post, setPost] = React.useState({
    title: '',
    description: ''
  })
  const handlePost = async (e) => {
    e.preventDefault()
    const response = await edit(post)
    navigate(`/posts/${response.id}`)
    console.log(response)
  }
  const getPost = async () => {
    const p = await onePost(parseInt(params.id, 10))
    setPost({id: p.id, title: p.title, description: p.description})
  }
  React.useEffect(()=>{
    getPost()
  },[])
  console.log(post)
  return (
    <PostForm handlePost={handlePost} setPost={setPost} text="Edit Post" post={post} />
  )
}

export default EditPost
