import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon";
import {Subtitle, Text} from "../../../components/Text";
import {theme} from "../../../styles/Theme";

type SkillPropsType = {
    imgIcon: string,
    title: string,
    text: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkills>
            <img src={props.imgIcon} alt="skill" />
            <Subtitle>{props.title}</Subtitle>
            <Text>{props.text}</Text>
        </StyledSkills>
    );
};
const StyledSkills = styled.div`
    width: 310px;
    padding: 30px 20px;
    background-color: ${theme.colors.fontWhite};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid black;

    ${Subtitle}{
        padding: 25px 0 5px 0;
        margin-bottom: 10px;
        border-bottom: 1px solid black;
        
    }
    ${Text}{
      
    }
`


