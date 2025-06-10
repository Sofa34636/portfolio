import React from 'react';
import styled from "styled-components";
import {Subtitle, Text} from "../../../components/Text";
import {theme} from "../../../styles/Theme";

type SkillBoxType = {
    title: string,
    text: string,
}

export const SkillBox = (props: SkillBoxType) => {
    return (
        <StyledBox>
            <Subtitle>{props.title}</Subtitle>
            <Text>{props.text}</Text>
        </StyledBox>
    );
};

const StyledBox = styled.div`
background-color: ${theme.colors.fontWhite};
    max-width: 200px;
    padding: 10px;  
    border: 1px solid black;
    ${Subtitle}{
        border-bottom: 1px solid black;
    }
`