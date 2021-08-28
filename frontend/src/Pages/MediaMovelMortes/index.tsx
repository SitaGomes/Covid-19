import { useEffect, useState } from 'react'

import { Times } from 'Components/Times'
import { Tittle } from 'Components/Tittle'
import { FirstWeekData } from 'Components/WeeksData/FirstWeekData'
import { SecondWeekData } from 'Components/WeeksData/SecondWeekData'
import { Menu } from 'Components/Menu'
import {LoadingFirstStep} from 'Components/LoadingFirstStep'
import { LoadingSecondStep} from 'Components/LoadingSecondStep'
import { LoadingResult } from 'Components/LoadingResult'

import { useOneMonthContext } from 'Hooks/useOneMonthContext'
import { useCovidContext } from 'Hooks/useCovidContext'
import { useGetMonth } from 'Hooks/useGetMonth'

import { DatabaseProps, WeekNumberProps } from 'Types'

import {database} from 'Service/Database'

import {
    Comparition,
    Container, 
    SecondStepContainer, 
    StyledExample, 
    WeeksDataContainer
} from './styles'

import { FadeDownTrail } from 'Styles/Animations/FadeDownTrail'
import {FadeLeft} from "Styles/Animations/FadeLeft"
import {FadeRight} from "Styles/Animations/FadeRight"
import { Fade } from 'Styles/Animations/Fade'

export function MMM () {

    const [weekNumber, setWeekNumber] = useState({} as WeekNumberProps)

    const {
        allWeeksDataOfDeaths,
        sumOfAllWeeksDeaths,
        mediaMovelMortes,
        loadingAPI
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
    
    
    useEffect(() => {
        
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
                await database.ref('Data').push(organizedDatabaseContent)
            } catch (error) {
                console.log(error)
            }
        }

        DatabasePush()
        
    }, [biggestNumberOfCases, biggestNumberOfDeaths, todaysDate, todaysTime, userLatitude, userLongitude])


    return(
        <Container>
            <Menu />

            <FadeDownTrail>

                <div >
                    {/* Média Móvel de Mortes */}
                    <Tittle>
                        Média Móvel de Mortes
                    </Tittle>
                </div>

                {/* What's the meaning */}
                <p >
                    É uma média feita para entender a velocidade com que a doença (COVID-19) está avançando, 
                    levando em conta as oscilações entre dias de semana e fins de semana.
                </p>


                <div>
                    {/* How to calculate */}
                    <Tittle>
                        Como Calcular?
                    </Tittle>
                </div>
                
                {/* First Step */}
                <p>
                    <strong>Primeiro Passo:</strong> Some o total de mortes durante 7 dias (1 semana)
                </p>

            </FadeDownTrail>

            {loadingAPI ? <LoadingFirstStep /> : (

                <WeeksDataContainer>
                    
                    <FadeLeft>
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
                    </FadeLeft>
                    
                    <FadeRight>
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
                    </FadeRight>


                </WeeksDataContainer>

            )}
            
            <Fade>
                {/* Second Step */}
                <p>
                    <strong>Segundo Passo:</strong> Divida o valor total por 7
                </p>
            </Fade>

            {loadingAPI ? <LoadingSecondStep /> : (
                
                <>     
                    {/* Second Step Example */}
                    <SecondStepContainer>

                        <FadeLeft>
                            {/* First Week example */}
                            <StyledExample>
                                {sumOfAllWeeksDeaths.firstWeek} / 7 = {mediaMovelMortes.firstResult} Mortes
                            </StyledExample>
                        </FadeLeft>

                        <FadeRight>
                            {/* Second Week Example */}
                            <StyledExample>
                                {sumOfAllWeeksDeaths.secondWeek} / 7 = {mediaMovelMortes.secondResult} Mortes
                            </StyledExample>
                        </FadeRight>

                    </SecondStepContainer>
                </>

            )}

            <Fade>
                <Tittle>
                    Resultado:
                </Tittle>
            </Fade>

            {loadingAPI ? <LoadingResult /> : (

                <Comparition>

                    <FadeLeft>
                        <StyledExample>

                            <h2>
                                {mediaMovelMortes.firstResult}
                            </h2>

                        </StyledExample>
                    </FadeLeft>

                    <Fade>
                        <Times />
                    </Fade>

                    <FadeRight>
                        <StyledExample>
                        
                            <h2>
                                {mediaMovelMortes.secondResult}
                            </h2>

                        </StyledExample>
                    </FadeRight>

                </Comparition>

            )}
            {/* Comparition */}
            
        </Container>
    )
}