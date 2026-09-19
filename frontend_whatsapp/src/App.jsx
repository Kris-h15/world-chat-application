import "./App.css";
import connectsocket from "./socket";
import Username from "./components/username_page";
import Chatwindow from "./components/chatwindow";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  let socket = useRef(null);

  // state to control dark and light mode
  const [darkMode, setDarkMode] = useState(false);

  // =====================================

  let [data, setdata] = useState([
    { text: "Hello !", sender: "KRISH", time: 1237657400000, id: uuidv4() },
    {
      text: "how are you ?",
      sender: "ROHAN",
      time: 1787657400000,
      id: uuidv4(),
    },
    { text: "Fine 😅", sender: "DIVYA", time: 1787657587000, id: uuidv4() },
  ]);
  let [input, setinput] = useState("");
  let [username, setusername] = useState("");

  let [typersnames, settypersnames] = useState([]);
  let [newuser, setnewuser] = useState("");

  // ------------------------------------------
  useEffect(() => {
    socket.current = connectsocket();

    socket.current.on("connect", () => {
      // Everything here
      socket.current.on("roomNotice", (x) => {
        console.log(`${x} joined the room`);
      });

      // new msg to everyone
      socket.current.on("newmsg", (newmsg) => {
        // Push to existing msg
        setdata((x) => [
          ...x,
          { text: newmsg, sender: username, time: Date.now() },
        ]);
      });

      //typer event
      socket.current.on("typer name", (x) => {
        settypersnames((prev) => {
          const exists = prev.find((name) => name === x);
          if (!exists) {
            return [...prev, x];
          } else return prev;
        });
      });

      // not typing
      socket.current.on("not typing", (name) => {
        settypersnames((prev) => {
          return prev.filter((x) => x != name);
        });
      });

      //user joining msg - displaying to everyone ===================
      socket.current.on("joined msg", (user) => {
        setnewuser(user);
        setdata((x) => [
          ...x,
          { text: "someonejoined", sender: user, time: Date.now() },
        ]);
      });
      // ==============================================================
    });
  }, []);
  // ------------------------------------------
  useEffect(() => {
    if (typersnames) {
      socket.current.emit("typing", username);

      setTimeout(() => {
        socket.current.emit("not typing", username);
      }, 3000);
    }
  }, [input]);
  // ------------------------------------------

  let submitclicked = (name) => {
    socket.current.emit("joinRoom", name);
    setusername(name);
  };

  let inpchange = (event) => {
    setinput(event.target.value);
  };

  let send = (event) => {
    input != ""
      ? (socket.current.emit("msg", input),
        setdata((x) => [
          ...x,
          { text: input, sender: username, time: Date.now(), id: uuidv4() },
        ]),
        setinput(""))
      : null;
  };

  return (
    <div>
      {username === "" ? (
        <Username submitclicked={submitclicked} />
      ) : (
        <Chatwindow
          username={username}
          newuser={newuser}
          data={data}
          send={send}
          input={input}
          inpchange={inpchange}
          name={typersnames}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
    </div>
  );
}

export default App;
