import SideBarTab from "../../ui/sideBarTab/SideBarTab";
import Line from "../../ui/line/Line";
import MapSVG from "../../svg/MapSVG";
import DashboardSVG from "../../svg/DashboardSVG";

function SideBar() {
  return (
    <aside className="bg-sagerGray-100 row-span-1 col-span-1 flex flex-col justify-stretch pt-15">
      <SideBarTab destination={"/dashboard"} tabName={"Dashboard"}>
        <DashboardSVG color={"#65717c"} />
      </SideBarTab>

      <Line width={15} height={0.5} rotation={0} />

      <SideBarTab destination={"/"} tabName={"MAP"}>
        <MapSVG color={"#65717c"} />
      </SideBarTab>
    </aside>
  );
}

export default SideBar;
