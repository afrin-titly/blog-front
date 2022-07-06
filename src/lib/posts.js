import axios from "axios";
import header from "./headers";

export const posts = async (userId='') => {
  const head = await header()
  const response = await axios.get('http://localhost:3000/posts?user_id='+userId,{
    headers: head
  })
  return response.data
}

export const onePost = async (id) => {
  const head = await header()
  const response = await axios.get('http://localhost:3000/posts/'+id,{
    headers: head
  })
  return response.data
}

export const create = async (post) => {
  const head = await header()

  const response = await axios.post('http://localhost:3000/posts',
    post,
    { headers: head }
  )

  return response.data
}

export const edit = async (post) => {
  console.log(post)
  const head = await header()

  const response = await axios.put('http://localhost:3000/posts/'+post.id,
    post,
    { headers: head }
  )

  return response.data
}

export const deletePost = async (id) => {
  console.log(id)
  const head = await header()

  const response = await axios.delete('http://localhost:3000/posts/'+id,
    { headers: head }
  )

  return response.data
}