import { useCovidContext } from "Hooks/useCovidContext";
import { WeeksDataProps } from "Types";
import styled from "styled-components";

const Div = styled.div`
    background-color: ${props => props.theme.tittle === "dark" ? "#F9F9F9" : "#1F1F1F"};
    color: ${props => props.theme.tittle === "dark" ? "#1F1F1F" : "#F9F9F9"};
    
    padding: 0 10px;

    border-radius: 10px;
`
const Total = styled.h3`
    padding: 13px 5px 5px 5px;
`

const SecondWeek = styled.div`
    padding: 5px;
`

export function SecondWeekData({index, values}: WeeksDataProps) {

    const {resetWeekData, sumOfSecondWeekDeaths} = useCovidContext()

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
        <Div>
            {Index > 7 ? (
                <SecondWeek>
                    <div>
                        {values} Mortes
                    </div>


                    {Index === 14 ? (
                        <Total>
                            <strong>TOTAL: {sumOfSecondWeekDeaths} Mortes </strong>
                        </Total>
                    ): (<></>)}
                </SecondWeek>

            ) : (<></>)}
        </Div>
    )
}