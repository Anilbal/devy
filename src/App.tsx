import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgetPassword";
function App(){
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App;