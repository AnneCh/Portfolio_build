import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Components/Enter';
import MainDev from './Components/MainDev';
import MainMul from './Components/MainMul';
import Contact from './Components/Contact';
import WhatElse from './Components/WhatElse';
import { NavbarDev, NavbarMBM, internalNavDev } from './Components/Navbar';
import Error from './Components/Error';
import WhyBlockchain from './Components/WhyBlockchain';




export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/MainDev" element={<MainDev />}/>
                <Route path="/MainMul" element={<MainMul />}/>
                <Route path="/Contact" element={<Contact />}/>
                <Route path="/WhatElse" element={<WhatElse />}/>
                <Route path="/WhyBlockchain" element={<WhyBlockchain />} />
                <Route path="*" element={<Error />} />
                <Route index element={<MainPage />} />
                <Route path="/" element={<MainPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

