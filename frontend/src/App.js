import Login from "./components/Login.tsx";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./components/Register.tsx";
import Home from "./components/Home.tsx";
 
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
  </BrowserRouter>
  );
}
 
export default App;