import { SidebarData } from "../../utils/constants/sidebarOptions";
import AddIcon from "@mui/icons-material/Add";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarOptions />
    </div>
  );
};

const SidebarOptions = () => {
  return (
    <div className="sidebarOptions">
      {SidebarData?.map((data, i) => (
        <div className="sidebarOption" key={i}>
          <img src={data.url} alt="" />
          <p>{data.title}</p>
        </div>
      ))}
      <div className="sidebarOption">
        <AddIcon />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
};
export default Sidebar;
