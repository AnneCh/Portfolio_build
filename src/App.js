import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Components/Enter';
import MainDev from './Components/MainDev';
import MainMul from './Components/MainMul';
import Contact from './Components/Contact';
import WhatElse from './Components/WhatElse';
import SharedLayout from './Components/SharedLayout';
import Error from './Components/Error';
import WhyBlockchain from './Components/WhyBlockchain';



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<MainPage/>} />
                    <Route path="/MainDev" element={<MainDev />}/>
                    <Route path="/MainMul" element={<MainMul />}/>
                    <Route path="/Contact" element={<Contact />}/>
                    <Route path="/WhatElse" element={<WhatElse />}/>
                    <Route path="/WhyBlockchain" element={<WhyBlockchain />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/" element={<MainPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

