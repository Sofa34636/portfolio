import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyleTabMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return (<LinkItem key={index}>
                            <Link href=''> {item}</Link>
                        </LinkItem>
                    )
                })}
            </ul>
        </StyleTabMenu>
    );
};

export const StyleTabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 370px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

export const LinkItem = styled.nav`
    
`

export const Link = styled.a`
   
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${theme.colors.fontBlack};
    padding-bottom: 3px;
    z-index: 0;
    
    position: relative;
    
    &:hover{
        &::before{
            height: 10px;
        }
    }
    
    &::before{
        content: "";
        display: inline-block;
        //height: 10px;
        background-color: ${theme.colors.accentViolet};
        bottom: 0;
        z-index: -1;
        
        position: absolute;
        left: -10px;
        right: -10px;
    }
`;