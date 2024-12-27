import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div class="text-center">
                <div class="spinner-border loadingnow" role="status">
                    <span class="sr-only loadingnow">Loading...</span>
                </div>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to="/login" state={{ form: location }} replace></Navigate>
    )
}

export default PrivateRoute