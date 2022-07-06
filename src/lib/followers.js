import axios from "axios";
import header from "./headers";

export const startFollow = async (id) => {
  const head = await header()
  const data = {
    "follower": {
      follow: id
    }
  }

  const response = await axios.post('http://localhost:3000/followers',
    data,
    { headers: head } ,
  )

  return response.data
}

export const unfollow = async (id) => {
  const head = await header()
  const data = {
    "follower": {
      follow: id
    }
  }

  const response = await axios.delete('http://localhost:3000/followers/unfollow',
  {
    data: data,
    headers: head
  })

  return response.data
}

export const followingNFollowers = async () => {
  const head = await header()
  const response = await axios.get('http://localhost:3000/followers',{
    headers: head
  })
  return response.data
}