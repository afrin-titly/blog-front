import axios from 'axios'
export const authenticate = async (user) => {
  const response = await axios.post('http://localhost:3000/auth/login',{
    headers: {
      'Content-Type': 'application/json',
    },
    email: user.email,
    password: user.password
  })
  localStorage.setItem('token', response.data.token)
  localStorage.setItem('user', response.data.user)
  localStorage.setItem('name',response.data.name)
  return response
}