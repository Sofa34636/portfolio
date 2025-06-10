import React from 'react';
import {Title} from "../../components/Text";
import {Icon} from "../../components/icon";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Slider} from "../../components/Slider";
import {Container} from "../../components/Container";
import {BlockText} from "../../components/BlockText";
import {theme} from "../../styles/Theme";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>


                <BlockText text={"Отзывы"}></BlockText>
                <FlexWrapper direction={"column"} align={"center"}>
                    <IconWrapper>

                    <Icon iconId={"commas"} width={"50"} height={"50"} viewBox={"0 0 50 50"}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
   
`
const IconWrapper = styled.div`
    position: relative;
    margin: 50px 0px 70px;
    
    &:before{
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: ${theme.colors.accentViolet};
        transform: rotate(50deg) translate(-50%, -50%);
        z-index: -1;
        left: 50%;
        top: 50%;
        transform-origin: top left;
        
        position: absolute;
    }
    
`