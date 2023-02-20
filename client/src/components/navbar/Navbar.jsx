import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
          <span>mernsocial</span>
        </Link>
        <HomeOutlinedIcon style={{ cursor: "pointer" }}/>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} style={{ cursor: "pointer" }}/>
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} style={{ cursor: "pointer" }}/>
        )}
        <GridViewOutlinedIcon style={{ cursor: "pointer" }}/>
        <div className="search">
          <SearchOutlinedIcon style={{ cursor: "pointer" }}/>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon style={{ cursor: "pointer" }}/>
        <EmailOutlinedIcon style={{ cursor: "pointer" }}/>
        <NotificationsOutlinedIcon style={{ cursor: "pointer" }}/>
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
            style={{ cursor: "pointer" }}
          />
          <span style={{ cursor: "pointer" }}>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;