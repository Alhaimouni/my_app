import Header from '../header/Header'
import SideBar from '../sideBar/SideBar'
import { Outlet } from "react-router"


function MainLayout() {
  return (
    <div className="h-screen w-screen grid grid-rows-[72px_1fr] grid-cols-[130px_1fr]">
      <Header />
      <SideBar/>
      <Outlet />
    </div>
  )
}

export default MainLayout