import {theme} from "./Theme";
//ПОТОМ ПРИГОДИТС

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeigh?: number,
    Fmin: number,
    Fmax: number,

}

export const font = (props: FontPropsType) => `
font-family: ${props.family || "Fira Code"};
font-weight: ${props.weight || "400"};
color: ${props.color || theme.colors.fontBlack};
line-height:${props.lineHeigh || "1.2"};
  font-size: calc((100vw - 360px) / (1400 - 360) * (${props.Fmax} - ${props.Fmin}) + ${props.Fmin}px);
`