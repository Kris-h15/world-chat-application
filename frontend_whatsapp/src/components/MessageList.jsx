import "../App.css";

export default function MessageList({ username }) {
  let clicked = (event) => {
    console.log(event.target.getAttribute("name"));
  };
  return (
    <div className="msgList">
      <h5 id="username">Welcome @ {username.toUpperCase()}</h5>
      <h3 id="Brand">WhatsApp</h3>
      <li className="contacts" name="krish" onClick={clicked}>
        Krish
      </li>
      <li className="contacts">Jhon</li>
      <li className="contacts">Dave</li>
      <li className="contacts">Spider-Man</li>
      <li className="contacts">Rock</li>
    </div>
  );
}
