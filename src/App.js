import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import { useReactiveVar } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<h1>Home</h1>}>
              <Home />
            </Route>
            <Route path="/banana" element={<h1>Banana</h1>}>
              <NotFound />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
