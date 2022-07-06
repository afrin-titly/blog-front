import React from "react"
import { toast } from "react-hot-toast"
import { create } from "../lib/users"

const Signup = () => {
  const [user, setUser] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const createUser = async (e) => {
    e.preventDefault()
    if(user.password !== user.confirm_password) {
      toast.error(`Password's doesn't match.`)
      return
    } else if(user.password.length < 6) {
      toast.error(`Password is too small`)
      return
    }
    const response = await create(user)
    if(response.data.message) {
      toast.success(response.data.message)
    } else {

      toast.error(response.data.error)
    }

  }
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl font-bold text-center">Sign up</h1>
          <form onSubmit={createUser}>
            <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="firstname"
                placeholder="First Name"
                value={user.first_name}
                onChange={(e)=>setUser({...user, first_name: e.target.value})}
                />
            <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="lastname"
                placeholder="Last Name"
                value={user.last_name}
                onChange={(e)=>setUser({...user, last_name: e.target.value})}
                />

            <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={(e)=>setUser({...user, email: e.target.value})}
                />

            <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={(e)=>setUser({...user, password: e.target.value})}
                />
                <p className='mb-4 text-sm text-red-500'> At least 6 characters.</p>
            <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
                value={user.confirm_password}
                onChange={(e)=>setUser({...user, confirm_password: e.target.value})}
                />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
            >Create Account</button>
          </form>
        </div>
        <div className="text-grey-dark mt-6">
            Already have an account?
            <a className="no-underline border-b border-blue text-blue-900" href="../login/">
                Log in
            </a>
        </div>
      </div>
    </div>
  )
}

export default Signup