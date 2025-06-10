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
            <ImgesWrapper>

                <Imges src={props.src} alt=""/>
                <Button>
                    ve
                </Button>
            </ImgesWrapper>
            {/*<Text>{props.languages}</Text>*/}
            <Description>
                <Subtitle size={"25px"}>{props.name}</Subtitle>
                <Text>{props.text}</Text>
                <FlexWrapper gap={"20px"}>
                    <LinkButton href='#'>Live</LinkButton>
                    <LinkButton href='#'>Cached</LinkButton>
                </FlexWrapper>
            </Description>
        </StyledWork>
    );
};

const ImgesWrapper = styled.div`
    position: relative;

    &:hover {

        &:before {
            transition: 5s;
            content: '';
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);

            position: absolute;
        }

        ${Button} {
            opacity: 1;
            transition: 1s;
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`
//ставим стили элементу, который уже отдельно прописан
const Imges = styled.img`

    max-width: 330px;
    width: 100%;
    height: 200px;
    object-fit: cover;
`
const StyledWork = styled.div`
    max-width: 330px;
    width: 100%;
    background-color: ${theme.colors.fontWhite};
    border: 1px solid #000;
    margin-bottom: 50px;
`
const Description = styled.div`
    padding: 30px 20px;
    ${Text}{
        padding: 15px 0;
    }
`

