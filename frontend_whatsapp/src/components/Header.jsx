import "../styles/header.css";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import MaterialUISwitch from "./switch";

export default function Header({
  data,
  name,
  username,
  darkMode,
  setDarkMode,
}) {
  return (
    <>
      <div className={darkMode ? "dark" : "header"}>
        <div className="righticons">
          <Avatar
            alt="Travis Howard"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="name">
            <h3 id="groupName">World Chat</h3>
            {name.length > 0 ? (
              <span id="status">{name.join(",")} is Typing . . .</span>
            ) : (
              <span id="status">Live</span>
            )}
            <br />
          </div>
        </div>
        <div className="lefticons">
          {/* <CallIcon className="icons" /> */}
          {/* <VideocamIcon className="icons" /> */}
          {/* <div id="accountName"> */}
          <span id="as"></span> <span id="user">{username}</span>
          {/* </div> */}
          <MaterialUISwitch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          {/* <MoreVertIcon className="icons" /> */}
        </div>
      </div>
    </>
  );
}
