import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import MainPage from './Components/Enter';
import MainDev from './Components/MainDev';
import MainMul from './Components/MainMul';
import Contact from './Components/Contact';
import WhatElse from './Components/WhatElse';
import Error from './Components/Error';




export default function App() {
    return (
        <BrowserRouter>
            <MainPage />
            <Routes>
                <Route path="/MainDev" element={<MainDev />}/>
                <Route path="/MainMul" element={<MainMul />}/>
                <Route path="/Contact" element={<Contact />}/>
                <Route path="/WhatElse" element={<WhatElse />}/>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

