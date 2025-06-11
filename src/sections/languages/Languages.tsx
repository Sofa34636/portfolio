import React from 'react';
import {BlockText} from "../../components/BlockText";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {GridWrapper} from "../../components/GridWrapper";
import skill1 from "../../assets/images/skillImg/skill1.png";
import skill2 from "../../assets/images/skillImg/skill2.png";
import skill3 from "../../assets/images/skillImg/skill3.png";
import skill4 from "../../assets/images/skillImg/skill4.png";
import skill5 from "../../assets/images/skillImg/skill5.png";
import skill6 from "../../assets/images/skillImg/skill6.png";
import skill7 from "../../assets/images/skillImg/skill7.png";
import skill8 from "../../assets/images/skillImg/skill8.png";
import skill9 from "../../assets/images/skillImg/skill9.png";
import skill10 from "../../assets/images/skillImg/skill10.png";

export const Languages = () => {
    return (
        <LanguagesSection>
            <Container>
                <BlockText text={"Навыки"}></BlockText>
                <GridSkills>
                    <img alt={"skill"} src={skill1} />
                    <img alt={"skill"} src={skill2} />
                    <img alt={"skill"} src={skill3} />
                    <img alt={"skill"} src={skill4} />
                    <img alt={"skill"} src={skill5} />
                    <img alt={"skill"} src={skill6} />
                    <img alt={"skill"} src={skill7} />
                    <img alt={"skill"} src={skill8} />
                    <img alt={"skill"} src={skill9} />
                    <img alt={"skill"} src={skill10} />
                </GridSkills>
            </Container>
        </LanguagesSection>
    );
};

const LanguagesSection = styled.section`

`
const GridSkills = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-auto-rows: auto;
    gap: 50px;
    
    align-items: center;
    justify-items: center;
`

