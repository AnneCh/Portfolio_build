import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Components/Enter'
import MainDev from './Components/MainDev'
import MainMul from './Components/MainMul'
import Contact from './Components/Contact'
import Others from './Components/Others'
import Studies from './Components/Studies'
import SharedLayout from './Components/SharedLayout'
import Error from './Components/Error'
import WhyBlockchain from './Components/WhyBlockchain'
import HealthInside from './Components/Cards/Insides/HealthCard_inside'
import MartialInside from './Components/Cards/Insides/Martial_inside'
import MusicInside from './Components/Cards/Insides/Music_inside'

import PopUp from './Components/PopUp'

export default function App() {
  return (
    <>
      <PopUp trigger={true}>
        <h2>This website is under construction!</h2>
      </PopUp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/MainDev" element={<MainDev />} />
            <Route path="/MainMul" element={<MainMul />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/WhatElse" element={<Others />} />
            <Route path="/HealthCard_inside" element={<HealthInside />} />
            <Route path="/Martial_inside" element={<MartialInside />} />
            <Route path="/Music_inside" element={<MusicInside />} />
            <Route path="/Studies" element={<Studies />} />
            <Route path="/WhyBlockchain" element={<WhyBlockchain />} />
            <Route path="*" element={<Error />} />
            <Route path="/" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
