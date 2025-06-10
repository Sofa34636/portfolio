import React from 'react';
import {BlockText} from "../../components/BlockText";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {SkillBox} from "./skillBox/SkillBox";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Icon} from "../../components/icon";

export const Languages = () => {
    return (
        <LanguagesSection>
            <Container>
                <BlockText text={"Навыки"}></BlockText>
                <FlexWrapper justify="space-between">
                    <WrapImg>
                        <Icon iconId={"figure1"} width="86" height="86" viewBox="0 0 86 86"></Icon>
                        <Icon iconId={"figure2"} width="63" height="63" viewBox="0 0 63 63"></Icon>
                        <Icon iconId={"figure3"} width="114" height="114" viewBox="0 0 114 114"></Icon>
                    </WrapImg>
                    <FlexWrapper gap={"20px"} align={"flex-start"} wrap={"wrap"}>
                        <SkillBox title={"Languages"} text={"TypeScript JavaScript"}/>
                        <SkillBox title={"Tools"} text={"VSCode Figma Git Insomnia"}/>
                        <SkillBox title={"Frameworks"} text={"React Next.js"}/>
                        <SkillBox title={"Frontend"} text={"GSAP Three.js Web Components"}/>
                        <SkillBox title={"Other"} text={"HTML CSS SCSS REST   Prettier Styled components"}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </LanguagesSection>
    );
};

const LanguagesSection = styled.section`

`
const WrapImg = styled.div`
    display: flex;
    gap: 20px;
`

const Deskription = styled.div`

`