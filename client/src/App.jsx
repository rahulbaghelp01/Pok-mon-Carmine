import { Routes, Route } from "react-router-dom"
import AuthPage from "./pages/auth"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  )
}

