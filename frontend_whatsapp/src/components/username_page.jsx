import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import "../App.css";
import { useState } from "react";

export default function Username({ submitclicked }) {
  let [nameinput, setnameinput] = useState("");

  let inputchanged = (event) => {
    setnameinput(event.target.value.toUpperCase());
  };

  let clicked = (event) => {
    event.preventDefault();
    submitclicked(nameinput);
  };

  return (
    <div id="loginpage">
      <div className="box">
        <TextField
          onChange={inputchanged}
          className="input"
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={nameinput}
          required
        />
        <br />
        <Button
          className="loginbtn"
          variant="contained"
          color="success"
          endIcon={<LoginIcon />}
          onClick={clicked}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
