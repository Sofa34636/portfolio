import React from 'react';
import {BlockText} from "../../components/BlockText";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {LinkButton} from "../../components/Button";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <BlockText text={"Контакты"}></BlockText>
                <FlexWrapper justify="space-between" wrap="wrap" >
                    <div>
                        <StyledForm>
                            <Field placeholder={"Имя"}/>
                            <Field placeholder={"Номер"}/>
                            <Field placeholder={"Сообщение"} as={"textarea"}/>
                            <LinkButton type={"submit"}>Отправить</LinkButton>
                        </StyledForm>
                    </div>
                    <ContactsMap>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23014.402405335364!2d125.30247037029045!3d43.859967649912605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5e385d765abec117%3A0xb0b295eba4b51efb!2sChangchun%20Zoological%20and%20Botanical%20Park%20%EF%BC%88West%20Gate%EF%BC%89!5e0!3m2!1sru!2sru!4v1749647079770!5m2!1sru!2sru"
                            width="100%"
                            height="100%"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </ContactsMap>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 15px;

    textarea {
        resize: none;
        height: 150px;
    }
`
const Field = styled.input`
    width: 100%;
    border: 1px solid #000;
    padding: 7px 15px;

    &::placeholder {
        color: ${theme.colors.placeholder};
        text-transform: capitalize; // большие буквы первые
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.fontBlack};
    }

`
const ContactsMap = styled.div`

`