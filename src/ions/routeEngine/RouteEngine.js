import React from 'react'
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../layout/Layout';
import Home from "../../templates/home/Home";
import Bookings from '../../templates/login/Bookings';
import NoPage from '../../templates/noPage/NoPage';
export default function RouteEngine() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
