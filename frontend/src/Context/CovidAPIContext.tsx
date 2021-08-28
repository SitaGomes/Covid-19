import { createContext, useEffect, useState } from "react";
import { ChildrenProps, CovidContextProps, CovidProps, MMMProps, ResetWeeksDataProps, AllWeeksDeathsProps } from "Types";

export const CovidContext = createContext({} as CovidContextProps)

const axios = require('axios')

export function CovidAPIContext ({children}: ChildrenProps) {


    const [allWeeksDataOfDeaths, setAllWeeksDataOfDeaths] = useState([] as number[])

    const [sumOfAllWeeksDeaths, setSumOfAllWeeksDeaths] = useState({} as AllWeeksDeathsProps)

    const [mediaMovelMortes, setMediaMovelMortes] = useState({} as MMMProps)

    const [resetWeekData, setResetWeekData] = useState({} as ResetWeeksDataProps)

    const [casesFromAPI, setCasesFromAPI] = useState([])

    const [loadingAPI, setLoadingAPI] = useState(true as boolean)

    useEffect(() => {

        const getTwoWeeksData = async () => {
    
            const options = {
                method: "GET",
                url: "http://localhost:3003/cases/weeks"
            }
    
            const {data} = await axios(options)
            const {cases} = data

            setCasesFromAPI(cases)
        }

        getTwoWeeksData()

    }, [])

    useEffect(() => {

        const Reset = {
            firstWeek: 0,
            secondWeek: 0,
        }
    
        const allWeeksDeaths: number[] = []
    

        let sum1 = 0
        let sum2 = 0

        casesFromAPI.forEach((covid: CovidProps, index: number) => {
            if (index === 0) {
                Reset.firstWeek = covid.Deaths
            }
            
            if (index === 7) {
                Reset.secondWeek = covid.Deaths
            }
            
            if (index > 0 && index < casesFromAPI.length) {
                allWeeksDeaths[index] = covid.Deaths
            }
    
            if (index > 0 && index < 8){
                sum1 += covid.Deaths
            }
            
            if (index > 7 && index < 15) {
                sum2 += covid.Deaths
            }
            
            
            if (index === casesFromAPI.length - 1) {
    
                setSumOfAllWeeksDeaths({
                    firstWeek: sum1 - (Reset.firstWeek * 7),
                    secondWeek: sum2 - (Reset.secondWeek * 7),
                })
                setResetWeekData({ first: Reset.firstWeek, second: Reset.secondWeek })
                setAllWeeksDataOfDeaths(allWeeksDeaths)

            }
        })

    }, [casesFromAPI])

    useEffect(() => {

        setMediaMovelMortes({
            firstResult: Math.floor(sumOfAllWeeksDeaths.firstWeek / 7),
            secondResult: Math.floor(sumOfAllWeeksDeaths.secondWeek / 7),
        }) 

    
    }, [sumOfAllWeeksDeaths])


    useEffect(() => {
       
        if (sumOfAllWeeksDeaths.firstWeek !== undefined && mediaMovelMortes.firstResult !== undefined) {
            setLoadingAPI(false)
        }

    }, [mediaMovelMortes, allWeeksDataOfDeaths, sumOfAllWeeksDeaths])


    return(
        <CovidContext.Provider value={{resetWeekData, mediaMovelMortes, allWeeksDataOfDeaths, sumOfAllWeeksDeaths, loadingAPI }}>
            {children}
        </CovidContext.Provider>
    )
} 