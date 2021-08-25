import { createContext, useCallback } from "react"
import { ThemeProvider, DefaultTheme  } from "styled-components"

import {ChildrenProps, ThemeProps} from "Types"

import { useLocalState } from "Hooks/useLocalState" 

import light from "Styles/Themes/light"
import dark from "Styles/Themes/dark"

export const ThemeContext = createContext({} as ThemeProps)

export function ThemeContextProvider ({children}: ChildrenProps) {

    const [theme, setToogleTheme] = useLocalState<DefaultTheme>("theme", light)

    const ToogleTheme = useCallback(() => {
        setToogleTheme(theme.tittle === "light" ? dark : light)

    }, [theme]) 
    

    return(
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{theme, ToogleTheme}}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}