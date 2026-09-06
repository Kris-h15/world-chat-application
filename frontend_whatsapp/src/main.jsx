import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StyledEngineProvider } from "@mui/material/styles";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   {/* wrapping app into this styleengineprovider helps to render our css with priority from material ui css */}
  //   <StyledEngineProvider injectFirst>
  //     <App />
  //   </StyledEngineProvider>,
  // </StrictMode>,

  <App />,
);
