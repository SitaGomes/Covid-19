import { useEffect, useState } from 'react'

import { Times } from 'Components/Times'
import { Tittle } from 'Components/Tittle'
import { FirstWeekData } from 'Components/WeeksData/FirstWeekData'
import { SecondWeekData } from 'Components/WeeksData/SecondWeekData'
import { Menu } from 'Components/Menu'

import { useOneMonthContext } from 'Hooks/useOneMonthContext'
import { useCovidContext } from 'Hooks/useCovidContext'
import { useGetMonth } from 'Hooks/useGetMonth'

import { DatabaseProps, WeekNumberProps } from 'Types'

import {database} from 'Service/Database'

import {
    Comparition,
    Container, 
    ExampleTittle, 
    SecondStepContainer, 
    StyledExample, 
    WeeksDataContainer
} from './styles'


export function MMM () {
    const [weekNumber, setWeekNumber] = useState({} as WeekNumberProps)
    const {
        allWeeksDataOfDeaths,
        sumOfFirstWeekDeaths,
        sumOfSecondWeekDeaths,
        mediaMovelMortes
    } = useCovidContext()

    const {
        biggestNumberOfCases,
        biggestNumberOfDeaths,
        todaysDate,
        todaysTime,
        userLatitude,
        userLongitude
    } = useOneMonthContext()
    
    const month = useGetMonth()
    
    const organizedDatabaseContent: DatabaseProps = {
        Covid: {
            Deaths: biggestNumberOfDeaths,
            Cases: biggestNumberOfCases,
        },
        User: {
            Date: `${todaysDate.year}:${todaysDate.month}:${todaysDate.day}`,
            Time: `${todaysTime.hour}:${todaysTime.minutes}:${todaysTime.seconds}`,
            Location: {
                lat: userLatitude ? userLatitude : 0, //! if location is block, lat: 0
                lon: userLongitude ? userLongitude : 0,
            }
        }

    }
    
    
    useEffect(() => {
        

        const date = new Date()
        
        const reduceDays = (days: number,) => {
            const day = date.getDate() + days 
            
            return day;    
        }
        
        setWeekNumber({
            firstWeek: `${reduceDays(-14)} - ${reduceDays(-8)}`,
            secondWeek: `${reduceDays(-7)} - ${reduceDays(-1)}`,
        })

        const DatabasePush = async () => {
            try {
                //await database.ref('Data').push(organizedDatabaseContent)
            } catch (error) {
                console.log(error)
            }
        }

        DatabasePush()
        
    }, [])

    return(
        <Container>
            <Menu />

            {/* Média Móvel de Mortes */}
            <Tittle>
                Média Móvel de Mortes
            </Tittle>

            {/* What's the meaning */}
            <p>
                É uma média feita para entender a velocidade com que a doença (COVID-19) está avançando, 
                levando em conta as oscilações entre dias de semana e fins de semana.
            </p>

            {/* How to calculate */}
            <Tittle>
                Como Calcular?
            </Tittle>

            {/* First Step */}
            <p>
                <strong>Primeiro Passo:</strong> Some o total de mortes durante 7 dias (1 semana)
            </p>

            <WeeksDataContainer>
                <div>
                    <h2>
                        {weekNumber.firstWeek} de {month}
                    </h2>

                    {/* First Week Example */}
                    {Object.entries(allWeeksDataOfDeaths).map((values) => {
                        return(
                            <div
                                key={values[0]}
                            >
                                <FirstWeekData 
                                    index={values[0]}
                                    values={values[1]}
                                />
                            </div>
                        )
                    })}
                </div>
                

                <div>

                    <h2>
                        {weekNumber.secondWeek} de {month}
                    </h2>

                    {/* Second Week Example */}
                    {Object.entries(allWeeksDataOfDeaths).map((values) => {
                        return(
                            <div
                                key={values[0]}
                            >
                                <SecondWeekData 
                                    index={values[0]}
                                    values={values[1]}
                                />
                            </div>
                        )
                    })}
                </div>

            </WeeksDataContainer>

            {/* Second Step */}
            <p>
               <strong>Segundo Passo:</strong> Divida o valor total por 7
            </p>

            {/* Second Step Example */}
            <SecondStepContainer>
                {/* First Week example */}
                <StyledExample>
                    {sumOfFirstWeekDeaths} / 7 = {mediaMovelMortes.firstResult} Mortes
                </StyledExample>

                {/* Second Week Example */}
                <StyledExample>
                    {sumOfSecondWeekDeaths} / 7 = {mediaMovelMortes.secondResult} Mortes
                </StyledExample>
            </SecondStepContainer>

            <Tittle>
                Resultado:
            </Tittle>

            {/* Comparition */}
            <Comparition>

                <StyledExample>

                    <ExampleTittle>
                        Média Móvel de Mortes de {weekNumber.firstWeek} de {month}
                    </ExampleTittle>

                    {mediaMovelMortes.firstResult}

                </StyledExample>

                <Times />

                <StyledExample>

                    <ExampleTittle>
                        Média Móvel de Mortes de {weekNumber.secondWeek} de {month}
                    </ExampleTittle>

                    {mediaMovelMortes.secondResult}
                </StyledExample>
            </Comparition>
            
        </Container>
    )
}