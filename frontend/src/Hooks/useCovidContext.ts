import {CovidContext} from "Context/CovidAPIContext"
import { useContext } from "react"

export function useCovidContext() {

    const value = useContext(CovidContext)

    return value 
} 