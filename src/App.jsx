import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.scss"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route  index element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
