import { useEffect, useState } from 'react'

import { Times } from 'Components/Times'
import { Tittle } from 'Components/Tittle'
import { FirstWeekData } from 'Components/WeeksData/FirstWeekData'
import { SecondWeekData } from 'Components/WeeksData/SecondWeekData'
import { Menu } from 'Components/DesktopMenu'

import { useCovidContext } from 'Hooks/useCovidContext'
import { useGetMonth } from 'Hooks/useGetMonth'

import { WeekNumberProps } from 'Types'

import {
    Comparition,
    Container, 
    SecondStepContainer, 
    StyledExample, 
    WeeksDataContainer
} from './styles'


export function MMM () {
    const [weekNumber, setWeekNumber] = useState({} as WeekNumberProps)
    const {
        firstWeekData, 
        sumOfFirstWeekDeaths,
        sumOfSecondWeekDeaths,
        mediaMovelMortes
    } = useCovidContext()
    
    const month = useGetMonth()

    
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
                    {Object.entries(firstWeekData).map((values) => {
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
                    {Object.entries(firstWeekData).map((values) => {
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

            {/* Comparition */}
            <Comparition>
                <StyledExample>
                    {mediaMovelMortes.firstResult}
                </StyledExample>

                <Times />

                <StyledExample>
                    {mediaMovelMortes.secondResult}
                </StyledExample>
            </Comparition>
            
        </Container>
    )
}