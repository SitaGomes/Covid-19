import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode
}

export interface ThemeProps {
    ToogleTheme(): void,
    theme: {
        tittle: string;
        colors: {
            background: string;
            icon: string;
            text: string;
        }
    },
}
