import styled from 'styled-components';
import {Icon} from "../../components/icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/HeaderMenu";

const items = ["Проекты", "Навыки", "Работы", "Обучение", "Контакты"];
export const Header = () => {

    return (
        <StyleHeader>
            <Container>
                <FlexWrapper justify="space-between" align={"center"}>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>

                    <Images>
                        <Link href="#">
                            <Icon iconId={'telegram'} width={'50'} height={'50'} viewBox={"0 0 35 30"}/>
                        </Link>
                        <Link href="#">
                            <Icon iconId={'github'} width={'50'} height={'50'}/>
                        </Link>
                        <Link href="#">
                            <Icon iconId={'discord'} width={'50'} height={'50'}/>
                        </Link>
                    </Images>
                </FlexWrapper>
            </Container>
        </StyleHeader>
    );
};

export const Images = styled.div`
    display: flex;
    gap: 20px;
`
export const Link = styled.a`
  cursor: pointer;
`;
export const StyleHeader = styled.header`
    padding: 20px 0;
    background-color: black;
    //position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`

