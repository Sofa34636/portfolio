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
                    <FlexWrapper justify={"space-between"}>
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

    ${Subtitle} {
        padding-bottom: 30px;
    }
`
const University = styled.div`
    span:last-child {
        background: ${theme.colors.accentYellow};
        color: ${theme.colors.fontWhite};
        margin-left: 15px;
        padding: 5px;
    }
`
const TrainingBLocText = styled.div`
    max-width: 700px;
`