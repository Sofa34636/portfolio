import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyleHeaderMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return (<ListItem key={index}>
                            <Link href=''>
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyleHeaderMenu>
    );
};

export const Link = styled.a`
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: transparent;
`

export const StyleHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 70px;
        justify-content: center;
    }
    @media ${theme.media.tablet} {
        display: none;
    }
`

export const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    //outline: 1px solid red;
    color: ${theme.colors.fontWhite};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`;

export const ListItem = styled.li`

    position: relative;

    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        height: 3px;
        background: ${theme.colors.accentYellow};
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }

    // 2 картинки


    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skew(12deg) translateX(5px);
            color: ${theme.colors.fontWhite};

            & + ${Mask} {
                transform: skew(12deg) translateX(-5px);

            }
        }


    }
`
