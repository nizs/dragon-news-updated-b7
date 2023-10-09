import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadPinner from '../pages/shared/LoadPinner/LoadPinner';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <LoadPinner></LoadPinner>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace={true} />
};

export default PrivateRoute;