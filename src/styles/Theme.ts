type Theme = {
    colors: {
        primary: string;
        secondary: string;
        accentYellow: string;
        accentViolet: string;
        fontBlack: string;
        fontWhite: string;
        fontYellow: string;
        placeholder: string;
    };
    media: {
        tablet: string;
        mobile: string;
        desktop:string;
        semiTablet:string;
    };
};

export const theme: Theme = {
    colors: {
        primary: "#F0F0F6",
        secondary: "#FFFFFF",
        accentYellow: "#FFC640",
        accentViolet: "#F6769E ",
        fontBlack: "#2B2B2B",
        fontWhite: "#FFFFFF",
        fontYellow: "#FFC640",
        placeholder: "#767676"
    },
    media:{
        desktop: "screen and (min-width: 1140px)",
        semiTablet: "screen and (max-width: 885px)",
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 576px)",
    }
};
