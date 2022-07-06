import React from 'react'
import { Link } from 'react-router-dom'
import { FaMicroblog } from 'react-icons/fa'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import token from '../lib/token'

const Navbar = () => {
  const { currentUser, clearToken, setCurrentUser } = useAuthContext()
  const navigate = useNavigate()
  const [jwt, setJwt] = React.useState('')

  const logout = () => {
    clearToken()
    navigate('/login')
  }

  const localStorageDate = async () => {
    const t = await token()
    const name = await localStorage.getItem("name")
    setCurrentUser(name)
    setJwt(t)
  }

  React.useEffect(()=>{
    localStorageDate()
  })

  return (
    <nav className="flex items-center justify-between flex-wrap bg-amber-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 space-x-5">
        <Link to="/home">
          <FaMicroblog size={50}/>
        </Link>

        <span className="font-semibold text-xl tracking-tight">
          <Link to='/home'>
            myBlog
          </Link>
        </span>
      </div>
      {/* FIX: not reponsive */}
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-amber-200 border-amber-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full justify-end block flex-grow lg:flex lg:items-center lg:w-auto">
        <div>
          <span className="block mt-4 lg:inline-block lg:mt-0 text-amber-100 hover:text-white mr-4">
            {
              jwt ? (
              <>
                <p className='text-white'> Hi {currentUser} </p>
                <ul className='list-none'>
                  <li className='inline'> <Link to="/mypage"> My Page</Link> </li> |
                  <li className='inline'> <button onClick={logout}> Logout </button> </li>
                </ul>
              </>
              ) :
              <>
                <Link to="/login" > Login </Link>
              </>
            }

          </span>

        </div>
      </div>
</nav>
  )
}

export default Navbar