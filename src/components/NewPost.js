import React from 'react'
import { create } from '../lib/posts'
import { useNavigate } from 'react-router-dom'
import PostForm from './PostForm'

const NewPost = () => {
  const navigate = useNavigate()
  const [post, setPost] = React.useState({
    title: '',
    description: ''
  })
  const handleCreatePost = async (e) => {
    e.preventDefault()
    const response = await create(post)
    // setPost({
    //   title: '',
    //   description: ''
    // })
    navigate(`/posts/${response}`)
    console.log(response)
  }
  return (
    <PostForm handlePost={handleCreatePost} setPost={setPost} post={post} text="Create Post"/>
  )
}

export default NewPost