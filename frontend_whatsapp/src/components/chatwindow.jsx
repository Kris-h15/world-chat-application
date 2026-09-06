import MessageList from "./MessageList";
import Header from "./Header";
import "../App.css";

import Chatarea from "./Chatarea";
import MessageInput from "./MessageInput";

export default function Chatwindow({
  data,
  send,
  inpchange,
  input,
  username,
  name,
  newuser,
  darkMode,
  setDarkMode,
}) {
  return (
    <div className="chatWindow">
      {/* <div className="leftside">
        <MessageList username={username} />
      </div> */}
      <div className="rightside">
        <Header
          data={data}
          name={name}
          username={username}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Chatarea
          data={data}
          username={username}
          newuser={newuser}
          darkMode={darkMode}
        />
        <MessageInput
          send={send}
          inpchange={inpchange}
          input={input}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}
