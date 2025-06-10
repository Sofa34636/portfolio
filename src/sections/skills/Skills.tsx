import React from 'react';

import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {SectionText, Title} from "../../components/Text";
import {Container} from "../../components/Container";
import {BlockText} from "../../components/BlockText";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <BlockText text="Личные качества"></BlockText>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"20px"}>
                    <Skill iconId={"coding"} title={"Терпение"}
                           text={"При отладке багов или работе с устаревшим кодом"}/>
                    <Skill iconId={"gameDevelopment"} title={"Ответственность"}
                           text={"Довожу проекты до конца и соблюдаю дедлайны"}/>
                    <Skill iconId={"microphone"} title={"Усидчивость"}
                           text={"Готова предлагать улучшения без внешних указаний"}/>
                    <Skill iconId={"photographer"} title={"Желание учиться"}
                           text={"Изучаю новые фреймворки, успешно применила Next.js в личном проекте"}/>
                    <Skill iconId={"illustration"} title={"Клиентоориентированность"}
                           text={"Учитываю потребности пользователей и бизнеса при разработке интерфейсов"}/>
                    <Skill iconId={"microphone"} title={"Проактивность"}
                           text={"Умею сосредотачиваться на долгосрочных или сложных задачах"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`

`
