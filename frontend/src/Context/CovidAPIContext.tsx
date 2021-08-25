import { createContext, useEffect, useState } from "react";
import { ChildrenProps, CovidContextProps, CovidProps, MMMProps, ResetWeeksDataProps } from "Types";

export const CovidContext = createContext({} as CovidContextProps)

const axios = require('axios')

export function CovidAPIContext ({children}: ChildrenProps) {


    const [firstWeekData, setFirstWeekData] = useState([] as number[])
    const [secondWeekData, setSecondWeekData] = useState([] as number[])

    const [sumOfFirstWeekDeaths, setOfSumFirstWeekDeaths] = useState(0)
    const [sumOfSecondWeekDeaths, setOfSumSecondWeekDeaths] = useState(0)

    const [mediaMovelMortes, setMediaMovelMortes] = useState({} as MMMProps)

    const [resetWeekData, setResetWeekData] = useState({} as ResetWeeksDataProps)


    useEffect(() => {
        const options = {
            method: "GET",
            url: "http://localhost:3003/cases/weeks"
        }

        const getTwoWeeksData = async () => {
            const {data} = await axios(options)
            const {cases} = data
            
            const Reset = {
                firstWeek: 0,
                secondWeek: 0,
            }

            const allFirstWeekDeaths: number[] = []
            const allSecondWeekDeaths: number[] = []

            let sum1 = 0
            let sum2 = 0


            const mapCases = (covid: CovidProps, index: number) => {

                if (index === 0) {
                    Reset.firstWeek = covid.Deaths
                }

                if (index === 7) {
                    Reset.secondWeek = covid.Deaths
                }

                if (index > 0 && index < 8){
                    allFirstWeekDeaths[index] = covid.Deaths
                    sum1 += covid.Deaths
                }
                
                if (index > 7 && index < 15) {
                    allFirstWeekDeaths[index] = covid.Deaths
                    sum2 += covid.Deaths
                }
                
                
                if (index === 14) {

                    setOfSumSecondWeekDeaths(sum2 - (Reset.secondWeek * 7))
                    setOfSumFirstWeekDeaths(sum1 - (Reset.firstWeek * 7))
                    setResetWeekData({ first: Reset.firstWeek, second: Reset.secondWeek })
                    setFirstWeekData(allFirstWeekDeaths)
                    setSecondWeekData(allSecondWeekDeaths)
                        
                }
                
            }
            
            cases.forEach(mapCases)
        }
        
        getTwoWeeksData()
    }, [])

    return(
        <CovidContext.Provider value={{resetWeekData, mediaMovelMortes, firstWeekData, secondWeekData, sumOfFirstWeekDeaths, sumOfSecondWeekDeaths}}>
            {children}
        </CovidContext.Provider>
    )
} 