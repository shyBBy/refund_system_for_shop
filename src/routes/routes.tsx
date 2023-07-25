import React from "react";
import {Route, Routes} from "react-router-dom";
import {RefundView} from "../views/Refund/RefundView";
import {NotFound404} from "../views/NotFound/NotFound404";
import {MainView} from "../views/Main/MainView";

export const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainView/>}/>
                <Route path="/refund" element={<RefundView/>}/>
                <Route path='*' element={<NotFound404/>}/>
            </Routes>
        </>
    )
}