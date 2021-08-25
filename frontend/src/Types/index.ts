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

export interface CovidProps {
    ID: string,
    Deaths: number,
    Confirmed: number,
    Recovered: number,
    Active: number,
    Date: string,
}

export interface ResetWeekProps {
    firstWeek: number,
    secondWeek: number,
}

export interface WeekProps {
    first: {
        number: number;
        date: string;
    },
    second: {
        number: number;
        date: string;
    },
    third: {
        number: number;
        date: string;
    },
    fourth: {
        number: number;
        date: string;
    },
    fifth: {
        number: number;
        date: string;
    },
    sixth: {
        number: number;
        date: string;
    },
    seventh: {
        number: number;
        date: string;
    },
}
