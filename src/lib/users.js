import axios from "axios";
import header from "./headers";

export const create = async (userParams) => {
  const user = {
    first_name: userParams.first_name,
    last_name: userParams.last_name,
    email: userParams.email,
    password_digest: userParams.password
  }
  const response = await axios.post('http://localhost:3000/users', {
    headers: {
      'Content-Type': 'application/json',
    },
    user: user
  })

  return response
}

export const users = async () => {
  const head = await header()
  const response = await axios.get('http://localhost:3000/users',{
    headers: head
  })
  return response.data
}

export const user = async (id) => {
  const head = await header()
  const response = await axios.get('http://localhost:3000/users/'+id,{
    headers: head
  })
  return response.data
}