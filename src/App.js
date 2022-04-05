import { Navbar } from "./Components/Navbar/navbar";
import { HomePage } from "./Routes/homePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodoList } from "./Components/Todos/todos";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
