import { Navbar } from "./Components/Navbar/navbar";
import { HomePage } from "./Routes/homePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodoList } from "./Components/Todos/todos";
import Pomodoro from "./Components/Pomodoro/pomodoro";
import { Footer } from "./Components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/pomodoro-task" element={<Pomodoro />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
