import React from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { authenticate } from '../lib/session'


function Login() {
  const [params] = useSearchParams()
  const [user, setUser] = React.useState({})
  const navigate = useNavigate();
  const { setValidToken, userLogin } = useAuthContext()

  React.useEffect(()=>{
    if(params.get('confirmed') === 'true' ) {
      toast.success("Account varified.")
    }
  },[])

  const loginUser = async (e) => {
    e.preventDefault()
    const response = await authenticate(user)
    if(response.data.message) {
      toast.success(response.data.message)
      setValidToken(true)
      navigate('/home')
    } else {
      console.log(response.data)
      toast.error(response.data.error)
      return
    }
  }

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />

          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={loginUser}>
              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  value={user.email}
                  onChange={(e)=>setUser({...user, email: e.target.value})}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e)=>setUser({...user, password: e.target.value})}
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                {/* FIX */}
                {/* <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                    checked
                  />
                  <label className="form-check-label inline-block text-gray-800">Remember me </label>
                </div> */}
                <a
                  href="#!"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >Forgot password?</a>
              </div>
              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="inline-block px-7 mb-5 py-3 bg-blue-600 text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              >
                Sign in
              </button>

            </form>
            <Link to='/signup'>
              <button
                type="button"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              >
                Don't have an account? Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login