import React from 'react'
import { CgMore} from 'react-icons/cg'
import { Link, useParams } from 'react-router-dom'

const MoreMenu = ({post}) => {
  const node = React.useRef()
  const [menuDisplay, setMenuDisplay] = React.useState(true)
  let style = ""
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
  if(menuDisplay) {
    style = "hidden"
  }
  const clickOutside = (e) => {
    if(node.current && !node.current.contains(e.target)) {
      setMenuDisplay('hidden')
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    // clean up function before running new effect
    return () => {
        document.removeEventListener('mousedown', clickOutside);
    }
  }, [menuDisplay])
  console.log(menuDisplay)
  return (
    <div className="dropdown inline-block">

      <button ref={node} onClick={toggleMenu} className="font-semibold py-2 px-4 rounded inline-flex items-center">
        <span><CgMore /></span>
      </button>
      <ul className={`dropdown-menu absolute ${style} text-gray-700 pt-1`}>
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
    </div>
  )
}

export default MoreMenu