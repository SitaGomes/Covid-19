import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode,
    style?: object,
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
    loadingAPI: boolean,
    sumOfAllWeeksDeaths: AllWeeksDeathsProps,
    allWeeksDataOfDeaths: number[],
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

export interface AllWeeksDeathsProps {
    firstWeek: number,
    secondWeek: number,
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
        Location: {
            lat: number,
            lon: number
        }
    }
}

export interface MonthContextProps {
    biggestNumberOfDeaths: number,
    biggestNumberOfCases: number,
    userLatitude: number,
    userLongitude: number,
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