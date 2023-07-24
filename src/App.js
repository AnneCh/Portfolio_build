import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Components/Enter'
import Events from './Components/Events'
import Writing from './Components/Writing'
import Contact from './Components/Contact'
import SharedLayout from './Components/SharedLayout'
import Error from './Components/Error'
import About from './Components/About'
import Others from './Components/Others'
import Anne from './Components/Anne'
import Kevin from './Components/Kevin'
import Jim from './Components/Jim'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/Writing" element={<Writing />} />
            <Route path="/Others" element={<Others />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/Anne" element={<Anne />} />
            <Route path="/Kevin" element={<Kevin />} />
            <Route path="/Jim" element={<Jim />} />
            <Route path="/" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
