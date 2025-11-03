import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { GridLoader } from 'react-spinners';

const PrivateRoutes = ({children}) => {
    const {user,loading} = use(AuthContext) ;
    const location = useLocation() ;

    if(loading){
        return <GridLoader></GridLoader>
    }
    if(user && user.email){
        return children ;
    }
    
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;