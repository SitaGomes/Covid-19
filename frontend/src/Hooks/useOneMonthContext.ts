import { useContext } from 'react';
import { MonthContext } from "Context/OneMonthContext"

export function useOneMonthContext () {
    const value = useContext(MonthContext)

    return value
}