import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute({authenticated}) {
    return authenticated ? <Outlet /> : <Navigate to="/" />;
}
