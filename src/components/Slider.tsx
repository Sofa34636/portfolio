import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";
import {theme} from "../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>@ivan ivanow</p>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className="active"></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Slide = styled.div`

`
const Pagination = styled.div`
    span{
       display: inline-block;
        width: 7px;
        height: 7px;
        background-color: ${theme.colors.accentYellow};
        border-radius: 20px;
        
        &+span{
            margin-left: 5px;
        }
        &.active{
            background-color: ${theme.colors.accentViolet};
            width: 20px;
        }
        
    }
`