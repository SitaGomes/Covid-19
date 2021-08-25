import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        tittle: string,
        
        colors: {
            background: string,
            icon: string,
            text: string,
        }
    }
}