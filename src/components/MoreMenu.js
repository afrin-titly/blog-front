import React from 'react'
import { CgMore } from 'react-icons/cg'

const MoreMenu = ({DropdownList, showDropdown, setShowDropdown}) => {
  // const node = React.useRef()
  // const node = React.createRef()
  // const [showDropdown, setShowDropdown] = React.useState(false)

  // this was used to handle outside click for the dropdown menu
  // React.useEffect(() => {
  //   const clickOutside = (e) => {
  //     if(node.current && !node.current.contains(e.target)) {
  //       setShowDropdown(false)
  //     }
  //   }
  //   window.addEventListener('mousedown', clickOutside);
  //   // clean up function before running new effect
  //   return () => {
  //       window.removeEventListener('mousedown', clickOutside);
  //   }
  // },[showDropdown])
  return (
    <div className="dropdown inline-block">
      {/* addinf ref={node} doesn't work */}
      <button onClick={()=>setShowDropdown(prevShowDropdown => !prevShowDropdown)} className="font-semibold py-2 px-4 rounded inline-flex items-center">
        <span><CgMore /></span>
      </button>
      {/* {showDropdown ? <DropdownList  /> : null} */}
      {showDropdown ? DropdownList : null}
    </div>
  )
}

export default MoreMenu