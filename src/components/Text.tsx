import styled from "styled-components";
import {theme} from "../styles/Theme";

type TextPropsType = {
    size?: string,
    color?: string,
    weight?: string,
    align?: string,
    Fmin?: number,
    Fmax?: number,
}

export const SectionText = styled.h1<TextPropsType>`
    font-weight: 700;
    line-height: 124%;
    color: ${theme.colors.fontBlack} ;
    font-size: ${props =>
            props.Fmin && props.Fmax
                    ? `calc((100vw - 360px) / (1400 - 360) * (${props.Fmax} - ${props.Fmin}) + ${props.Fmin}px)`
                    : props.size || '32px'};
   
`
export const Title = styled.h2<TextPropsType>`

    font-weight: ${props => props.weight || "500"};
    line-height: 124%;
    font-size: ${props => props.size || "32px"};
    color: theme.colors.fontBlack;
    font-size: ${props =>
            props.Fmin && props.Fmax
                    ? `calc((100vw - 360px) / (1400 - 360) * (${props.Fmax} - ${props.Fmin}) + ${props.Fmin}px)`
                    : props.size || '32px'};
`
export const Subtitle = styled.h3<TextPropsType>`
   
    font-weight: 500;
    font-size: ${props => props.size || "18px"} ;
    line-height: 124%;
`
export const Text = styled.p`
   
    font-weight: 400;
    font-size: 15px;
    line-height: 160%;
  
    color: #767676;
`



export const Copyright = styled.small`
    display: flex;
    justify-content: center;

    font-weight: 400;
    font-size: 16px;
    opacity: 0.5;
`
