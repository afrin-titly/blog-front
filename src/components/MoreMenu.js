import React from 'react'
import { CgMore } from 'react-icons/cg'

const MoreMenu = ({DropdownList, showDropdown, setShowDropdown}) => {

  return (
    <div className="dropdown inline-block">
      <button onClick={()=>setShowDropdown(prevShowDropdown => !prevShowDropdown)} className="font-semibold py-2 px-4 rounded inline-flex items-center">
        <span><CgMore /></span>
      </button>
      {showDropdown ? DropdownList : null}
    </div>
  )
}

export default MoreMenu