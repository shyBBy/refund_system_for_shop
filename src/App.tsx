import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import {MainRoutes} from "./routes/routes";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    return (
        <>
            <MainRoutes/>
            <ToastContainer position="bottom-right" theme="colored"/>
        </>
    );
}

