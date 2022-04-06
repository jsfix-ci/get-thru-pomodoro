import { Navbar } from "./Components/Navbar/navbar";
import { HomePage } from "./Routes/homePage";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import { TodoList } from "./Components/Todos/todos";
import Pomodoro from "./Components/Pomodoro/pomodoro";
import { Footer } from "./Components/Footer/footer";
import { useTheme } from "./Context/themeContext";
function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        color: theme === "light" ? "black" : "#fff",
        backgroundColor: theme === "light" ? "#e0e0eb" : "#171923",
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/pomodoro-task" element={<Pomodoro />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
