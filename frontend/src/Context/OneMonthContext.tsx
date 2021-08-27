import { createContext, useEffect, useState } from "react"
import { BiggestDataProps, ChildrenProps, CovidProps, MonthContextProps } from "Types"

export const MonthContext = createContext({} as MonthContextProps)

const axios = require('axios')

export function OneMonthContext ({children}: ChildrenProps) {
    const date = new Date()

    const [biggestNumberOfDeaths, setBiggestNumberOfDeaths] = useState(0 as number)
    const [biggestNumberOfCases, setBiggestNumberOfCases] = useState(0 as number)

    const [userLatitude, setUserLatitude] = useState(0 as number)
    const [userLongitude, setUserLongitude] = useState(0 as number)

    const todaysDate = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
    }

    const todaysTime = {
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(), 
    }
    
    
    //! API call
    useEffect(() => {
        
        
        const options = {
            method: 'get',
            url: 'http://localhost:3003/cases/months/one'
        }
        
        const BiggestNumber: BiggestDataProps = {
            ofDeaths: 0,
            ofCases: 0,
        }
        
        const getOneMonth = async () => {
            const res = await axios(options)
            const {data} = res
            const {cases} = data
            
            const CasesLenght = cases.length
            
            
            const mapCases = (covid: CovidProps, index: number) => {

                if (index === 0) {
                    BiggestNumber.ofCases = covid.Confirmed
                    BiggestNumber.ofDeaths = covid.Deaths
                }

                if (covid.Deaths > BiggestNumber.ofDeaths) {
                    BiggestNumber.ofDeaths = covid.Deaths
                }

                if (covid.Confirmed > BiggestNumber.ofCases) {
                    BiggestNumber.ofCases = covid.Confirmed
                }
                
                if (index === CasesLenght - 1) {
                    setBiggestNumberOfDeaths(BiggestNumber.ofDeaths)
                    setBiggestNumberOfCases(BiggestNumber.ofCases)
                }
            }

            cases.forEach(mapCases)
        }
        
        getOneMonth()

    }, [])


    
    if ("geolocation" in navigator) {
        
        navigator.geolocation.getCurrentPosition((position) => {
            setUserLatitude(position.coords.latitude)
            setUserLongitude(position.coords.longitude)
        })

      } else {

        alert("O seu Navegador não tem suporte a localização =(");
    }


    return (
        <MonthContext.Provider value={{biggestNumberOfCases, biggestNumberOfDeaths, todaysTime, todaysDate, userLatitude, userLongitude}}>
            {children}
        </MonthContext.Provider>
    )
}