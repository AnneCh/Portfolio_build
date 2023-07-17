import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Components/Enter'
import MainMul from './Components/MainMul'
import Contact from './Components/Contact'
import SharedLayout from './Components/SharedLayout'
import Error from './Components/Error'
import About from './Components/About'
import Others from './Components/Others'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/MainMul" element={<MainMul />} />
            <Route path="/Others" element={<Others />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
