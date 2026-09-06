import "../styles/msginput.css";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

export default function MessageInput({ send, inpchange, input, darkMode }) {
  return (
    <div className={darkMode ? "darkinput" : "inputbox"}>
      <TextField
        onChange={inpchange}
        className="msginput"
        id="outlined-basic"
        variant="outlined"
        placeholder="Type Here"
        value={input}
        required
      />
      <button onClick={send} id={darkMode ? "darksendbtn" : "sendbtn"}>
        <SendIcon />
      </button>
    </div>
  );
}
