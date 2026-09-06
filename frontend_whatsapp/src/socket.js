import { io } from "socket.io-client";

export default function connect_socket() {
  return io("http://localhost:3000");
}
