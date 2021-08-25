import { Tittle } from 'Components/Tittle'
import { FirstWeekData } from 'Components/WeeksData/FirstWeekData'
import { SecondWeekData } from 'Components/WeeksData/SecondWeekData'
import { useCovidContext } from 'Hooks/useCovidContext'

import {
    Container, 
    WeeksDataContainer
} from './styles'


export function MMM () {

    const {
        firstWeekData, 
    } = useCovidContext()

    return(
        <Container>
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
            <div></div>

            {/* Second Example */}
            <div></div>

            {/* Comparition */}
            <div></div>
            
        </Container>
    )
}