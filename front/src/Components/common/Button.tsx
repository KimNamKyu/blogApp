import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
    border: none;
    border-radius:4px;
    font-size:1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    $:hover {
        backgrount: ${palette.gray[6]};
    }
`;

const Button: React.FC<any> = (children) => <StyledButton {...children}/>;
export default Button;
