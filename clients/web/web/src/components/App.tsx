import React from 'react';
import { Products } from './pages/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
