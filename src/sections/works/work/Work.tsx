import React from 'react';
import {Subtitle, Text, Title} from "../../../components/Text";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Button, LinkButton} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

type WorkPropsType = {
    languages?: string,
    src?: string,
    name?: string,
    text?: string,
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImgWrapper>

                <Img src={props.src} alt=""/>
                <Button>
                    Открыть сайт
                </Button>
            </ImgWrapper>
            {/*<Text>{props.languages}</Text>*/}
            <Description>
                <Subtitle size={"25px"}>{props.name}</Subtitle>
                <Text>{props.text}</Text>
                <FlexWrapper gap={"20px"}>
                    <LinkButton href='#'>gitHab</LinkButton>
                    <LinkButton href='#'>Сайт</LinkButton>
                </FlexWrapper>
            </Description>
        </StyledWork>
    );
};

const ImgWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &:before {
        transition: 1s;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2px);
        opacity: 0;

        position: absolute;
    }

    &:hover {
        &:before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
            transition: 1s;
        }
    }

    @media ${theme.media.tablet} {

        &:before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
    

`
const Img = styled.img`
    width: 100%;
    object-fit: cover;  //содержимое заполняет контейнер, при этом сохраняя пропорции.
`
const StyledWork = styled.div`
    width: 330px;
    max-width: 550px;
    flex-grow: 1;
    background-color: ${theme.colors.fontWhite};
    border: 1px solid #000;
    
    @media ${theme.media.desktop} {
    max-width: 330px;
    }
`
const Description = styled.div`
    padding: 30px 20px;
    ${Text}{
        padding: 15px 0;
    }
`

