import React from 'react';
import AuthForm from '../Components/auth/AuthForm';
import AuthTemplate from '../Components/auth/AuthTemplate';

const LoginPage:React.FC<any> = () => {
    return (
        <AuthTemplate>
            <AuthForm />
        </AuthTemplate>
    )
}

export default LoginPage;