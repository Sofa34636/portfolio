type Theme = {
    colors: {
        primary: string;
        secondary: string;
        accentYellow: string;
        accentViolet: string;
        fontBlack: string;
        fontWhite: string;
        fontYellow: string;
    };
    media: {
        tablet: string;
        mobile: string;
    };
};

export const theme: Theme = {
    colors: {
        primary: "#F0F0F6",
        secondary: "#FFFFFF",
        accentYellow: "#FFC640",
        accentViolet: "#C778DD",
        fontBlack: "#2B2B2B",
        fontWhite: "#FFFFFF",
        fontYellow: "#FFC640"
    },
    media:{
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 576px)",
    }
};
