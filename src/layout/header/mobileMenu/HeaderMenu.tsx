import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyleHeaderMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
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
            </MobileMenuPopup>
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

        display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`
export const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${theme.colors.fontBlack};
    display: none;

    ${(props) => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 70px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`
export const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 10;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.fontWhite};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${(props) => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            left: 0;
            
            background-color: ${theme.colors.fontWhite};
            position: absolute;
            transform: translateY(-10px);

            ${(props) => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);

            `}
        }

        &::after {
            display: block;
            width: 24px;
            height: 2px;
            left: 0;
            background-color: ${theme.colors.fontWhite};
            position: absolute;
            transform: translateY(10px);

            ${(props) => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
                width: 36px;
            `}
        }
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
    color: ${theme.colors.accentYellow};

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
