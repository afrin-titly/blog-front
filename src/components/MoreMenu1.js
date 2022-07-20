import React from 'react'
import { CgMore} from 'react-icons/cg'
import { Link, useParams } from 'react-router-dom'

const MoreMenu = ({post}) => {
  const node = React.createRef()
  const [menuDisplay, setMenuDisplay] = React.useState(false)
  const toggleMenu = () => {
    // setMenuDisplay(prevClass=>{
    //   if (prevClass === 'hidden') {
    //     prevClass = ''
    //   } else {
    //     prevClass = 'hidden'
    //   }
    //   return prevClass
    // })
    setMenuDisplay(prev=>!prev)
  }
  // if(menuDisplay) {
  //   style = "hidden"
  // }
  const clickOutside = (e) => {
    if(node.current && !node.current.contains(e.target)) {
      // setMenuDisplay('hidden')
      setMenuDisplay(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('click', clickOutside);
    // clean up function before running new effect
    return () => {
        window.removeEventListener('click', clickOutside);
    }
  }, [menuDisplay])
  console.log("hello-----")
  console.log(menuDisplay)
  return (
    <div className="dropdown inline-block">

      <button onClick={toggleMenu} className="font-semibold py-2 px-4 rounded inline-flex items-center">
        <span><CgMore /></span>
      </button>
      {
        menuDisplay &&
        <ul ref={node} className={`dropdown-menu absolute text-gray-700 pt-1`}>
        <li className="">
          <Link to={`/posts/edit/${post.id}`} className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            Edit
          </Link>
        </li>
        <li className="">
          <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            Delete </a>
        </li>
      </ul>
      }
    </div>
  )
}

export default MoreMenu