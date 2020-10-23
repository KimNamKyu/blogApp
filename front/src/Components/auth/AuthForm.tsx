import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../../Components/common/Button';
import { Link } from 'react-router-dom';
import { register } from '../../serviceWorker';


const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }

    & + & {
        margin-top: 1rem;
    }
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover {
            color: ${palette.gray[9]};
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;

interface AuthFormProps {
    type: string
}

const AuthForm: React.FC<AuthFormProps> = ({type}) => {
    const text = type === 'login' ? '로그인' : '회원가입'
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form>
                <StyledInput autoComplete="username" name="username" placeholder="아이디" />
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                />
                {type === 'register' && (
                    <StyledInput
                        autoComplete="new-password"
                        name="passwordContirm"
                        placeholder="비밀번호 확인"
                        type="password"
                    />
                )}
                <ButtonWithMarginTop>{text}</ButtonWithMarginTop>
                <Footer>
                    {type === 'login' ? (
                        <Link to="/register">회원가입</Link>
                    ) : (
                        <Link to="/login">로그인</Link>
                    )}
                </Footer>
            </form>
        </AuthFormBlock>
    )
}

export default AuthForm;