import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon";
import {Subtitle, Text} from "../../../components/Text";
import {theme} from "../../../styles/Theme";

type SkillPropsType = {
    iconId: string,
    title: string,
    text: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkills>
            <Icon iconId={props.iconId} viewBox={"0 0 74 74"} width={'74'} height={'74'}/>
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
    ${Subtitle}{
        padding: 25px 0 15px 0;
    }
`


