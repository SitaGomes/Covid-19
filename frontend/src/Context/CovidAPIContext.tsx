import { createContext, useEffect, useState } from "react";
import { ChildrenProps, CovidContextProps, CovidProps, MMMProps, ResetWeeksDataProps } from "Types";

export const CovidContext = createContext({} as CovidContextProps)

const axios = require('axios')

export function CovidAPIContext ({children}: ChildrenProps) {


    const [allWeeksDataOfDeaths, setAllWeeksDataOfDeaths] = useState([] as number[])

    const [sumOfFirstWeekDeaths, setSumOfFirstWeekDeaths] = useState(0)
    const [sumOfSecondWeekDeaths, setSumOfSecondWeekDeaths] = useState(0)

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

            const casesLength = cases.length
            
            const Reset = {
                firstWeek: 0,
                secondWeek: 0,
            }

            const allWeeksDeaths: number[] = []

            let sum1 = 0
            let sum2 = 0


            const mapCases = (covid: CovidProps, index: number) => {
                
                if (index === 0) {
                    Reset.firstWeek = covid.Deaths
                }
                
                if (index === 7) {
                    Reset.secondWeek = covid.Deaths
                }
                
                if (index > 0 && index < casesLength){
                    allWeeksDeaths[index] = covid.Deaths
                }

                if (index > 0 && index < 8){
                    sum1 += covid.Deaths
                }
                
                if (index > 7 && index < 15) {
                    sum2 += covid.Deaths
                }
                
                
                if (index === casesLength - 1) {

                    setSumOfFirstWeekDeaths(sum1 - (Reset.firstWeek * 7))
                    setSumOfSecondWeekDeaths(sum2 - (Reset.secondWeek * 7))
                    
                    setResetWeekData({ first: Reset.firstWeek, second: Reset.secondWeek })
                    setAllWeeksDataOfDeaths(allWeeksDeaths)
                    
                }
                
            }
            
            setMediaMovelMortes({
                firstResult: Math.floor(sumOfFirstWeekDeaths / 7),
                secondResult: Math.floor(sumOfSecondWeekDeaths / 7),
            })
            
            cases.forEach(mapCases)
        }
        
        getTwoWeeksData()
    }, [sumOfFirstWeekDeaths, sumOfSecondWeekDeaths,])
    

    return(
        <CovidContext.Provider value={{resetWeekData, mediaMovelMortes, allWeeksDataOfDeaths,  sumOfFirstWeekDeaths, sumOfSecondWeekDeaths}}>
            {children}
        </CovidContext.Provider>
    )
} 