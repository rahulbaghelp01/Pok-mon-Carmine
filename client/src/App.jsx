import { Routes, Route } from "react-router-dom"
import AuthPage from "./pages/auth"
import Home from "./pages/home"
import Profile from "./pages/profile"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

