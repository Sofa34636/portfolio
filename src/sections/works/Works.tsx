import React from 'react';
import {Work} from "./work/Work";
import proj1 from "../../assets/images/proj1.png";
import proj2 from "../../assets/images/proj2.png";
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {BlockText} from "../../components/BlockText";
import {TabMenu} from "./TabMenu";

const items = ["All", "typescript", "React", "HTML"];

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <BlockText text={"Проекты"}></BlockText>
                <TabMenu menuItems={items}/>
                <FlexWrapper gap={"30px"} wrap={"wrap"} align={"flex-start"}>
                    <Work src={proj1} languages={"HTML SCSS Python Flask"} name={"ChertNodes"}
                          text={"Minecraft servers hosting"}/>
                    <Work src={proj1} languages={"HTML SCSS Python Flask"} name={"ChertNodes"}
                          text={"Minecraft servers hosting"}/>
                    <Work src={proj1} languages={"HTML SCSS Python Flask"} name={"ChertNodes"}
                          text={"Minecraft servers hosting"}/>
                    <Work src={proj1} languages={"HTML SCSS Python Flask"}
                          name={"ChertNodes"}
                          text={"Minecraft servers hosting"}/>
                    <Work src={proj2} languages={"Vue TS Less"} name={"Portfolio"} text={"You’re using it rn"}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`