import React from 'react';
import MyPhoto from '../../assets/images/MyPhoto.png';
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {SectionText, Title} from "../../components/Text";
import {theme} from "../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-around"} align="center" wrap={"wrap"}>

                    <BlocMain>
                        <Title weight="700" size="48px" Fmin={36} Fmax={50}>I am Sofa</Title>

                        <SectionText Fmin={24} Fmax={32}> <SpanMain> Front-end</SpanMain> Developer</SectionText>

                    </BlocMain>
                    <PhotoWraper>

                        <Photo src={MyPhoto} alt=''/>
                    </PhotoWraper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    display: flex;
`
const SpanMain = styled.span`
    color: ${theme.colors.fontYellow};
`
const BlocMain = styled.div`
    text-align: left;
`

const Photo = styled.img`
    height: 500px;
    width: auto;

    @media ${theme.media.mobile}{
    height: 400px;
    }
}
`
const PhotoWraper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;

    &::before {
        content: '';
        position: absolute;
        border: 5px solid ${theme.colors.accentYellow};
        width: 330px;
        height: 500px;
        top: -20px;
        left: 35px;
        z-index: -1;
        @media ${theme.media.mobile}{
            top: -30px;
            width: 280px;
            height: 400px;
        }
    }
`