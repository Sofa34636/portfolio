import React from 'react';
import styled from "styled-components";
import {Icon} from "./icon";
import {theme} from "../styles/Theme";


type BlockTextType = {
    text: string
}

export const BlockText = (props: BlockTextType) => {
    return (
        <StrokeText>
            <Title>
                {props.text}
            </Title>
        </StrokeText>
    );
};

const StyledIcon = styled(Icon)`
   
    
`;


const StrokeText = styled.div`
    background: ${theme.colors.accentYellow};
    max-width: 700px;
    display: flex;
    align-items: center;
    z-index: 10;
    margin-bottom: 50px;


    position: relative;
    overflow: hidden;
`

const Title = styled.h2`
    padding: 5px 20px 5px 0;
    font-weight: 500;
    line-height: 124%;
    font-size: 32px;
    color: ${theme.colors.fontWhite};
    background: ${theme.colors.accentYellow};
    display: inline-block;
    position: relative;
    


    &::before {
        content: "#";
        color: ${theme.colors.accentViolet};
      padding: 0 4px 0 4px;
    } 
    &::after {
        content: "";
        width: 900px;
        height: 2px;
        background-color: ${theme.colors.accentViolet};
        top: 50%;
        z-index: -1;
        position: absolute;
    }
`
