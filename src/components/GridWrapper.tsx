import styled from "styled-components";

export const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, auto));
    grid-auto-rows: minmax(200px, auto);
    align-content: center;
    gap: 20px;
    justify-items: center;
`