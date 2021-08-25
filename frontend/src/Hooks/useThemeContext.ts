import {ThemeContext} from "Context/ThemeContext"
import { useContext } from "react"

export function useThemeContext() {

    const value = useContext(ThemeContext)

    return value 
} 