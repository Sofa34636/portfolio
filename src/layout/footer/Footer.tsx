import React from 'react';
import {Icon} from "../../components/icon";
import styled from "styled-components";
import {Copyright, Subtitle, Text} from "../../components/Text";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>

                <FlexWrapper justify={"space-between"} align={"center"} >
                    <FlexWrapper direction={"column"}  gap={"20px"} >
                        <a href="mailto:www.sofalist21@gmail.com">www.sofalist21@gmail.com</a>
                        <p>front-end разработчик</p>
                    </FlexWrapper>
                    <BlocFooter>
                        <Subtitle>Медиа</Subtitle>
                        <SocialList>
                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId={"github"} width={'40'} height={'40'}/>
                                </SocialLink>
                            </SocialItem>
                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId={"telegram"} width={'40'} height={'40'} viewBox={"0 0 35 30"}/>
                                </SocialLink>
                            </SocialItem>
                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId={"discord"} width={'40'} height={'40'}/>
                                </SocialLink>
                            </SocialItem>
                        </SocialList>
                    </BlocFooter>
                </FlexWrapper>
                <Copyright>© Copyright 2025. Made by Sofa</Copyright>
            </Container>
        </StyledFooter>
    )
        ;
};

const StyledFooter = styled.footer`
    margin: 40px 0;
    a{
        color: ${theme.colors.fontBlack};
    }
    ${Container} > ${FlexWrapper} {
        @media ${theme.media.mobile} {
            justify-content: center;
            flex-direction: column;
            gap: 50px;
        }
    }
    ${Copyright}{
        margin-top: 50px;
    }
`
const BlocFooter = styled.div`
    background-color: ${theme.colors.accentYellow};
    padding: 16px;
    color: ${theme.colors.fontWhite};
    text-align: center;

    ${Subtitle} {
    padding-bottom: 20px;
        
    }
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;

`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
    color: ${theme.colors.fontWhite};
    cursor: pointer;

    &:hover {
        transform: translateY(40px);
    }
`



