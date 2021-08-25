import { useEffect, useState } from 'react'
import { Tittle } from 'Components/Tittle'

import {
    Container, 
    Text
} from './styles'

import { 
    CovidProps, 
    WeekProps, 
    ResetWeekProps 
} from "Types/index"

const axios = require('axios')


export function MMM () {

    const [resetWeek, setResetWeek] = useState({} as ResetWeekProps)

    const [firstWeek, setFirstWeek] = useState({} as WeekProps)
    const [secondWeek, setSecondWeek] = useState({} as WeekProps)


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

            const allWeeks: number[] = []
            const allDates: string[] = []

            const mapCases = (covid: CovidProps, index: number) => {
                console.log(`${covid.Deaths} -> ${covid.Date} -> ${index}`)

                if (index === 0) {
                    Reset.firstWeek = covid.Deaths
                }

                if (index === 7) {
                    Reset.secondWeek = covid.Deaths
                }
                        
                allWeeks[index] = covid.Deaths
                allDates[index] = covid.Date

            }
            
            setResetWeek(Reset)

            const getFirstWeek: WeekProps = {
                first: {
                    number: allWeeks[1] - resetWeek.firstWeek,
                    date: allDates[1],
                },
                second: {
                    number: allWeeks[2] - resetWeek.firstWeek,
                    date: allDates[2],
                },
                third: {
                    number: allWeeks[3] - resetWeek.firstWeek,
                    date: allDates[3],
                },
                fourth: {
                    number: allWeeks[4] - resetWeek.firstWeek,
                    date: allDates[4],
                },
                fifth: {
                    number: allWeeks[5] - resetWeek.firstWeek,
                    date: allDates[5],
                },
                sixth: {
                    number: allWeeks[6] - resetWeek.firstWeek,
                    date: allDates[6],
                },
                seventh: {
                    number: allWeeks[7] - resetWeek.firstWeek,
                    date: allDates[7],
                }
            }

            const getSecondWeek: WeekProps = {
                first: {
                    number: allWeeks[8] - resetWeek.secondWeek,
                    date: allDates[8],
                },
                second: {
                    number: allWeeks[9] - resetWeek.secondWeek,
                    date: allDates[9],
                },
                third: {
                    number: allWeeks[10] - resetWeek.secondWeek,
                    date: allDates[10],
                },
                fourth: {
                    number: allWeeks[11] - resetWeek.secondWeek,
                    date: allDates[11],
                },
                fifth: {
                    number: allWeeks[12] - resetWeek.secondWeek,
                    date: allDates[12],
                },
                sixth: {
                    number: allWeeks[13] - resetWeek.secondWeek,
                    date: allDates[13],
                },
                seventh: {
                    number: allWeeks[14] - resetWeek.secondWeek,
                    date: allDates[14],
                },
            }


            setFirstWeek(getFirstWeek)
            setSecondWeek(getSecondWeek)
            

            cases.forEach(mapCases)
        }

        getTwoWeeksData()
    })

    return(
        <Container>
            {/* Média Móvel de Mortes */}
            <Tittle>
                Média Móvel de Mortes
            </Tittle>

            {/* What's the meaning */}
            <Text>
                É uma média feita para entender a velocidade com que a doença (COVID-19) está avançando, 
                levando em conta as oscilações entre dias de semana e fins de semana.
            </Text>

            {/* How to calculate */}
            <Tittle>
                Como Calcular:
            </Tittle>

            {/* First Step */}
            <Text>
                <strong>Primeiro Passo:</strong> Some o total de mortes durante 7 dias (1 semana)
            </Text>

            {/* First Example */}
            <div></div>

            {/* Second Step */}
            <div></div>

            {/* Second Example */}
            <div></div>

            {/* Comparition */}
            <div></div>
            
        </Container>
    )
}