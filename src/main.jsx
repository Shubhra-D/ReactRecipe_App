import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider as ChakraProvider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";
import RecipeProvider from "./Context/RecipeProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipeProvider>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </RecipeProvider>
  </StrictMode>
);
