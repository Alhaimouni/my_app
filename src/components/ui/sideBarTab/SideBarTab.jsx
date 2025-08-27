import { NavLink } from "react-router";

function SideBarTab({ children, destination, tabName }) {
  return (
    <NavLink
      to={destination}
      className={({ isActive }) => {
        if (isActive) {
          return "border-l-sagerRed border-l-4 bg-sagerGray-70 duration-200 text-sagerWhite";
        }
      }}
    >
      <div className="uppercase flex flex-col justify-center items-center gap-2 p-6 text-sagerGray-50 hover:text-sagerWhite hover:bg-sagerGray-70 hover:border-l-sagerRed w-full duration-200">
        {children}
        {tabName}
      </div>
    </NavLink>
  );
}

export default SideBarTab;
