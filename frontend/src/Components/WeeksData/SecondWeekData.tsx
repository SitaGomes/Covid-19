import { useCovidContext } from "Hooks/useCovidContext";
import { WeeksDataProps } from "Types";
import styled from "styled-components";
import {StyledExample} from "Pages/MediaMovelMortes/styles"

const Total = styled.h3`
    padding: 13px 5px 5px 5px;
`

const SecondWeek = styled.div`
    padding: 5px;
`

export function SecondWeekData({index, values}: WeeksDataProps) {

    const {resetWeekData, sumOfAllWeeksDeaths} = useCovidContext()

    const Index = Number(index)

    const validate = () => {
        for(let i = 0; i < 15; i++) {
            
            if (i > 7 && i < 15) {
                switch(index) {
                    case `${i}`:
                        values -= resetWeekData.second
                        return       
                }
            }
        
        }
    }

    validate();

    return(
        <StyledExample>
            {Index > 7 ? (
                <SecondWeek>
                    <div>
                        {values} Mortes
                    </div>


                    {Index === 14 ? (
                        <Total>
                            <strong>TOTAL: {sumOfAllWeeksDeaths.secondWeek} Mortes </strong>
                        </Total>
                    ): (<></>)}
                </SecondWeek>

            ) : (<></>)}
        </StyledExample>
    )
}