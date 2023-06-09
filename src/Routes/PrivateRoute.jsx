/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-56"></progress>;
    }
    if (user) {
        return children;
    }

    return <Navigate to='/sign-in' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;