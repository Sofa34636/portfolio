import styled from "styled-components";
import {theme} from "../styles/Theme";


export const LinkButton = styled.a`
    color: black;
    padding: 8px 16px;
    border: 1px solid black;
    transition: 0.2s;

    &:hover {
        display: inline-block;
        transform: translateY(5px);
        background-color: ${theme.colors.accentYellow};
        color: ${theme.colors.fontWhite};

    }
`
export const Button = styled.button`
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    width: 170px;
    height: 32px;
    background-color: ${theme.colors.accentYellow};
`