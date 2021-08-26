export function useGetMonth () {
    const date = new Date()
    let month: string = "Janeiro"
    
    const value: number = date.getMonth() + 1

    const verify = () => {

        switch (value) {
            case 1: 
                month = "Janeiro"
                return
    
            case 2: 
                month = "Fevereiro"
                return
        
            case 3: 
                month = "Março"
                return
    
            case 4: 
                month = "Abril"
                return
    
            case 5: 
                month = "Maio"
                return
    
            case 6: 
                month = "Junho"
                return
    
            case 7: 
                month = "Julho"
                return
    
            case 8: 
                month = "Agosto"
                return
    
            case 9: 
                month = "Setembro"
                return
    
            case 10: 
                month  = "Outubro"
                return
    
            case 11:
                month = "Novembro"
                return
    
            case 12: 
                month = "Dezembro"
                return
        }
    }

    verify()

    return month
}