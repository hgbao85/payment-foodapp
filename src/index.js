import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentSuccess from '../src/pages/PaymentSuccess';
import PaymentCancel from '../src/pages/PaymentCancel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/payment-cancel" element={<PaymentCancel />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
