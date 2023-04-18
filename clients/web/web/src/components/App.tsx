import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from './pages/Products';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
