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




const StrokeText = styled.div`
    background: ${theme.colors.accentYellow};
    width: 60%;
    display: flex;
    align-items: center;
    z-index: 10;
    margin-bottom: 50px;


    position: relative;
    overflow: hidden;
    
    @media ${theme.media.mobile} {
        margin-bottom: 25px;
        
    }
`

const Title = styled.h2`
    padding: 5px 20px 5px 0;
    font-weight: 500;
    line-height: 124%;
    color: ${theme.colors.fontWhite};
    background: ${theme.colors.accentYellow};
    display: inline-block;
    position: relative;
    

    font-size: calc((100vw - 360px) / (1400 - 360) * (32 - 28) + 28px);



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
