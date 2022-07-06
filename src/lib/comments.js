import axios from "axios";
import header from "./headers";

export const newComment = async (comment) => {
  // const jwt = await token()
  const head = await header()
  const data = {
    "comment": {
      post_id: comment.post_id,
      comment: comment.comment
    }
  }
  const response = await axios.post('http://localhost:3000/comments',
    data,
    { headers: head }
  )
  return response.data
}

export const postComments = async (postId) => {
  const head = await header()
  const response = await axios.get('http://localhost:3000/comments',{
    params: { post_id: postId },
    headers: head
  })
  return response.data
}