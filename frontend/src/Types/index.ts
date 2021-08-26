import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode
}

export interface WeeksDataProps {
    index: string,
    values: number,
}

export interface ResetWeeksDataProps {
    first: number,
    second: number,
}

export interface CovidContextProps {
    sumOfFirstWeekDeaths: number,
    sumOfSecondWeekDeaths: number,
    firstWeekData: number[],
    secondWeekData: number[],
    mediaMovelMortes: MMMProps, 
    resetWeekData: ResetWeeksDataProps,
}

export interface MMMProps {
    firstResult: number,
    secondResult: number,
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

export interface WeekNumberProps {
    firstWeek: string,
    secondWeek: string,
}

export interface CovidProps {
    Deaths: number,
    Confirmed: number,
}

export interface BiggestDataProps {
    ofDeaths: number,
    ofCases: number
}

export interface DatabaseProps {
    Covid: {
        Deaths: number,
        Cases: number
    },
    User: {
        Date: string,
        Time: string,
    }
}

export interface MonthContextProps {
    biggestNumberOfDeaths: number,
    biggestNumberOfCases: number,
    todaysDate: {
        year: number,
        month: number,
        day: number,
    }
    todaysTime: {
        hour: number,
        minutes: number,
        seconds: number
    }
}