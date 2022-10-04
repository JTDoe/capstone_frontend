import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Login from './Createcoach'


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Login/>} />
        </Routes>
    );
};

export default Router;