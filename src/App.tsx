import { useState } from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import TodoContainer from "./components/TodoContainer/TodoContainer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <GlobalStyles theme={darkMode} />
      <Header handler={theme} mode={darkMode} />
      <TodoContainer theme={darkMode} />
    </>
  );
}

export default App;
