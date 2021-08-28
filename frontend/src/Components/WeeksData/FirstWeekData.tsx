import { useCovidContext } from "Hooks/useCovidContext";

import { WeeksDataProps } from "Types";

import styled from "styled-components";
import { StyledExample } from "Pages/MediaMovelMortes/styles";

const Total = styled.h3`
    padding: 13px 5px 5px 5px;
`

const FirstWeek = styled.div`
    padding: 5px;
`


export function FirstWeekData({index, values}: WeeksDataProps) {

    const {resetWeekData, sumOfAllWeeksDeaths} = useCovidContext()

    const Index = Number(index)

    const validate = () => {
        for(let i = 0; i < 15; i++) {
            
            if (i > 0 && i < 8) {
                switch(index) {
                    case `${i}`:
                        values -= resetWeekData.first
                        return       
                }
            }
        
        }
    }

    validate();

    return(
        <StyledExample>
            {Number(index) < 8 ? (
                <FirstWeek>
                    <div>
                        {values} Mortes
                    </div>

                    {Index === 7 ? (
                        <Total>
                            <strong>TOTAL: {sumOfAllWeeksDeaths.firstWeek} Mortes </strong>
                        </Total>
                    ): (<></>)}

                </FirstWeek>
            ) : (
                <></>
            )}
        </StyledExample>
    )
}