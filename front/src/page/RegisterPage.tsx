import React from 'react';
import AuthForm from '../Components/auth/AuthForm';
import AuthTemplate from '../Components/auth/AuthTemplate';

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type='register'/>
        </AuthTemplate>
    )
}

export default RegisterPage;