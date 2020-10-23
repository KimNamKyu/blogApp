import React from 'react';
import AuthForm from '../Components/auth/AuthForm';
import AuthTemplate from '../Components/auth/AuthTemplate';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type='login'/>
        </AuthTemplate>
    )
}

export default LoginPage;