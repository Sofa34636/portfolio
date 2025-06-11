import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {BlockText} from "../../components/BlockText";
import {Subtitle, Text} from "../../components/Text";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Training = () => {
    return (
        <TrainingSection>
            <Container>
                <BlockText text={"Обучение"}></BlockText>
                <TrainingContent>
                    <FlexWrapper justify={"space-between"} gap={"20px"}>
                        <University>
                            <Subtitle>Университет ДВФУ</Subtitle>
                            <span>Бакалавр</span>
                            <span>  Сен 1021 - Июл 2025</span>

                        </University>
                        <TrainingBLocText>
                            <Subtitle>Прикладная информатика в компьютерном дизайне</Subtitle>
                            <Text> Направление бакалавриата, которое готовит специалистов в сфере анализа,
                                проектирования и разработки программного обеспечения, а также проектирования
                                пользовательских интерфейсов и компьютерной графики.</Text>
                        </TrainingBLocText>
                    </FlexWrapper>
                </TrainingContent>
            </Container>
        </TrainingSection>
    );
};

const TrainingSection = styled.section`

`
const TrainingContent = styled.div`
    background: ${theme.colors.fontWhite};
    padding: 25px 40px 50px;
    border: 1px solid black;

    ${FlexWrapper} {
        @media ${theme.media.semiTablet} {
            flex-direction: column;
            gap: 70px;
        }
    }

    ${Subtitle} {
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid black;
    }
`
const University = styled.div`
    white-space: nowrap;
    max-width: 700px;

    span:last-child {
        background: ${theme.colors.accentYellow};
        color: ${theme.colors.fontWhite};
        margin-left: 15px;
        padding: 5px;
        white-space: nowrap;

    }
`
const TrainingBLocText = styled.div`
    max-width: 700px;
    flex-shrink: 5;
`