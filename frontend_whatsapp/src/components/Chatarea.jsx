import "../styles/chatarea.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export default function Chatarea({ data, username, newuser, darkMode }) {
  return (
    <div className={darkMode ? "msgdark" : "msgarea"}>
      {data.map((x) => {
        return x.text == "someonejoined" ? (
          <div id="joiningMsg">{x.sender} Joined the group</div>
        ) : (
          <div
            className={x.sender === username ? "sended msg" : "received msg"}
            id={darkMode && x.sender === username ? "darktheme" : ""}
            style={
              x.sender === username
                ? { alignSelf: "flex-end" }
                : { alignSelf: "flex-start" }
            }
          >
            <span id={x.sender != username ? "senderName" : "you"}>
              {x.sender != username ? x.sender : "you"}
            </span>
            {x.sender != username ? null : (
              <span id="mark">
                <DoneAllIcon />
              </span>
            )}
            <li>{x.text}</li>
            <li id="time">
              {new Date(x.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </li>
          </div>
        );
      })}
      {/* new user join msg */}
      {/* {newuser != "" ? (
        <div id="newuser">{newuser} Joined the Group</div>
      ) : null} */}
    </div>
  );
}

// <li
//             className={x.sender === username ? "sended msg" : "received msg"}
//             style={
//               x.sender === username
//                 ? { alignSelf: "flex-end" }
//                 : { alignSelf: "flex-start" }
//             }
//           >
//             {x.text}
//           </li>
