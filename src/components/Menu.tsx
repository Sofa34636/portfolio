import React from 'react';
import styled from "styled-components";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyleMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return (<li key={index}>
                            <a href=''> {item}</a>
                        </li>
                    )
                })}
            </ul>
        </StyleMenu>
    );
};

export const StyleMenu = styled.nav`
    ul {
        display: flex;
        gap: 70px;
        justify-content: center;
    }
`;