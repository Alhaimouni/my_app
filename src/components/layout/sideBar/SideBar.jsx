import React from 'react'

function SideBar() {
  return (
    <aside className="bg-yellow-400 row-span-1 col-span-1 flex flex-col items-center p-4">
      <nav className="space-y-4">
        <a href="#" className="block">Home</a>
        <a href="#" className="block">About</a>
        <a href="#" className="block">Contact</a>
      </nav>
    </aside>
  )
}

export default SideBar