import React from 'react';
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {Container} from "../../components/Container";
import {BlockText} from "../../components/BlockText";
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/img6.png"
import {GridWrapper} from "../../components/GridWrapper";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <BlockText text="Личные качества"></BlockText>
                <GridWrapper>
                {/* <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"20px"}> */}
                    <Skill imgIcon={img1} title={"Терпение"}
                           text={"При отладке багов или работе с устаревшим кодом"}/>
                    <Skill imgIcon={img2} title={"Ответственность"}
                           text={"Довожу проекты до конца и соблюдаю дедлайны"}/>
                    <Skill imgIcon={img3} title={"Усидчивость"}
                           text={"Готова предлагать улучшения без внешних указаний"}/>
                    <Skill imgIcon={img4} title={"Желание учиться"}
                           text={"Изучаю новые фреймворки, успешно применила Next.js в личном проекте"}/>
                    <Skill imgIcon={img5} title={"Клиентоориентированность"}
                           text={"Учитываю потребности пользователей и бизнеса при разработке интерфейсов"}/>
                    <Skill imgIcon={img6} title={"Проактивность"}
                           text={"Умею сосредотачиваться на долгосрочных или сложных задачах"}/>
                {/* </FlexWrapper> */}
                </GridWrapper>
            </Container>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`

`

