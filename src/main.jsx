import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider as ChakraProvider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";
import RecipeProvider from "./Context/RecipeProvider";
import AuthProvider from "./Context/AuthProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RecipeProvider>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </RecipeProvider>
    </AuthProvider>
  </StrictMode>
);
